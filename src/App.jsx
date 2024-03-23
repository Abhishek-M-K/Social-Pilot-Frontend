import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Layout from "./Layout";
import DashBoard from "./pages/DashBoard";
import Recruitment from "./pages/Recruitment";
import OnBoarding from "./pages/OnBoarding";
import RecruitmentPost from "./pages/RecruitmentPost";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <Layout>
              <DashBoard />
            </Layout>
          }
        />

         <Route
          path="/recruitment"
          element={
            <Layout>
              <Recruitment />
            </Layout>
          }
        />
        <Route
          path="/onboarding"
          element={
            <Layout>
              <OnBoarding/>
            </Layout>
          }
        />
             <Route
          path="/post"
          element={
            <Layout>
              <RecruitmentPost/>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


// // Define a higher-order component (HOC) for layout wrapping
// const WithLayout = (Component) => () => (
//   <Layout>
//     <Component />
//   </Layout>
// );

// // Define your components (DashBoard, Recruitment, OnBoarding, RecruitmentPost)

// // Refactor routes using the WithLayout HOC
// <Route path="/dashboard" element={WithLayout(DashBoard)} />
// <Route path="/recruitment" element={WithLayout(Recruitment)} />
// <Route path="/onboarding" element={WithLayout(OnBoarding)} />
// <Route path="/post" element={WithLayout(RecruitmentPost)} />