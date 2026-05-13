import React from "react";
import HomeSideNavBar from "./HomeSideNavBar";
import HomeNavBar from "./HomeNavBar";
import Home from "./Home";
import Cards from "./Cards";

const HomeFull = () => {
  return (
    <div className="bg-black min-h-screen">
      <HomeNavBar />

      <div className="flex">
        <HomeSideNavBar />

        <div className="flex-1 px-6">
          <Home />
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default HomeFull;
