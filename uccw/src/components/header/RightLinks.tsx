'use client'
import Link from "next/link";
import { redirect } from "next/navigation";

export default function RightLinks() {
  return (
    <div className='flex flex-row w-1/3 justify-between items-center font-bold text-l text-xl text-white'>

      <Link href="/sponsors">
        <button className="cursor-pointer transition ease-in duration-300 hover:underline decoration-[var(--color-secondary)] hover:scale-105">
          Sponsors
        </button>
      </Link>
      <Link href="/calendar">
        <button className="cursor-pointer transition ease-in duration-300 hover:underline decoration-[var(--color-secondary)] hover:scale-105">
          Calendar
        </button>
      </Link>
      <Link href="/subclubs">
        <button className="cursor-pointer transition ease-in duration-300 hover:underline decoration-[var(--color-secondary)] hover:scale-105">
          Login
        </button>
      </Link>
    </div>
  );
}