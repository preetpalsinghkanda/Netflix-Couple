import React from "react";
import strangerThings from "../../assets/Home/strangerPosterwebp.webp";
import originalLogo from "../../assets/original.webp";
import strangerName from "../../assets/strangersName.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className=" border border-white h-screen">
      <div className="flex">
        <div className=" flex flex-col  text-white absolute w-120 z-10 top-30 left-40">
          <img src={originalLogo} alt="" className="w-60 " />
          <img src={strangerName} alt="" className="w-90" />
          <p className="text-xl font-[500] text-[#a8a7a8]">
            When a young boy vanishes, a small town uncovers a mystery involving
            secret experiments, terrifying supernatural forces and a strange
            little girl.
          </p>

          <div className="flex gap-3 my-8">
            <button className="bg-white text-black px-5 py-2 rounded-md flex items-center font-[700] gap-3 text-2xl">
              <FontAwesomeIcon icon={faPlay} className="text-xl" />
              Play
            </button>
            <button className="bg-[#4F4F53] text-white px-4 py-2 rounded-md flex items-center font-[600] gap-2 text-2xl">
              <FontAwesomeIcon icon={faCircleInfo} className="text-xl" />
              More Info
            </button>
          </div>
        </div>

        <div className="h-150 w-300 overflow-hidden absolute right-0">
          <img
            src={strangerThings}
            alt="Stranger Things"
            className="absolute right-0 h-full w-full object-cover "
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Home;
