import CalendarClientComponent from './Calendar.client';

const ICS_URL = 'https://calendar.google.com/calendar/ical/unlsoccoding%40gmail.com/public/basic.ics';

export default async function CalendarPage() {
  let icsText = '';
  try {
    const response = await fetch(ICS_URL, { next: { revalidate: 300 }});
    if (response.ok) {
      icsText = await response.text();
    }
  } catch (err) {
    console.error('Failed to fetch ICS:', err);
  }

  return <CalendarClientComponent icsText={icsText} />;
}