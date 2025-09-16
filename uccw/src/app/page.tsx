import Image from 'next/image';
import Buttons from './Buttons';

export default function LandingPage() {
    return (
        <div className="relative flex items-center justify-center m-auto px-10 py-30 lg:gap-20 w-full min-[1450px]:gap-50">
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
            
    )

}