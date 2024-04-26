import { useEffect, useState } from 'react';
import { CgMenuRight } from 'react-icons/cg';
import logo from '../assets/img/logo.svg';
import Nav from './Nav';
import Program from './Program';
import NavMobile from './NavMobile';

const Header = () => {
  const [bg, setBg] = useState(false);
  const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });
  return (
    <header
      className={`${
        bg ? 'bg-white py-3 shadow-md' : 'bg-none py-5'
      }, fixed w-full right-0 left-0 z-10 py-3 transition-all duration-300`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#">
          <img src={logo} alt="" />
        </a>
        <div className="hidden lg:flex">
          <Nav />
        </div>
        <Program />
        <div
          onClick={() => setNavMobile(!navMobile)}
          className="lg:hidden cursor-pointer"
        >
          <CgMenuRight className="text-blue text-3xl" />
        </div>
        <div
          className={`${
            navMobile ? 'h-[270px]' : 'max-h-0'
          } fixed bg-blue-tertiary shadow-lg left-0 w-full top-[78px] overflow-hidden transition-all text-xl`}
        >
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
