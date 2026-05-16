import React, { useContext } from "react";
import netflixIcon from "../assets/netflix.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import NetflixCouple from "../Context/Context.";

const Hero_NavBar = () => {
  const {setEmail} = useContext(NetflixCouple)
  const navigate = useNavigate()
  return (
    <div className="  flex justify-between items-center my-5 ">
      <img
      onClick={()=>navigate("/")}
        src={netflixIcon}
        alt=""
        className="cursor-pointer lg:h-11 md:h-35 sm:h-30 h-25 "
      />
      <div className="flex flex-row items-start gap-4">
        <div className="outline-1 px-4 py-1 rounded-md text-white outline-[#7e7e7e]">
          <FontAwesomeIcon icon={faLanguage} />
          <select name="" id="" className="outline-0 bg-black hidden sm:inline-block ">
            
            <option value="">English</option>
            <option value="">Hindi</option>
          </select>
        </div>
        <button onClick={()=>{navigate("/login"); setEmail("")}} className="bg-[#E50914] text-[#FFFFFF] font-bold rounded-md px-4 py-1 cursor-pointer">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Hero_NavBar;
