'use client'
import { redirect } from "next/navigation";

export default function RightLinks() {
  return (
    <div className='flex flex-row w-1/3 justify-between items-center font-bold text-l text-white'>
      <button
        onClick={() => redirect('/sponsors')}
      >
        Sponsors
      </button>
      <button
        onClick={() => redirect('/calendar')}
      >
        Calendar
      </button>
      <button
        onClick={() => redirect('/login')}
      >
        Login
      </button>
    </div>
  );
}