// import { UserButton, useClerk } from "@clerk/clerk-react";import React, { useEffect, useState } from "react";
// // import { hamburger } from "../assets/icons";
// // import { headerLogo } from "../assets/images";
// import { hamburger } from "../assets/icons/index.js";
// import { Link } from "react-router-dom";
// import { DashLinks, SideLinks } from "../constants/index.js";
// import { active, email, search } from "../assets/icons/index.js";


// const useAutoLogout = () => {
//   const { signOut } = useClerk();

//   useEffect(() => {
//     const handleBeforeUnload = (event) => {
//       event.preventDefault();

//       signOut();
//     };

//     window.addEventListener("beforeunload", handleBeforeUnload);

//     return () => {
//       window.removeEventListener("beforeunload", handleBeforeUnload);
//     };
//   }, [signOut]);
// };


// const HeaderDash = () => {

//   useAutoLogout();

//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };
//   return (
//     <header className="relative sm:z-50 ">
//       <nav className="flex justify-between w-full  items-center">
//         <a href="">
//           <h1 className="sm:mx-0 mx-[1rem]"> {SideLinks.find(link => window.location.pathname.includes(link.href.split('/')[1])).label}</h1>
//         </a>
//         {/* <div className="hidden max-lg:block ">
//           <img
//             src={hamburger}
//             alt="hamburger icon"
//             width={25}
//             height={25}
//             onClick={toggleMenu}
//             className="cursor-pointer"

//           />
//         </div> */}
//         <ul className=" flex justify-center items-center gap-8 max-lg:hidden ">
//         {DashLinks.map((item) => (
//             <li key={item.label}>
//               <Link to={item.href} className="font-montserrat leading-normal text-lg text-slate-gray">
//               {renderIcon(item.icon)}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* <ul className={`${isMenuOpen ? "grid grid-cols-1" : "hidden"} absolute top-8 p-6 gap-5 right-1   border-1 border-black b  z-20  bg-[#cecef3] rounded-xl `}>
//           {DashLinks.map((item) => (
//             <li key={item.label}>
//               <Link to={item.href} className="font-montserrat leading-normal  text-slate-gray my-20">
//               {renderIcon(item.icon)}
//               </Link>
//             </li>
//           ))}
//          </ul> */}
//       </nav>
//     </header>
//   );
// };

// const renderIcon = (iconName) => {
//   switch (iconName) {
//     case "active":
//       return (
//         <img src={active} className="m-0 w-[29px] h-[29px]" alt="active" />
//       );
//     case "email":
//       return <img src={email} className="m-0 w-[29px] h-[29px]" alt="email" />;
//     case "search":
//       return (
//         <img src={search} className="m-0 w-[29px] h-[29px]" alt="search" />
//       );
//     case "user":
//       return <UserButton afterSignOutUrl="/" />;

//     default:
//       return null;
//   }
// };

// export default HeaderDash;





const [isAuthenticated , setAuthenticated] = useState(false);


useEffect(() => {
  const checkUser = async () => {

      const user = useUser();
      if (!user) {
        setAuthenticated(false);
      } else {
        setAuthenticated(true);
      }
    };

    checkUser();
  }, []);
  if (isAuthenticated) {
    return <Navigate to="/dashboardHeader" />;
  } else{
    return <Navigate to="/signin"/>;
  }
