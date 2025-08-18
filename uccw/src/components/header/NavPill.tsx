'use client'
import Image from "next/image"

export default function NavPill() {
  return (
    <div className='flex items-center gap-x-8 justify-center px-6 py-3 bg-[#353535] rounded-xl'>
      {/* left section: home - other thing */}
      <div className='relative w-5 h-5'>
        <Image
          src='/home.png'
          alt='Home'
          fill
          className='hover:brightness-75'
        />
      </div>
      <div className='relative w-6 h-6'>
        <Image
          src='/community.png'
          alt='Subclubs'
          fill
          onClick={() => window.open('https://gmail.com', '_blank')}
          className='hover:brightness-75'
        />
      </div>

      {/* separator */}
      <div className="w-px h-7 bg-[#FFFFFF]"></div>

      {/* right section: github - insta - discord */}
      <div className='relative w-5 h-5'>
        <Image
          src='/github.webp'
          alt='GitHub'
          fill
          onClick={() => window.open('https://github.com/JacobDDoS/UNL-Coding-Club-Website', '_blank')}
          className='hover:brightness-75'
        />
      </div>
      <div className='relative w-5 h-5'>
        <Image
          src='/ig.webp'
          alt='Instagram'
          fill
          onClick={() => window.open('https://www.instagram.com/', '_blank')}
          className='hover:brightness-75'
        />
      </div>
      <div className='relative w-6 h-6'>
        <Image
          src='/discord.webp'
          alt='Discord'
          fill
          onClick={() => window.open('https://discord.gg/BpREX2D5Eg', '_blank')}
          className='hover:brightness-75'
        />
      </div>
    </div>
  );
}