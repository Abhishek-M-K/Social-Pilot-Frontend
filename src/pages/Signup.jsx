import React, { useState } from "react";
import { SignUp } from "@clerk/clerk-react";

const Signup = () => {
  return (
    <div className="bg-blue  sm:m-0 sm:py-12 md:py-16 sm:h-screen  flex justify-center ">
      <div className="flex flex-col sm:flex-row   sm:m-5 sm:w-[800px] max-w-full sm:shadow-xl">
        <div className="bg-div1 w-full h-full sm:w-1/2 bg-gradient-to-b from-div1 to-[#f0f8fb] leading-5 font-normal font-mona">
          <h1 className="text-[#799BFE] pl-10 pt-5 text-[20px]">
            Social<span className="text-[#4E7AFE]">Pilot</span>
          </h1>
          <div className="flex justify-center  items-center sm:h-[320px] sm:w-[226px] mx-auto  ">
            <img
              src="src/assets/register.svg"

              alt=""
              className="w-full h-[290px] object-cover  max-w-xs sm:max-w-none "
            />
          </div>
        </div>
        <div className="bg-[#FFFFFF] w-full  sm:w-1/2 flex justify-center items-center">
          <SignUp redirectUrl="/dashboard" />
        </div>
      </div>
    </div>
    // <div className="bg-blue  grid h-screen place-items-center ">
    //   <div className="flex   h-[480px] w-[800px] drop-shadow-xl  ">
    //     <div className="bg-div1 w-[50%] bg-gradient-to-b from-div1 to-[#f0f8fb] leading-5  font-normal  font-mona">
    //       <h1 className="text-[#799BFE] pl-10 pt-5 text-[16px] ">
    //         Social<span className="text-[#4E7AFE]">Pilot</span>
    //       </h1>
    //       <div className="h-[390px] w-[236px] mx-auto my-auto ">
    //         <img
    //           src="src\assets\register.svg"
    //           alt=""
    //           className="object-cover  h-[370px]"
    //         />
    //       </div>
    //     </div>
    //     <div className="bg-div2 w-[50%] flex justify-center items-center px-[40px] py-[80px]">
    //       <SignUp  redirectUrl='/dashboard'/>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Signup;
