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
      <div className="flex ">
        <SideBar />

        <div className=" w-full md:mx-[2rem]   my-[0.5rem] ">
          <HeaderDash />
          <main className=" my-[0.5rem] pr-[1rem] flex-1 py-4  ">
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
