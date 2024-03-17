import React, { useState } from "react";
import { Link } from "react-router-dom";
import { hamburger } from "../assets/icons/index.js";
import { navLinks } from "../constants/index.js";
import { SignedIn } from "@clerk/clerk-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="padding-x py-4 absolute w-full  bg-white border-b-2 border-gray-500">
      <nav className="flex justify-between items-center max-container">
        <Link to="/" className="flex items-center">
          <img
            src="src/assets/logo.svg" // Correct the path to your logo
            alt="logo"
            height={29}
            className="m-0 h-[29px]"
          />
          <h1 className="font-mona text-xl ml-3 mt-1 text-justify">SocialPilot</h1>
        </Link>

        <div className="hidden max-lg:block">
          <img
            src={hamburger}
            alt="hamburger icon"
            width={25}
            height={25}
            onClick={toggleMenu}
            className="cursor-pointer"

          />
        </div>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden text-lg leading-normal font-medium font-montserrat">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link to={item.href} className="font-montserrat leading-normal text-lg text-slate-gray">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <ul className={`${isMenuOpen ? "flex" : "hidden"} absolute top-full w-[150px] gap-5 right-5 m-2   border-2 p-2  z-20  bg-blue rounded-xl flex-col justify-center items-center text-lg leading-normal font-medium font-montserrat`}>
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link to={item.href} className="font-montserrat leading-normal  text-slate-gray my-20">
                {item.label}
              </Link>
            </li>
          ))}
          <div className="flex flex-col gap-2 text-lg leading-normal font-medium font-montserrat w-full  ">
          <Link to="/signin">
            <button className="w-full rounded-md border-2 border-black bg-white px-2 py-1 hover:bg-black hover:text-white">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className="w-full rounded-md border-2 border-black bg-white px-2 py-1 hover:bg-black hover:text-white">
              Sign Up
            </button>
          </Link>
        </div>
        </ul>

        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24 flex-row ">
          <Link to="/signin">
            <button className="width-full rounded-md border-2 border-black bg-white px-2 py-1 hover:bg-black hover:text-white">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className="width-full rounded-md border-2 border-black bg-white px-2 py-1 hover:bg-black hover:text-white">
              Sign Up
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;




// import React from "react";
// import { Link } from "react-router-dom";
// import { hamburger } from "../assets/icons/index.js";
// import { navLinks } from "../constants/index.js";
// import { SignedIn } from "@clerk/clerk-react";

// const Header = () => {

//   return (
//     <header className="padding-x py-4 absolute  w-full bg-white ">
//       <nav className="flex  justify-between items-center max-container ">

//         <a href="/" className="flex ">
//           <img
//             src="src\assets\logo.svg"
//             alt="logo"

//             height={29}
//             className="m-0  h-[29px]"

//           />
//            <h1 className="font-mona text-xl ml-3 mt-1 text-justify ">SocialPilot</h1>
//         </a>

//         <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden text-lg leading-normal font-medium font-montserrat">
//           {navLinks.map((item) => (
//             <li key={item.label}>
//               <a
//                 href={item.href}
//                 className="font-montserrat leading-normal text-lg text-slate-gray"
//               >
//                 {item.label}
//               </a>
//             </li>
//           ))}
//         </ul>
//         <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24 flex-row">
//           <Link to="/signin">
//             <button className="width-full  rounded-md border-2  border-black bg-white px-2 py-1 hover:bg-black hover:text-white ">
//               Sign In
//             </button>
//           </Link>
//           <Link to="/signup">
//             <button className="width-full  rounded-md border-2  border-black bg-white px-2 py-1 hover:bg-black hover:text-white ">
//               Sign Up
//             </button>
//           </Link>
//         </div>
//         <div className='hidden max-lg:block'>
//           <img src={hamburger} alt='hamburger icon' width={25} height={25} />
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;
