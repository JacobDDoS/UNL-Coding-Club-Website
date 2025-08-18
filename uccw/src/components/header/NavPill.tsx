'use client'
import Image from "next/image"
import { redirect } from "next/navigation";

export default function NavPill() {
  const direct = (link: string): void => {
    window.open(link, '_blank');
  }

  return (
    <div className='flex items-center gap-x-8 justify-center px-6 py-3 bg-[#353535] rounded-xl'>
      {/* left section: home - other thing */}
      <div className='relative w-5 h-5'>
        <Image
          src='/house.svg'
          alt='Home'
          fill
          onClick={() => redirect('/')}
          className='hover:brightness-75'
        />
      </div>
      <div className='relative w-5 h-5'>
        <Image
          src='/users.svg'
          alt='Subclubs'
          fill
          onClick={() => redirect('/about')}
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
          onClick={() => direct('https://github.com/JacobDDoS/UNL-Coding-Club-Website')}
          className='hover:brightness-75'
        />
      </div>
      <div className='relative w-6 h-6'>
        <Image
          src='/instagram.svg'
          alt='Instagram'
          fill
          onClick={() => direct('https://www.instagram.com/unlcodingclub')}
          className='hover:brightness-75'
        />
      </div>
      <div className='relative w-6 h-6'>
        <Image
          src='/discord.svg'
          alt='Discord'
          fill
          onClick={() => direct('https://discord.gg/BpREX2D5Eg')}
          className='hover:brightness-75'
        />
      </div>
    </div>
  );
}