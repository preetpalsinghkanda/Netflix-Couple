import React from "react";
import Hero_NavBar from "./Components/Hero_NavBar";
import Hero from "./Components/Hero";
import FAQ from "./Components/FAQ";
import ReasonToJoin from "./Components/ReasonToJoin";
import ReadyToWatch from './Components/ReadyToWatch';
import Footer from "./Components/Footer";
import WhoIsWatching from "./Components/WhoIsWatching";
import HomeSideNavBar from "./Components/HomeScreen/HomeSideNavBar";
import HomeNavBar from "./Components/HomeScreen/HomeNavBar";

const App = () => {
  return (
    <div className="flex justify-center  flex-col bg-[black]">
      
      
      {/* <Hero/>
      <ReasonToJoin/>
      <FAQ/>
      <ReadyToWatch/>
      <Footer/>  */}

      {/* <WhoIsWatching/> */}


        {/* <HomeSideNavBar/>*/}
        <HomeNavBar/>

    </div>
  );
};

export default App;
