import React, { useState } from "react";
import { SignIn } from "@clerk/clerk-react";

const Login = () => {
  return (
    <div className="bg-blue  sm:m-0 sm:py-12 md:py-16 sm:h-screen  flex justify-center ">
      <div className="flex flex-col sm:flex-row   sm:m-5 sm:w-[800px] max-w-full sm:shadow-xl">
        <div className="bg-div1 w-full h-full sm:w-1/2 bg-gradient-to-b from-div1 to-[#f0f8fb] leading-5 font-normal font-mona">
          <h1 className="text-[#799BFE] pl-10 pt-5 text-[20px]">
            Social<span className="text-[#4E7AFE]">Pilot</span>
          </h1>
          <div className="flex justify-center  items-center sm:h-[320px] sm:w-[226px] mx-auto  ">
            <img
              src="src/assets/login.svg"
              alt=""
              className="w-full h-[290px] object-contain   max-w-xs sm:max-w-none "
            />
          </div>
        </div>
        <div className="bg-[#FFFFFF] w-full  sm:w-1/2 flex justify-center items-center">
          <SignIn redirectUrl="/dashboard" />
        </div>
      </div>
    </div>
  );
};

export default Login;
