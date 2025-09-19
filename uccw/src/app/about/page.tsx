import Image from 'next/image';
import Blocks from "@/src/components/page/Blocks";

//<div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-bg-primary rounded-2xl blur-sm opacity-70 -z-10"></div>

export default function Home() {
  return (
          <div className="relative flex justify-center w-full h-full lg:gap-20 m-auto min-[1450px]:gap-50 px-10">
              <div className="">
                <div className="max-w-2xl">
                  <div className=" bg-gradient-to-r from-secondary backdrop-opacity-70 -z-10 -translate-x-6" style={{clipPath: "polygon(0% 0%, 2% 25%, 3% 50%, 2% 75%, 0% 100%, 100% 100%, 100% 0%)"}}>
                    <h1 className='text-5xl text-balance text-white font-extrabold drop-shadow-lg/50 leading-snug translate-x-6'>
                      Learning by Doing, One Project at a Time.
                    </h1>
                  </div>
                  <p className="text-white text-2xl font-semibold max-w-xl pt-4 drop-shadow-lg/50">
                    Made in the Fall of 2024, Coding Club aims to create a collaborative environment where students can learn, build, and explore in the field of Computer Science.
                  </p>
                </div>
              
              </div>
              <div className="drop-shadow-2xl/25 drop-shadow-white z-10 pl-4">
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