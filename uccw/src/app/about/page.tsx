import Image from 'next/image';
import Blocks from "@/src/components/page/Blocks";

export default function Home() {
  return (
    <div className="select-none overflow-hidden">
                
                <div className="flex items-center justify-around px-10 py-30">
                    <div className="max-w-2xl z-10 ">
                        <h1 className='font-extrabold text-5xl text-white text-balance leading-relaxed drop-shadow-lg/50 select-none'>
                            Learning By Doing, One Project at a Time
                        </h1>
                    </div>
                    <div className="drop-shadow-2xl/25 drop-shadow-white z-10">
                        <Image 
                        src='/landinglogotest.png' 
                        alt='Logo'
                        width={300}
                        height={300}
                        />
                    </div>
                </div>
               
            </div>
  );
}