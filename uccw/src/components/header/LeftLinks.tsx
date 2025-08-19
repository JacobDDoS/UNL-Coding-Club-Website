'use client'
import { redirect } from "next/navigation";

export default function LeftLinks() {
  return (
    <div className='flex flex-row w-1/3 justify-between items-center font-bold text-l text-white'>
      <button
        onClick={() => redirect('/about')}
      >
        About
      </button>
      <button
        onClick={() => redirect('/resources')}
      >
        Resources
      </button>
      <button
        onClick={() => redirect('/subclubs')}
      >
        Subclubs
      </button>
    </div>
  );
}