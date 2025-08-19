import Image from "next/image";

export default function Logo() {
  return (
    <div className='relative mx-2 w-[75px] h-[75px]'>
      {/* the background of this image does 
            not match the page background   */}
      <Image
        src='/logo.svg' 
        alt='Logo'
        fill
      />
    </div>
  );
}