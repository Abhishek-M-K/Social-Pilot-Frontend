import React from 'react'
// import { Link } from 'react-router-dom';

import { navLinks } from "../constants/index.js";
import { SignInButton, SignUpButton } from '@clerk/clerk-react';
const Header = () => {
  return (

    <header className='padding-x py-4 absolute  w-full bg-white border-2'>
      <nav className='flex justify-between items-center max-container'>

        <a href='/'>
          <img
            src='src\assets\logo.svg'
            alt='logo'
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px]'

          />

        </a>


        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden text-lg leading-normal font-medium font-montserrat'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24 flex-row'>

            <SignInButton redirectUrl='/signin' afterSignInUrl='/dashboard'/>
            <SignUpButton redirectUrl='/signup' afterSignUpUrl='/dashboard'/>
          {/* <Link to='/signin' ><button  className='width-full  rounded-md border-2  border-black bg-white px-2 py-1 hover:bg-black hover:text-white '>Sign In </button></Link> */}
          {/* <Link to='/signup' ><button  className='width-full  rounded-md border-2  border-black bg-white px-2 py-1 hover:bg-black hover:text-white '>Sign Up </button></Link> */}

        </div>
        {/* <div className='hidden max-lg:block'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div> */}
      </nav>
    </header>
  );
};

export default Header;
