import Link from 'next/link';

export default function Buttons() {
  return (
    <div className="flex flex-row w-[50%] h-[75px] items-center space-x-5">
      <Link href="/about" className="w-[150px] h-[50px] rounded-lg bg-[var(--color-secondary)] flex justify-center items-center mt-0">
        <h1 className="text-white text-2xl font-bold">About us</h1>
      </Link>
      <div className="flex flex-row space-x-6 items-center h-full">
        <a href="https://discord.gg/aZyzjWWWTR" target="_blank">
          <img src='/discord.svg' alt="" className="h-7"/>
        </a>
        <a href="https://www.instagram.com/unlcodingclub/" target="_blank">
          <img src="/instagram.svg" alt="" className="h-9"/>
        </a>
        <a href="https://unl.campuslabs.com/engage/organization/codingclub" target="_blank">
          <img src="/nvolveu.svg" alt="" className="h-8"/>
        </a>
      </div>
    </div>
  );
}