import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

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

// function ProtectedRoute({ path, element }) {
//   const { isLoading, signedIn } = useClerk();
//   const navigate = useNavigate();

//   if (isLoading) {
//     return <Loader />;
//   }

//   if (!signedIn) {

//     return <Navigate to="/signin" />;
//   }

//   return <Route path={path} element={element} />;
// }

function App() {
  const { isSignedIn } = useUser();
  console.log(isSignedIn);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        {isSignedIn && (
          <Route
            path="/dashboard"
            element={
              <Layout>
                <DashBoard />
              </Layout>
            }
          />
        )}

        {isSignedIn && (
          <Route
            path="/recruitment"
            element={
              <Layout>
                <Recruitment />
              </Layout>
            }
          />
        )}
        {isSignedIn && (
          <Route
            path="/onboarding"
            element={
              <Layout>
                <OnBoarding />
              </Layout>
            }
          />
        )}
        {isSignedIn && (
          <Route
            path="/post"
            element={
              <Layout>
                <RecruitmentPost />
              </Layout>
            }
          />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
