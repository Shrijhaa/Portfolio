import React, { useState } from 'react'; 
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={logo} className="h-28 mt-10"/>
      </div>
      {/* menu */}
      <ul className='flex gap-x-8'>
        <li className="hover:border-b-2 hover:border-cyan-500 hover:font-bold p-2">
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:border-b-2 hover:border-cyan-500 hover:font-bold p-2">
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:border-b-2 hover:border-cyan-500 hover:font-bold p-2">
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:border-b-2 hover:border-cyan-500 hover:font-bold p-2">
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="hover:border-b-2 hover:border-cyan-500  hover:font-bold p-2">
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      
    </div>
  );
};
export default Navbar;
