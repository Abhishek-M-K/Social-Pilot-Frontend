import React from 'react'
// import { hamburger } from "../assets/icons";
// import { headerLogo } from "../assets/images";
import { DashLinks } from "../constants/index.js";
import { active , email, search  } from '../assets/icons/index.js';
import { UserButton } from '@clerk/clerk-react';


const HeaderDash = () => {
  return (

    <header className='px-8 py-4    bg-white'>
      <nav className='flex justify-between items-center max-container'>

        <a href=''>
            <h1 >DashBoard</h1>

        </a>


        <ul className=' flex justify-center items-center gap-16 max-lg:hidden text-lg leading-normal font-medium font-montserrat'>
          {DashLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {renderIcon(item.icon)}
              </a>
            </li>
          ))}
        </ul>


      </nav>
    </header>
  );
};

const renderIcon = (iconName) => {
    switch (iconName) {
      case 'active':
        return <img src={active}

        className='m-0 w-[29px] h-[29px]'
         alt="active" />
      case 'email':
        return <img src={email}

        className='m-0 w-[29px] h-[29px]'
        alt="email" />;
      case 'search':
        return <img src={search}

        className='m-0 w-[29px] h-[29px]'
        alt="search" />;
      case 'user':
        return   <UserButton/>

      default:
        return null;
    }
};


export default HeaderDash;
