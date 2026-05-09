import React from "react";
import Hero_NavBar from "./Components/Hero_NavBar";
import Hero from "./Components/Hero";
import FAQ from "./Components/FAQ";
import ReasonToJoin from "./Components/ReasonToJoin";

const App = () => {
  return (
    <div className="flex justify-center  flex-col bg-[black]">
      
      
      <Hero/>
      <ReasonToJoin/>
      <FAQ/>
    </div>
  );
};

export default App;
