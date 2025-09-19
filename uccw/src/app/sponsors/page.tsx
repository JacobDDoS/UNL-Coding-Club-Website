import { SponsorTier, tiers } from "@/src/lib/SponsorTier";
import Image from "next/image";
import Link from "next/link";
import SponsorTierComponent from "./sponsorTierComponent";

export default function Sponsors() {
  const sponsorTiers : Array<SponsorTier> = tiers;
  return (
    <div>
        <div className="flex flex-row w-full min-h-[calc(90vh-50px)] max-w-[1200px] m-auto gap-10">
            <div className="flex flex-col w-[60%] h-[500px] justify-center align-middle m-auto wrap-break-word">
            <h1 className="text-[50px] text-left text-white underline decoration-red-500 decoration-4 font-extrabold drop-shadow-lg/50 py-2">
                Become a <span className="text-[var(--color-secondary)]">Sponsor</span> Today!
            </h1>
            <p className="text-white font-extrabold drop-shadow-lg/50 text-[25px] my-2 w-full text-wrap">
                Do you want to help fund a student-led organization focused on fostering a <span className="text-[var(--color-accent)]">warm</span>, <span className="text-[var(--color-accent)]">welcoming</span> environment in Nebraska?
            </p>
            <button className="flex justify-center py-2 z-5">
                <Link href="https://forms.gle/7sRPHFR4AkXv8B5r6" target="_blank" className="w-[450px] h-[50px] rounded-lg bg-[var(--color-secondary)] flex justify-center items-center mt-0 cursor-pointer">
                    <h1 className="text-white text-2xl font-bold">Become a UNL Coding Club Sponsor</h1>
                </Link>
            </button>
            </div>
            <div className="flex flex-col w-[40%] align-middle justify-center">
            <div>
                <div className="drop-shadow-2xl/25 drop-shadow-white z-10 pl-10">
                    <Image
                    src='/landinglogotest.png' 
                    alt='Logo'
                    width={400}
                    height={400}
                    />
                </div>
            </div>
            </div>
        </div>
        {
            sponsorTiers.map((sponsorTierData, idx) => <SponsorTierComponent key={`sponsor-${idx}`} {...sponsorTierData} />)
        }
    </div>
  );
}
