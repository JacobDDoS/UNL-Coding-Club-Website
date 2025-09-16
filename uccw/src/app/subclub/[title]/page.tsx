'use client'

import SubclubItem from "@/src/components/subclubs/SubclubItem";
import {existingSubclubs} from "@/src/lib/Subclub"
import { useParams } from "next/navigation";

export default function SubclubPage() {
  const params = useParams();
  let title = params.title as string;
  title = title.replace(/%20/g, " ");

  const subclub = existingSubclubs.find(subclub => subclub.title === title);

  if (!subclub) {
    return <div>
      <h1 className="text-2xl text-white">Subclub not found!</h1>
    </div>;
  }

  return (
    <div className="flex flex-row w-full h-full max-w-[1200px] m-auto gap-10">
        <div className="flex flex-col w-[60%] h-[500px] justify-center align-middle m-auto">
          <h1 className="text-[55px] text-left text-white underline decoration-red-500 decoration-4 font-extrabold drop-shadow-lg/50 py-2">{subclub.title}</h1>
          <p className="text-white font-extrabold drop-shadow-lg/50 text-xl my-2">{subclub.description}</p>
          <p className="text-white font-extrabold drop-shadow-lg/50 text-xl my-2">Technologies we utilize: {subclub.technologiesUsed.map((tech, idx) => 
          <>
            <span className="text-[var(--color-accent)]">{`${tech}`}</span>
            <span>{idx !== subclub.technologiesUsed.length-1 ? ', ' : ''}</span>
          </>
        )} </p>
          <p className="text-white font-extrabold drop-shadow-lg/50 text-xl my-2">Skills we learn/practice:</p>
          <ul className="font-extrabold drop-shadow-lg/50 text-xl my-2 text-[var(--color-accent)] list-disc marker:[var(--color-accent)] ml-8">
            {subclub.skillsLearned.map((skill) => <li>{skill}</li>)}
          </ul>
          <p className="text-white font-extrabold drop-shadow-lg/50 text-xl my-2">We meet every <span className="text-[var(--color-secondary)]">{subclub.meetingTime}</span></p>
        </div>
        <div className="flex flex-col w-[40%]">
          <div>
            <img className="drop-shadow-lg/80 rounded-[50px] drop-shadow-[#ffffff] h-auto max-w-full" src={`${subclub.officerImage}.jpg`} alt={`Image of ${subclub.officer}`} />
          </div>
          <div>
            <h1 className="font-extrabold drop-shadow-lg/50 text-white text-2xl my-2 text-center"><span className="text-[var(--color-accent)]">Officer: </span>{subclub.officer}</h1>
          </div>
        </div>
    </div>
  );
}
