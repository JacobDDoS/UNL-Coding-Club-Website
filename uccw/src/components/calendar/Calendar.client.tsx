'use client'

import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import ICAL from 'ical.js';

export default function CalendarClientComponent({ icsText }) {
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    if (icsText) {
      const jcalData = ICAL.parse(icsText);
      const comp = new ICAL.Component(jcalData);
      const vevents = comp.getAllSubcomponents('vevent');

      const parsedEvents = vevents.map(vevent => {
        const event = new ICAL.Event(vevent);
        return {
          title: event.summary,
          start: event.startDate.toJSDate(),
          end: event.endDate.toJSDate(),
          allDay: event.startDate.isDate,
          description: event.description || 'No description available.',
        };
      });

      setEvents(parsedEvents);
    }
  }, [icsText]);

  const handleEventClick = (clickInfo) => {
    setSelectedEvent({
      title: clickInfo.event.title,
      start: clickInfo.event.start ? clickInfo.event.start.toLocaleString() : 'N/A',
      end: clickInfo.event.end ? clickInfo.event.end.toLocaleString() : 'N/A',
      description: clickInfo.event.extendedProps.description,
    });
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div className='flex flex-col w-full max-w-4xl rounded-xl bg-white'>
      <div className="w-full max-w-4xl rounded-xl bg-white">
        <div className="overflow-auto p-4 md:p-12" style={{ maxHeight: 'calc(100vh - 100px)' }}>
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={events}
            eventClick={handleEventClick}
            height="auto"
          />
        </div>
      </div>

      {isModalOpen && selectedEvent && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'
          onClick={closeModal}
        >
          <div
            className='w-11/12 max-w-lg rounded-xl bg-white p-6 shadow-lg md:p-8'
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className='mb-4 text-2xl font-bold'>{selectedEvent.title}</h2>
            <div className='space-y-2'>
                <p><strong>Starts:</strong> {selectedEvent.start}</p>
                <p><strong>Ends:</strong> {selectedEvent.end}</p>
                <p className='mt-2 text-gray-600'>{selectedEvent.description}</p>
            </div>
            <button
              onClick={closeModal}
              className='mt-6 mx-auto rounded bg-red-500 px-4 py-2 font-semibold text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50'
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}