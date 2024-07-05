import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import logo from '../../assets/31530356_bird_2.jpg'
const Header = () => {
  return (
    <header className="flex w-full justify-between p-5 bg-black text-white">
      <Logo src={logo} alt={'image.png'} link={'/'} LogoStlye="w-[80px] h-[80px] rounded-full"/>
      <Navigation/>
    </header>
  );
};
export default Header;