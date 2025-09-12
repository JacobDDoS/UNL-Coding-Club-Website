import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className='absolute w-[125px] h-[125px] transition ease-in duration-300 hover:scale-105'>
      {/* the background of this image does 
            not match the page background   */}
      <Image
        src='/logo.svg' 
        alt='Logo'
        fill
      />
    </Link>
  );
}