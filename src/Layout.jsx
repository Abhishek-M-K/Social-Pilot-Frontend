import React from "react";
import SideBar from "./components/SideBar";
import DashBoardHeader from "./components/DashBoardHeader";

const Layout = ({ children }) => {
  return (
    <>
      <SideBar />

      <div className="w-full flex flex-col  pl-[20%] ">
        <DashBoardHeader />
        <main className="flex-grow">{children}</main>
      </div>
    </>
  );
};

export default Layout;
