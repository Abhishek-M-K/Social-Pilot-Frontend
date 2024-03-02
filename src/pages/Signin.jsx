import React, { useState } from "react";
import { SignIn } from "@clerk/clerk-react";

const Login = () => {
  return (
    <div className="bg-blue py-[25px] grid h-screen place-items-center">
      <div className="flex h-[500px]  w-[800px] drop-shadow-xl">
        <div className="bg-div1 w-[50%] bg-gradient-to-b from-div1 to-[#f0f8fb] leading-5  font-normal  font-mona">
          <h1 className="text-[#799BFE] pl-10 pt-5 text-[16px] ">
            Social<span className="text-[#4E7AFE]">Pilot</span>
          </h1>
          <div className="h-[290px] w-[226px] mx-auto my-auto">
            <img
              src="src\assets\login.svg"
              alt=""
            />
          </div>
        </div>
        <div className="bg-div2 w-[50%] flex justify-center items-center px-[40px]">
          <SignIn/>
        </div>
      </div>
    </div>
  );
};

export default Login;