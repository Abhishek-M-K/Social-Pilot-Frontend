import React from "react";
import SideBar from "./components/SideBar";
import HeaderDash from "./components/HeaderDash";
import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Layout = ({ children }) => {
  //
    return (
      <>
        <div className="flex m-[0.5rem]  sm:mx-[2rem] ">
          <SideBar />

          <div className="w-full  sm:ml-[20%] ">
            <HeaderDash />
            <main className="flex-grow my-[1rem]  ">{children}</main>
          </div>
        </div>
      </>
    );



};

export default Layout;
