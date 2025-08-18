import Image from "next/image";

export default function Logo() {
  return (
    <div className='absolute left-1 w-[75px] h-[75px]'>
      {/* the background of this image does 
            not match the page background   */}
      <Image
        src='/logo.jpg' 
        alt='Logo'
        fill
      />
    </div>
  );
}