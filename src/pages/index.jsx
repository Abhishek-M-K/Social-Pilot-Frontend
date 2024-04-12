import React, { useState } from "react";
import { hamburger } from "../assets/icons";
// import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons/index.js";
import { SignOutButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { SideLinks } from "../constants/index.js";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="flex h-full ">
      {/* <div className="hidden max-lg:block  absolute top-4 left-3 z-40">
        <img
          src={hamburger}
          alt="hamburger icon"
          width={25}
          height={25}
          onClick={toggleMenu}
          className="cursor-pointer"
        />
      </div> */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        }   border-2  z-20 bg-[#3949AB] h-full sm:w-[20%] w-[80%] fixed sm:block `}
        >
        <div className="flex flex-col my-4 py-2 mx-8 items-left">
          <div className="flex">
            <div className="  sm:top-0 sm:right-0 sm:relative absolute top-4 right-3 text-white font-mona ">
              {" "}
              SocialPilot
            </div>

            <div className="mt-20 absolute flex flex-col items-start gap-8 text-lg  leading-normal font-mona  ">
              <NavLink
                to="/dashboard"
                className="hover:text-white"
                activeClassName="font-bold"
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/recruitment"
                className="hover:text-white"
                activeClassName="font-bold"
              >
                Recruitment
              </NavLink>
              <NavLink
                to="/onboarding"
                className="hover:text-white"
                activeClassName="font-bold"
              >
                Onboarding/Connect
              </NavLink>
              <NavLink
                to="/recruitment-post"
                className="hover:text-white"
                activeClassName="font-bold"
              >
                Recruitment Post
              </NavLink>
              {/* </div> */}
            </div>
          </div>

          <div className="flex justify-between items-center absolute bottom-2 m-[20%]  ">
            <Link to="/">
              <SignOutButton>
                <button className="width- rounded-md border-2 border-black bg-white px-3 py-3 hover:bg-black hover:text-white p-[20px] ">
                  Signout
                </button>
              </SignOutButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
