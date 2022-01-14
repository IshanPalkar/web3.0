import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineCloseButton } from 'react-icons/ai';

import logo from '../../images/logo.png';

const NavbarItem = ({ title, classProps }) => {
  return(
    <li className={`mx-4 cursor-pointer $(classProps)`}>
      {title}
    </li>
  )
}


const Navbar = () => {
  return ( 
    <nav className="w-full flex md:justify-center justify-between items-center">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Market", "Exchange","Tutorials","Wallets"].map((item, index) =>(
          <NavbarItem key={item + index} title={item} />
        ))}
      </ul>
    </nav>
  );
}
export default Navbar;
