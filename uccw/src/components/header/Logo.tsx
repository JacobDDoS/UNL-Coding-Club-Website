import Image from "next/image";

export default function Logo() {
  return (
    <a href="/" className='absolute w-[125px] h-[125px] transition ease-in duration-300 hover:scale-105'>
      {/* the background of this image does 
            not match the page background   */}
      <Image
        src='/logo.svg' 
        alt='Logo'
        fill
      />
    </a>
  );
}