import Logo from "./Logo";
import NavPill from "./NavPill";
import LoginButton from "./LoginButton";

export default function Header() {

  return (
    <div className='flex flex-row items-center justify-center mx-1 my-2 w-full h-1/5 min-h-[75px] bg-bg-primary'>
      <Logo />
      <NavPill />
      <LoginButton />
    </div>
  );
}