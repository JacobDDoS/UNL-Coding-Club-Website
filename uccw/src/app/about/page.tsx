import Image from 'next/image';
import Blocks from "@/src/components/page/Blocks";

//<div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-bg-primary rounded-2xl blur-sm opacity-70 -z-10"></div>

export default function Home() {
  return (
          <div className="relative flex items-center justify-center h-full px-10 py-30 lg:gap-20 w-full min-[1450px]:gap-50">
              <div className="max-w-2xl z-10 ">
                <div className="relative">
                  <h1 className='font-extrabold text-5xl text-white text-balance leading-relaxed drop-shadow-lg select-none'>
                    Learning by Doing, One Project at a Time.
                  </h1>
                </div>
              
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
          
  );
}