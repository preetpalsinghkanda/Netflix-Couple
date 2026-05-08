import React from "react";
import netflixIcon from "../assets/netflix.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

const Hero_NavBar = () => {
  return (
    <div className="  flex justify-between">
      <img src={netflixIcon} alt="" className="h-40 relative bottom-8" />
      <div className="flex flex-row items-start gap-4 relative top-8">
        <div className="outline-1 px-4 py-1 rounded-md text-white outline-[#7e7e7e]">
          <FontAwesomeIcon icon={faLanguage} />
          <select name="" id="" className="outline-0">
            <option value="">English</option>
            <option value="">Hindi</option>
          </select>
        </div>
        <button className="bg-[#E50914] text-[#FFFFFF] font-bold rounded-md px-4 py-1">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Hero_NavBar;
