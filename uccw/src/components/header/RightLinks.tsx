'use client'
import { redirect } from "next/navigation";

export default function RightLinks() {
  return (
    <div className='flex flex-row w-1/3 justify-between items-center font-bold text-l text-xl text-white'>

      <a href="/sponsors">
        <button className="cursor-pointer transition ease-in duration-300 hover:underline decoration-[var(--color-secondary)] hover:scale-105">
          Sponsors
        </button>
      </a>
      <a href="/calendar">
        <button className="cursor-pointer transition ease-in duration-300 hover:underline decoration-[var(--color-secondary)] hover:scale-105">
          Calendar
        </button>
      </a>
      <a href="/subclubs">
        <button className="cursor-pointer transition ease-in duration-300 hover:underline decoration-[var(--color-secondary)] hover:scale-105">
          Login
        </button>
      </a>
    </div>
  );
}