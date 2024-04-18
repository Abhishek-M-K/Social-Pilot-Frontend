import { useEffect, useState } from "react";
import { useRef } from "react";

import { motion } from "framer-motion";
import { SignedOut, UserButton, useClerk } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { SignOutButton } from "@clerk/clerk-react";

// * React icons
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineAppstore } from "react-icons/ai";
import { MdLocalPostOffice } from "react-icons/md";
import { PiLinkSimple } from "react-icons/pi";
import { PiUsersLight } from "react-icons/pi";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { NavLink, useLocation, useRoutes } from "react-router-dom";

const Sidebar = () => {
  // This tablet mid will hep us to keep open sidebar on greater than this pixel
  let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const sidebarRef = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isTabletMid) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [pathname]);
  //  this animation is used when sideBAR OEPN OR CLOSE framer is really good for all this type of animations
  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };

  return (
    <div>
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${
          open ? "block" : "hidden"
        } `}
      ></div>
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className=" bg-[white] text-gray shadow-2xl z-[999] max-w-[16rem]  w-[16rem]
            overflow-hidden md:relative fixed
         h-screen "
      >
        <div className="flex items-center gap-3.5 font-medium border-b py-3 border-slate-300  mx-3">
          <img src="/assets/logo.svg" alt="logo" height={45} />
          <span className="text-xl whitespace-pre">SocialPilot</span>
        </div>

        <div className="flex flex-col  h-full">
          <ul className="whitespace-pre px-[12px] text-[1rem] py-6  flex flex-col gap-6 font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%]">
            <li>
              <NavLink
                to={"/dashboard"}
                className="link flex justify-start items-center  gap-4"
              >
                <AiOutlineAppstore size={36} className="min-w-max " />
                {/* ai outline app store is used for icons  */}
                DashBoard
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/recruitment"}
                className="link flex justify-start items-center  gap-4"
              >
                <PiUsersLight size={36} className="min-w-max" />
                Recruitment
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/onboarding"}
                className="link justify-start items-center  flex gap-4"
              >
                <PiLinkSimple size={36} className="min-w-max" />
                Connect
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/post"}
                className="link flex justify-start items-center  gap-4"
              >
                <MdLocalPostOffice size={36} className="min-w-max" />
                Recruitment Post
              </NavLink>
            </li>
          </ul>
          {open && (
            <div className="flex-1 text-md z-50  max-h-48 my-auto  whitespace-pre   w-full  font-medium  ">
              <div className="flex border-y border-slate-300 p-4 items-center justify-start gap-6">
                <UserButton afterSignOutUrl="/" />

                <Link to="/">
                  <SignOutButton>
                    <button className="flex justify-center items-center gap-2 rounded-md border-[1px] border-black text-black bg-white  px-2 py-1 shadow-sm hover:bg-black hover:text-white">
                      <h1 className="">Sign Out</h1>
                    </button>
                  </SignOutButton>
                </Link>

                {/* <p className="text-teal-500 py-1.5 px-3 text-xs bg-teal-50 rounded-xl">
                  Upgrade
                </p> */}
              </div>
            </div>
          )}
        </div>
        <motion.div
          onClick={() => {
            setOpen(!open);
          }}
          animate={
            open
              ? {
                  x: 0,
                  y: 0,
                  rotate: 0,
                }
              : {
                  x: -10,
                  y: -200,
                  rotate: 180,
                }
          }
          transition={{ duration: 0 }}
          className="absolute w-fit h-fit md:block z-50 hidden right-2 bottom-3 cursor-pointer"
        >
          <IoIosArrowBack size={25} />
        </motion.div>
      </motion.div>
      <div className="m-3 md:hidden  " onClick={() => setOpen(true)}>
        <MdMenu size={25} />
      </div>
    </div>
  );
};

export default Sidebar;
