'use client'
import { SponsorTier } from "@/src/lib/SponsorTier";
import { useEffect, useState } from "react";

export default function SponsorTierComponent({tierTitle, tierDescription, tierBenefits, tierColor}: SponsorTier) {
  return (
    <div className="flex flex-col max-w-[1200px] mb-20">
        <div className={`w-full h-[175px] flex align-middle justify-center bg-linear-to-t from-[${tierColor}]/100 to-[${tierColor}]/25 rounded-4xl`}>
          <h1 className="text-white font-extrabold drop-shadow-lg/50 text-[100px] my-2">{tierTitle}</h1>
        </div>
        <div className="flex flex-row mt-5 min-h-[400px]">
          <div className="w-[50%] p-5">
            <p className="text-white font-extrabold drop-shadow-lg/50 text-4xl m-auto">{tierDescription}</p>
          </div>
          <div className="w-[50%] p-5">
            <h2 className="text-white font-extrabold drop-shadow-lg/50 text-4xl">Benefits:</h2>
            <ul className="list-disc marker:text-white ml-5">
              {tierBenefits.map((benefit, idx) => <li key={`benefit-${idx}`}><p className="text-white font-extrabold drop-shadow-lg/50 text-2xl my-2">{benefit}</p></li>)}
            </ul>
          </div>
        </div>
    </div>
  );
}
