import React from "react";
import { NavLink } from "react-router-dom";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { SignOutButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { hamburger } from "../assets/icons";
// import { useUser } from "@clerk/clerk-react";
// import { Navigate } from "react-router-dom";
// import { useState, useEffect } from "react";

function SideBar() {



  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const isLaptopDevice = () => {
    const width = window.innerWidth;
    return width >= 640;
  };

  React.useEffect(() => {
    const handleResize = () => {
      if (isLaptopDevice()) {
        onOpen();
      } else {
        onClose();
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);


    return (
      <>
        <div className=" ">
          <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
            <img
              src={hamburger}
              alt="hamburger icon"
              width={25}
              height={25}
              className="cursor-pointer sm:hidden  "
            />
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <div className="  flex flex-col  bg-[#ececfc]  sm:w-[20vw]  h-full">
                <DrawerHeader>
                  <div className="flex justify-left items-center    m-[1rem] text-[#9D9DFE] text-2xl  sm:text-lg font-mona">
                    <img
                      src="src/assets/logo.svg"
                      alt="logo"
                      height={29}
                      className="m-0 h-[29px]"
                    />

                    <h1 className=" ml-[0.5rem] ">SocialPilot</h1>

                    <div className="sm:hidden absolute right-[1.5rem]">
                      {" "}
                      <DrawerCloseButton />
                    </div>
                  </div>
                </DrawerHeader>

                <DrawerBody>
                  <div className=" flex flex-col items-left sm:ml-[2rem] ml-[2rem] text-lg  text-gray-500 leading-relaxed  gap-[1.5rem] font-mona">
                    <NavLink
                      to="/dashboard"
                      className="hover:text-black hover:text-xl hover:border-r-2  hover:border-black"
                      activeClassName="active"
                      onClick={isLaptopDevice() ? undefined : onClose}
                    >
                      Dashboard
                    </NavLink>
                    <NavLink
                      to="/recruitment"
                      className="hover:text-black  hover:text-xl hover:border-r-2 hover:border-black"
                      activeClassName="active"
                      onClick={isLaptopDevice() ? undefined : onClose}
                    >
                      Recruitment
                    </NavLink>
                    <NavLink
                      to="/onboarding"
                      className="hover:text-black  hover:text-xl hover:border-r-2 hover: border-black"
                      activeClassName="active"
                      onClick={isLaptopDevice() ? undefined : onClose}
                    >
                      Onboarding/Connect
                    </NavLink>
                    <NavLink
                      to="/post"
                      className="hover:text-black  hover:text-xl hover:border-r-2 hover: border-black"
                      activeClassName="active"
                      onClick={isLaptopDevice() ? undefined : onClose}
                    >
                      Recruitment Post
                    </NavLink>
                  </div>
                </DrawerBody>

                <div className=" flex flex-col top-[48vh] relative text-lg leading-normal  justify-center items-center font-mona">
                  <DrawerFooter>
                    <img
                      src="src\assets\logout-svgrepo-com.svg"
                      alt=""
                      width={40}
                    />
                    <Link to="/">
                      <SignOutButton>
                        <button className="  rounded-md border-2 border-black bg-white  px-2 py-1 hover:bg-black hover:text-white">
                          Sign Out
                        </button>
                      </SignOutButton>
                    </Link>
                  </DrawerFooter>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </>
    );
  }


export default SideBar;
