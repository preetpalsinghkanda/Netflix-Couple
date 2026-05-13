import React, { useEffect, useState } from "react";
import NetflixLogo from "../../assets/netflix.png";
import HomeProfile from "../../assets/Home/homeProfile.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBell,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

const HomeNavBar = () => {
   const [showNavBar, setShowNavBar] = useState(false);

      useEffect(() => {

    const handleScroll = () => {
       if (window.scrollY > 50) {
        setShowNavBar(true);
      } else {
        setShowNavBar(false);
         }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full text-white flex justify-between px-14 py-4 transition-all duration-400 ${
        showNavBar ? "bg-black/70 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="flex gap-22 items-center">
        <img src={NetflixLogo} alt="" className="h-10" />

        <ul className="flex font-[700] text-xl gap-9 text-[#ffffffa1]">
                 <li className="text-white cursor-pointer">Home</li>
           <li className="cursor-pointer">TV Shows</li>

          <li className="cursor-pointer">Movies</li>
          <li className="cursor-pointer">My List</li>
          <li className="cursor-pointer">My Netflix</li>
        </ul>
      </div>

      <div className="flex items-center gap-6">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[28px]" />
        <FontAwesomeIcon icon={faBell} className="text-[28px]" />

        <div className="flex items-center gap-1">
             <img src={HomeProfile} alt="" className="h-9 rounded-md" />
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
      </div>
    </div>
  );
};

export default HomeNavBar;
