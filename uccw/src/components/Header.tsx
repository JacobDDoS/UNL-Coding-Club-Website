import Image from "next/image";

export default function Header() {
  return (
    <div className='flex flex-row w-full h-1/5 min-h-[75px]'>
      <div className='absolute w-[75px] h-[75px] top-0 left-0'>
        <Image
          src='/logo.jpg'
          alt='Logo'
          fill
        />
      </div>

      <div className='items-center justify-center w-1/5 h-4/5 bg-white rounded-md border-amber-300'>
        <div className='w-2/5 h-4/5'>
          <Image
            src='/github.svg'
            alt='Logo'
            fill
          />
        </div>
      </div>
    </div>
  );
}