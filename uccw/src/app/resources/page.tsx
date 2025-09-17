import Image from "next/image";

export default function Resources() {
  
  return (
    <div className="flex flex-row w-full h-full max-w-[1200px] m-auto gap-10">
        <div className="flex flex-col w-[60%] h-[500px] align-middle m-auto wrap-break-word">
          <h1 className="text-[80px] text-left text-white underline decoration-red-500 decoration-4 font-extrabold drop-shadow-lg/50 py-2">Resources</h1>
          <p className="text-white font-extrabold drop-shadow-lg/50 text-[25px] my-2 w-full text-wrap">
            UNL Computer Science Requirements/Courses: <a className="text-[var(--color-accent)]" href="https://catalog.unl.edu/undergraduate/engineering/computer-science/">https://catalog.unl.edu/undergraduate/engineering/computer-science/</a>
          </p>
          <p className="text-white font-extrabold drop-shadow-lg/50 text-[25px] my-2">
            Coding Club Discord: <a className="text-[var(--color-accent)]" href="https://discord.gg/aZyzjWWWTR">https://discord.gg/aZyzjWWWTR</a>
          </p>
          <p className="text-white font-extrabold drop-shadow-lg/50 text-[25px] my-2">
            Coding Club Website Repo: <a className="text-[var(--color-accent)]" href="https://github.com/JacobDDoS/UNL-Coding-Club-Website">https://github.com/JacobDDoS/UNL-Coding-Club-Website</a>
          </p>
        </div>
        <div className="flex flex-col w-[40%] align-middle justify-center">
          <div>
            <div className="drop-shadow-2xl/25 drop-shadow-white z-10 pl-4">
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
  );
}
