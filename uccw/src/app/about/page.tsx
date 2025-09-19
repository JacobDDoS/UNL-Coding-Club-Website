import Image from 'next/image';
import Blocks from "@/src/components/page/Blocks";

//                  <div className=" bg-gradient-to-r from-secondary backdrop-opacity-70 -z-10 -translate-x-6" style={{clipPath: "polygon(0% 0%, 2% 25%, 3% 50%, 2% 75%, 0% 100%, 100% 100%, 100% 0%)"}}>
//                   <svg className="absolute" width="740" height="152" viewBox="0 0 740 152" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.1614 10.9846C15.4494 4.48566 9.48217 0.0103874 2.76164 0.0463104C-13.5741 0.133629 45.1829 0.0604272 109.92 0H627.082C682.491 4.37443 735.462 61.564 739.724 137.383C740.18 145.498 733.887 151.987 725.759 151.987C623.204 151.991 -0.641047 152.014 14.1486 151.987C29.6448 151.958 40.9883 101.434 17.1614 10.9846Z" fill="url(#paint0_linear_559_3)"/><defs><linearGradient id="paint0_linear_559_3" x1="190.348" y1="409.451" x2="602.94" y2="-232.3" gradientUnits="userSpaceOnUse"><stop offset="0.110577" stop-color="#ED1C24"/><stop offset="0.831731" stop-color="#262626" stop-opacity="0"/></linearGradient></defs></svg>

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