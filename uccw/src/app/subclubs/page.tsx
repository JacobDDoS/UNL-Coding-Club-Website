'use client'

import SubclubItem from "@/src/components/subclubs/SubclubItem";
import {existingSubclubs} from "@/src/lib/Subclub"

export default function Subclubs() {
  const subclubs = existingSubclubs;
  return (
    <div className="relative">
      <h1 className="text-[70px] text-white text-center mt-10 drop-shadow-lg/50 font-extrabold">Current Subclubs</h1>
      {
        subclubs.map((subclubItem, idx) => {
          return <SubclubItem subclub={subclubItem} key={idx}/>
        })
      }
    </div>
  );
}