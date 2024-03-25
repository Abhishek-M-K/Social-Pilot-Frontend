import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { useClerk } from "@clerk/clerk-react";

import "./index.css";

import Loader from "./components/Loader";

import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Layout from "./Layout";
import DashBoard from "./pages/DashBoard";
import Recruitment from "./pages/Recruitment";
import OnBoarding from "./pages/OnBoarding";
import RecruitmentPost from "./pages/RecruitmentPost";

function ProtectedRoute({ path, element }) {
  const { isLoading, signedIn } = useClerk();
  const navigate = useNavigate();

  if (isLoading) {
    return <Loader />;
  }

  if (!signedIn) {
    navigate("/signin");
    return null;
  }

  return <Route path={path} element={element} />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute
              path="/"
              element={
                <Layout>
                  <DashBoard />
                </Layout>
              }
            />
          }
        />
        <Route
          path="/recruitment/*"
          element={
            <ProtectedRoute
              path="/"
              element={
                <Layout>
                  <Recruitment />
                </Layout>
              }
            />
          }
        />
        <Route
          path="/onboarding/*"
          element={
            <ProtectedRoute
              path="/"
              element={
                <Layout>
                  <OnBoarding />
                </Layout>
              }
            />
          }
        />
        <Route
          path="/post/*"
          element={
            <ProtectedRoute
              path="/"
              element={
                <Layout>
                  <RecruitmentPost />
                </Layout>
              }
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
