import Calendar from '@/src/components/calendar/Calendar';

export default function CalendarPage(): any {
  return (
    <div className="relative flex justify-center items-center w-full px-10 py-10">
      <div className="w-full max-w-4xl">
        <Calendar />
      </div>
    </div>
  );
}