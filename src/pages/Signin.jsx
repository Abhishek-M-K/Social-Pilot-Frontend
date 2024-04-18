import React from "react";
import { Navigate } from "react-router-dom";
import { SignIn, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
const baseUrl = process.env.PUBLIC_URL;
const Login = () => {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  // // Function to navigate to the dashboard after successful login
  // const navigateToDashboard = () => {
  //   <Navigate to="/dashboard" />;
  // };

  // If the user is already signed in, redirect to the dashboard
  if (isSignedIn) {
    return <Navigate to={`${baseUrl}/dashboard`} />;
  }

  // Render the login form if the user is not signed in
  return (
    <div className="bg-[#D5DCF6]  sm:m-0 sm:py-12 md:py-16 sm:h-screen  flex justify-center ">
      <div className="flex flex-col sm:flex-row   sm:m-5 sm:w-[800px] max-w-full sm:shadow-xl">
        <div className="bg-[#E1F5FE] w-full h-full sm:w-1/2 bg-gradient-to-b from-[#E1F5FE] to-[#f0f8fb] leading-5 font-normal font-mona">
          <h1 className="text-[#799BFE] pl-10 pt-5 text-[20px]">
            Social<span className="text-[#4E7AFE]">Pilot</span>
          </h1>
          <div className="flex justify-center  items-center sm:h-[320px] sm:w-[226px] mx-auto  ">
            <img
              src="/assets/login.svg"
              alt=""
              className="w-full h-[290px] object-contain   max-w-xs sm:max-w-none "
            />
          </div>
        </div>
        <div className="bg-[#FFFFFF] w-full  sm:w-1/2 flex justify-center items-center">
          {/* Call navigateToDashboard function after successful login */}
          {/* <SignIn /> */}
          <SignIn redirectUrl={`${baseUrl}/dashboard`} afterSignIn={() => navigate(`${baseUrl}/dashboard`)} />

        </div>
      </div>
    </div>
  );
};

export default Login;
