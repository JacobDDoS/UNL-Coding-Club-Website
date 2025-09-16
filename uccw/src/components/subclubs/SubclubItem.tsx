import { Subclub } from "@/src/lib/Subclub";
import Link from "next/link";

interface SubclubItemProps {
  subclub: Subclub;
}

export default function SubclubItem({ subclub }: SubclubItemProps) {
  const { image, title, officer, description } = subclub;
  return (
    <div className="flex flex-row relative max-w-[1000px] m-10 bg-[var(--color-bg-secondary)] h-70 rounded-[20px]">
      <div className="w-2/3 h-full">
      <div className="flex align-middle justify-center drop-shadow-lg/50 p-4">
          <img className="aspect-square drop-shadow-lg/80 rounded-[50px] drop-shadow-[#ffffff]" src={`${image}.png`} alt={`${title} logo`} />
      </div>
      </div>
      <div className="h-full flex flex-col">
        <div>
          <h1 className="text-5xl text-left text-white underline decoration-red-500 decoration-4 font-extrabold drop-shadow-lg/50 py-2">{title}</h1>
          <h2 className="font-extrabold drop-shadow-lg/50 text-white text-2xl my-2"><span className="text-[var(--color-accent)]">Officer:</span> {officer}</h2>
          <p className="text-white font-extrabold drop-shadow-lg/50 text-xl my-2">{description}</p>
        </div>
        <div className="flex justify-end items-end grow p-5">
          <Link href={`/subclub/${title}`} className="w-[100px] h-[50px] rounded-2xl bg-[var(--color-secondary)] flex justify-center items-center">
            <h1 className="text-white text-2xl font-bold">Go To</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}
