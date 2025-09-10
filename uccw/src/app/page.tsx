import Image from 'next/image';
import Blocks from "@/src/components/page/Blocks";
import Buttons from './Buttons';

export default function LandingPage() {
    return (
        <div className="select-none overflow-hidden h-[calc(90%-50px)] w-[calc(100%-50px)] flex justify-center rounded-2xl m-auto">
            <div className="flex items-center justify-center px-10 py-30 h-full lg:gap-20 min-[1450px]:gap-50 w-full relative shadow-[inset_0_0_15px_rgba(0,0,0,0.5)] shadow-white">
                <Blocks />
                <div className="max-w-2xl z-10 ">
                    <h1 className='font-extrabold text-5xl text-white text-balance leading-relaxed drop-shadow-lg/50 select-none'>
                        University of Nebraska Lincoln <span className='text-secondary'>Coding Club</span>
                    </h1>
                    <Buttons />
                </div>
                <div className="drop-shadow-2xl/25 drop-shadow-white z-10">
                    <Image 
                    src='/landinglogotest.png' 
                    alt='Logo'
                    width={400}
                    height={400}
                    />
                </div>
            </div>
            
        </div>
    )

}