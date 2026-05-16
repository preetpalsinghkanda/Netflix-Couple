import React from "react";
import Hero_NavBar from "./Components/Hero_NavBar";
import Hero from "./Components/Hero";
import FAQ from "./Components/FAQ";
import ReasonToJoin from "./Components/ReasonToJoin";
import ReadyToWatch from "./Components/ReadyToWatch";
import Footer from "./Components/Footer";
import WhoIsWatching from "./Components/WhoIsWatching";
import HomeSideNavBar from "./Components/HomeScreen/HomeSideNavBar";
import HomeNavBar from "./Components/HomeScreen/HomeNavBar";
import Home from "./Components/HomeScreen/Home";
import Cards from "./Components/HomeScreen/Cards";
import HomeFull from "./Components/HomeScreen/HomeFull";
import MoreInfo from "./Components/HomeScreen/MoreInfo";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="flex justify-center  flex-col bg-[black]">
      <Toaster />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero /> <ReasonToJoin /> <FAQ /> <ReadyToWatch /> <Footer />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <Login
              AuthName={"Sign In"}
              oppositeLine={"New to Netflix?"}
              oppositeName={"Sign up now."}
              navigatePage={"signup"}
            />
          }
        />
        <Route
          path="/Signup"
          element={
            <Login
              AuthName={"Sign Up"}
              oppositeLine={"Already have an account?"}
              oppositeName={"Sign in now."}
              navigatePage={"login"}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
