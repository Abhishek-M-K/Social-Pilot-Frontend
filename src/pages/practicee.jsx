// // import { UserButton, useClerk } from "@clerk/clerk-react";import React, { useEffect, useState } from "react";
// // // import { hamburger } from "../assets/icons";
// // // import { headerLogo } from "../assets/images";
// // import { hamburger } from "../assets/icons/index.js";
// // import { Link } from "react-router-dom";
// // import { DashLinks, SideLinks } from "../constants/index.js";
// // import { active, email, search } from "../assets/icons/index.js";


// // const useAutoLogout = () => {
// //   const { signOut } = useClerk();

// //   useEffect(() => {
// //     const handleBeforeUnload = (event) => {
// //       event.preventDefault();

// //       signOut();
// //     };

// //     window.addEventListener("beforeunload", handleBeforeUnload);

// //     return () => {
// //       window.removeEventListener("beforeunload", handleBeforeUnload);
// //     };
// //   }, [signOut]);
// // };


// // const HeaderDash = () => {

// //   useAutoLogout();

// //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// //   const toggleMenu = () => {
// //     setIsMenuOpen(!isMenuOpen);
// //   };
// //   return (
// //     <header className="relative sm:z-50 ">
// //       <nav className="flex justify-between w-full  items-center">
// //         <a href="">
// //           <h1 className="sm:mx-0 mx-[1rem]"> {SideLinks.find(link => window.location.pathname.includes(link.href.split('/')[1])).label}</h1>
// //         </a>
// //         {/* <div className="hidden max-lg:block ">
// //           <img
// //             src={hamburger}
// //             alt="hamburger icon"
// //             width={25}
// //             height={25}
// //             onClick={toggleMenu}
// //             className="cursor-pointer"

// //           />
// //         </div> */}
// //         <ul className=" flex justify-center items-center gap-8 max-lg:hidden ">
// //         {DashLinks.map((item) => (
// //             <li key={item.label}>
// //               <Link to={item.href} className="font-montserrat leading-normal text-lg text-slate-gray">
// //               {renderIcon(item.icon)}
// //               </Link>
// //             </li>
// //           ))}
// //         </ul>

// //         {/* <ul className={`${isMenuOpen ? "grid grid-cols-1" : "hidden"} absolute top-8 p-6 gap-5 right-1   border-1 border-black b  z-20  bg-[#cecef3] rounded-xl `}>
// //           {DashLinks.map((item) => (
// //             <li key={item.label}>
// //               <Link to={item.href} className="font-montserrat leading-normal  text-slate-gray my-20">
// //               {renderIcon(item.icon)}
// //               </Link>
// //             </li>
// //           ))}
// //          </ul> */}
// //       </nav>
// //     </header>
// //   );
// // };

// // const renderIcon = (iconName) => {
// //   switch (iconName) {
// //     case "active":
// //       return (
// //         <img src={active} className="m-0 w-[29px] h-[29px]" alt="active" />
// //       );
// //     case "email":
// //       return <img src={email} className="m-0 w-[29px] h-[29px]" alt="email" />;
// //     case "search":
// //       return (
// //         <img src={search} className="m-0 w-[29px] h-[29px]" alt="search" />
// //       );
// //     case "user":
// //       return <UserButton afterSignOutUrl="/" />;

// //     default:
// //       return null;
// //   }
// // };

// // export default HeaderDash;


// <a className="text-[blue]" href="https://www.instagram.com/your-instagram-username/"><img src="src/assets/icons/add.png" alt="" height={10} width={10} />Add Link</a>


// const [isAuthenticated , setAuthenticated] = useState(false);


// useEffect(() => {
//   const checkUser = async () => {

//       const user = useUser();
//       if (!user) {
//         setAuthenticated(false);
//       } else {
//         setAuthenticated(true);
//       }
//     };

//     checkUser();
//   }, []);
//   if (isAuthenticated) {
//     return <Navigate to="/dashboardHeader" />;
//   } else{
//     return <Navigate to="/signin"/>;
//   }










//   import React from "react";
// import socialProfiles from "../constants/index";
// import { AddIcon } from "@chakra-ui/icons";

// const OnBoarding = () => {
//   return (
//     <div className="flex flex-col gap-8">
//       <h1>Let's connect your social profiles</h1>
//       <p>Add as many social media profiles as you want</p>

//       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
//         {socialProfiles.map((profile, index) => (
//           <div
//             key={index}
//             className="h-[100px] grid grid-cols-3 m-[0.5rem] mb-0 bg-[white] rounded border-2 border-black  "
//           >
//             <div className="col-span-2 m-[0.75rem] flex flex-col justify-start items-start gap-4 ">
//               <h1 className="font-semibold text-lg flex  gap-1">
//                 <img src={profile.icon} width={29} alt="" />
//                 {profile.name}
//               </h1>

//               {profile.link && (
//                 <button className="text-[blue] items-center  flex gap-2 ">
//                   <AddIcon /> <h2>Add link</h2>
//                 </button>
//               )}
//             </div>
//             <div className="flex justify-center items-center m-4 ">
//               <img
//                 src={profile.img}
//                 alt={`${profile.name} Icon`}
//                 height={40}
//                 width={40}
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//       <button className="text-[blue] bg-[lightblue] items-center justify-center flex rounded-xl p-2 mx-2 hover:bg-blue-500 hover:text-white  gap-2 ">
//                   <AddIcon /> <h2>Add link</h2>
//                 </button>
//     </div>
//   );
// };

// export default OnBoarding;



// <NavLink
//                       to="/dashboard"
//                       className="hover:text-black hover:text-xl hover:border-r-2  hover:border-black"
//                       activeClassName="active"
//                       // onClick={isLaptopDevice() ? undefined : onClose}
//                     >
//                       Dashboard
//                     </NavLink>
//                     <NavLink
//                       to="/recruitment"
//                       className="hover:text-black  hover:text-xl hover:border-r-2 hover:border-black"
//                       activeClassName="active"
//                       // onClick={isLaptopDevice() ? undefined : onClose}
//                     >
//                       Recruitment
//                     </NavLink>
//                     <NavLink
//                       to="/onboarding"
//                       className="hover:text-black  hover:text-xl hover:border-r-2 hover: border-black"
//                       activeClassName="active"
//                       // onClick={isLaptopDevice() ? undefined : onClose}
//                     >
//                       Onboarding/Connect
//                     </NavLink>
//                     <NavLink
//                       to="/post"
//                       className="hover:text-black  hover:text-xl hover:border-r-2 hover: border-black"
//                       activeClassName="active"
//                       // onClick={isLaptopDevice() ? undefined : onClose}
//                     >
//                       Recruitment Post

















//                       import { useEffect, useState } from "react";
// import { useRef } from "react";
// import SubMenu from "./SubMenu";
// import { motion } from "framer-motion";
// import { SignedOut, UserButton, useClerk } from "@clerk/clerk-react";
// import { Link } from "react-router-dom";
// import { SignOutButton } from "@clerk/clerk-react";



// // * React icons
// import { IoIosArrowBack } from "react-icons/io";
// import { SlSettings } from "react-icons/sl";
// import { AiOutlineAppstore } from "react-icons/ai";
// import { BsPerson } from "react-icons/bs";
// import { HiOutlineDatabase } from "react-icons/hi";
// import { TbReportAnalytics } from "react-icons/tb";
// import { RiBuilding3Line } from "react-icons/ri";
// import { useMediaQuery } from "react-responsive";
// import { MdMenu } from "react-icons/md";
// import { NavLink, useLocation, useRoutes } from "react-router-dom";

// const Sidebar = () => {
//   let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
//   const [open, setOpen] = useState(isTabletMid ? false : true);
//   const sidebarRef = useRef();
//   const { pathname } = useLocation();

//   useEffect(() => {
//     if (isTabletMid) {
//       setOpen(true);
//     } else {
//       setOpen(false);
//     }
//   }, [isTabletMid]);

//   useEffect(() => {
//     isTabletMid && setOpen(false);
//   }, [pathname]);

//   const Nav_animation = isTabletMid
//     ? {
//         open: {
//           x: 0,
//           width: "16rem",
//           transition: {
//             damping: 40,
//           },
//         },
//         closed: {
//           x: -250,
//           width: 0,
//           transition: {
//             damping: 40,
//             delay: 0.15,
//           },
//         },
//       }
//     : {
//         open: {
//           width: "16rem",
//           transition: {
//             damping: 40,
//           },
//         },
//         closed: {
//           width: "4rem",
//           transition: {
//             damping: 40,
//           },
//         },
//       };



//   return (
//     <div>
//       <div
//         onClick={() => setOpen(false)}
//         className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${
//           open ? "block" : "hidden"
//         } `}
//       ></div>
//       <motion.div
//         ref={sidebarRef}
//         variants={Nav_animation}
//         initial={{ x: isTabletMid ? -250 : 0 }}
//         animate={open ? "open" : "closed"}
//         className=" bg-[white] text-gray shadow-2xl z-[999] max-w-[16rem]  w-[16rem]
//             overflow-hidden md:relative fixed
//          h-screen "
//       >
//         <div className="flex items-center gap-3.5 font-medium border-b py-3 border-slate-300  mx-3">
//         <img
//                       src="src/assets/logo.svg"
//                       alt="logo"
//                       height={45}

//                       />
//           <span className="text-xl whitespace-pre">SocialPilot</span>
//         </div>

//         <div className="flex flex-col  h-full">
//           <ul className="whitespace-pre px-[12px] text-[1rem] py-6  flex flex-col gap-6 font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%]">
//             <li>
//               <NavLink to={"/dashboard"} className="link flex justify-start items-center  gap-4">
//                 <AiOutlineAppstore size={36} className="min-w-max " />
//                 DashBoard
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to={"/recruitment"} className="link flex justify-start items-center  gap-4">
//                 <BsPerson size={36} className="min-w-max" />
//                 Recruitment
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to={"/onboarding"} className="link justify-start items-center  flex gap-4">
//                 <HiOutlineDatabase size={36} className="min-w-max" />
//                 OnBoarding
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to={"/post"} className="link flex justify-start items-center  gap-4">
//                 <HiOutlineDatabase size={36} className="min-w-max" />
//                 Recruitment Post
//               </NavLink>
//             </li>


//           </ul>
//           {open && (
//             <div className="flex-1 text-md z-50  max-h-48 my-auto  whitespace-pre   w-full  font-medium  ">
//               <div className="flex border-y border-slate-300 p-4 items-center justify-start gap-6">

//                   <UserButton afterSignOutUrl="/"   />

//             <Link to="/">
//                       <SignOutButton>
//                         <button className="flex justify-center items-center gap-2 rounded-md border-[1px] border-black text-black bg-white  px-2 py-1 shadow-sm hover:bg-black hover:text-white">
//                         <h1 className="">Sign Out</h1>
//                         </button>
//                       </SignOutButton>
//                     </Link>





//                 {/* <p className="text-teal-500 py-1.5 px-3 text-xs bg-teal-50 rounded-xl">
//                   Upgrade
//                 </p> */}
//               </div>
//             </div>
//           )}
//         </div>
//         <motion.div
//           onClick={() => {
//             setOpen(!open);
//           }}
//           animate={
//             open
//               ? {
//                   x: 0,
//                   y: 0,
//                   rotate: 0,
//                 }
//               : {
//                   x: -10,
//                   y: -200,
//                   rotate: 180,
//                 }
//           }
//           transition={{ duration: 0 }}
//           className="absolute w-fit h-fit md:block z-50 hidden right-2 bottom-3 cursor-pointer"
//         >
//           <IoIosArrowBack size={25} />
//         </motion.div>
//       </motion.div>
//       <div className="m-3 md:hidden  " onClick={() => setOpen(true)}>
//          <MdMenu size={25} />
//       </div>
//     </div>
//   );
// };

// export default Sidebar;



// old and new sidebar


// import React from "react";
// import { NavLink } from "react-router-dom";
// import {
//   Drawer,
//   DrawerBody,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   Button,
// } from "@chakra-ui/react";
// import { useDisclosure } from "@chakra-ui/react";
// import { hamburger } from "../assets/icons";
// // import { useUser } from "@clerk/clerk-react";
// // import { Navigate } from "react-router-dom";
// // import { useState, useEffect } from "react";

// function SideBar() {



//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const btnRef = React.useRef();

//   // const isLaptopDevice = () => {
//   //   const width = window.innerWidth;
//   //   return width ;
//   // };

//   // React.useEffect(() => {
//   //   const handleResize = () => {
//   //     if (isLaptopDevice()) {

//   //       onOpen();
//   //     } else {
//   //       onClose();
//   //     }
//   //   };

//   //   handleResize();

//   //   window.addEventListener("resize", handleResize);

//   //   return () => window.removeEventListener("resize", handleResize);
//   // }, []);


//     return (
//       <>
//         <div className="">
//           <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
//             <img
//               src={hamburger}
//               alt="hamburger icon"
//               width={25}
//               height={25}
//               className="cursor-pointer sm:hidden  "
//             />
//           </Button>
//           <Drawer
//             isOpen={isOpen}
//             placement="left"
//             onClose={onClose}
//             finalFocusRef={btnRef}
//           >
//             <DrawerOverlay />
//             <DrawerContent >
//               {/* <div className="  flex flex-col "> */}
//                 <DrawerHeader>
//                   <NavLink to={'/'}>
//                   <div className="flex  items-center    m-[1rem] text-[#9D9DFE] text-2xl  sm:text-lg font-mona">
                    // <img
                    //   src="src/assets/logo.svg"
                    //   alt="logo"
                    //   height={29}
                    //   className="m-0 h-[29px]"
                    //   />

//                     <h1 className=" ml-[0.5rem] ">SocialPilot</h1>

//                     <div className="sm:hidden absolute right-[1.5rem]">
//                       {" "}
//                       <DrawerCloseButton />

//                     </div>
//                   </div>
//                     </NavLink>
//                 </DrawerHeader>

//                 <DrawerBody>
//                   <div className=" flex flex-col items-left sm:ml-[2rem] ml-[2rem] text-lg  text-gray-500 leading-relaxed  gap-[1.5rem] font-mona">
                    // <NavLink
                    //   to="/dashboard"
                    //   className="hover:text-black hover:text-xl hover:border-r-2  hover:border-black"
                    //   activeClassName="active"
                    //   // onClick={isLaptopDevice() ? undefined : onClose}
                    // >
                    //   Dashboard
                    // </NavLink>
                    // <NavLink
                    //   to="/recruitment"
                    //   className="hover:text-black  hover:text-xl hover:border-r-2 hover:border-black"
                    //   activeClassName="active"
                    //   // onClick={isLaptopDevice() ? undefined : onClose}
                    // >
                    //   Recruitment
                    // </NavLink>
                    // <NavLink
                    //   to="/onboarding"
                    //   className="hover:text-black  hover:text-xl hover:border-r-2 hover: border-black"
                    //   activeClassName="active"
                    //   // onClick={isLaptopDevice() ? undefined : onClose}
                    // >
                    //   Onboarding/Connect
                    // </NavLink>
                    // <NavLink
                    //   to="/post"
                    //   className="hover:text-black  hover:text-xl hover:border-r-2 hover: border-black"
                    //   activeClassName="active"
                    //   // onClick={isLaptopDevice() ? undefined : onClose}
                    // >
                    //   Recruitment Post
                    // </NavLink>
//                   </div>
//                 </DrawerBody>

//                 {/* <div className=" flex flex-col top-[48vh] relative text-lg leading-normal  justify-center items-center font-mona">
//                   <DrawerFooter>
//                     <img
//                       src="src\assets\logout-svgrepo-com.svg"
//                       alt=""
//                       width={40}
//                     />
                    // <Link to="/">
                    //   <SignOutButton>
                    //     <button className="  rounded-md border-2 border-black bg-white  px-2 py-1 hover:bg-black hover:text-white">
                    //       Sign Out
                    //     </button>
                    //   </SignOutButton>
                    // </Link>
//                   </DrawerFooter>
//                 </div> */}
//               {/* </div> */}
//             </DrawerContent>
//           </Drawer>
//         </div>
//       </>
//     );
//   }


// export default SideBar;
