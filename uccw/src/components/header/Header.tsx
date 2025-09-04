import Logo from "./Logo";
import LeftLinks from "./LeftLinks";
import RightLinks from "./RightLinks";

export default function Header() {

  return (
    <div>
      <div className='flex flex-row justify-center'>
        <div className='flex flex-row items-center justify-evenly px-10 my-2 w-full max-w-[1100px] h-1/5 min-h-[65px] bg-bg-primary'>
        
          <LeftLinks />
          <Logo />
          <RightLinks />
        </div>
      </div>
      
    </div>
  );
}