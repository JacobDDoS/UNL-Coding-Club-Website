export default function LeftLinks() {
  return (
    <div className='flex flex-row w-1/3 justify-between items-center font-bold text-l text-xl text-white'>
      <a href="/about">
        <button className="cursor-pointer transition ease-in duration-300 hover:underline decoration-[var(--color-secondary)] hover:scale-105">
          About
        </button>
      </a>
      <a href="/resources">
        <button className="cursor-pointer transition ease-in duration-300 hover:underline decoration-[var(--color-secondary)] hover:scale-105">
          Resources
        </button>
      </a>
      <a href="/subclubs">
        <button className="cursor-pointer transition ease-in duration-300 hover:underline decoration-[var(--color-secondary)] hover:scale-105">
          Subclubs
        </button>
      </a>
    </div>
  );
}