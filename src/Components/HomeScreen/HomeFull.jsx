import React, { useContext } from "react";
import HomeSideNavBar from "./HomeSideNavBar";
import HomeNavBar from "./HomeNavBar";
import Home from "./Home";
import Cards from "./Cards";

const HomeFull = () => {
    return (
    <div className="bg-black min-h-screen overflow-x-hidden w-full">
      <HomeNavBar />

      <div className="flex w-full">
        <HomeSideNavBar />

        <div className="flex-1 px-2 min-w-0 w-full overflow-hidden lg:ml-26">
          <Home />
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default HomeFull;
