import React from "react";
import NetflixLogo from "../../assets/netflix.png";
import HomeProfile from "../../assets/Home/homeProfile.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBell,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

const HomeNavBar = () => {
  return (
    <div className=" text-white flex justify-between my-4 px-14">
      <div className="flex gap-22 items-center">
        <img src={NetflixLogo} alt="" className="h-10" />
        <ul className="flex font-[700] text-xl gap-9 text-[#ffffffa1] ">
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
