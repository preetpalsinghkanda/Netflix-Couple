import React from "react";
import strangerThings from "../../assets/Home/strangerPosterwebp.webp";
import originalLogo from "../../assets/original.webp";
import strangerName from "../../assets/strangersName.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faCircleInfo,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="relative lg:h-[75vh] lg:min-h-auto min-h-screen w-full rounded-xl">
      <img
        src={strangerThings}
        alt="Stranger Things"
        className="w-full h-full object-cover absolute right-0 top-0"
      />

      <div className="absolute inset-0 lg:bg-gradient-to-r bg-gradient-to-t from-black via-black/30  lg:via-black/60 to-transparent"></div>

      <div className="flex flex-col text-white absolute lg:justify-start lg:items-start lg:w-120 z-39 lg:top-35 justify-center items-center left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 top-150">
        <img src={originalLogo} alt="" className="w-60 " />

        <img src={strangerName} alt="" className="w-90" />

        <p className="text-xl text-[#a8a7a8] pr-6 hidden lg:flex">
          When a young boy vanishes, a small town uncovers a mystery involving
          secret experiments, terrifying supernatural forces and a strange
          little girl.
        </p>

        <div className="flex lg:gap-4 my-6 gap-12">
          <button className="lg:hidden">
            <FontAwesomeIcon
              icon={faPlus}
              className="text-2xl text-[#ffffffe6]"
            />
            <h6 className="text-sm text-[#E5E5E0] text-nowrap">My List</h6>
          </button>
          <button className="bg-white cursor-pointer text-black px-6 py-3 rounded-md flex items-center font-bold gap-3 text-lg hover:bg-gray-200 transition">
            <FontAwesomeIcon icon={faPlay} />
            Play
          </button>

          <button className="bg-[#8080807a] hidden cursor-pointer text-white px-6 py-3 rounded-md lg:flex items-center font-semibold gap-3 text-lg hover:bg-[#80808097] transition">
            <FontAwesomeIcon icon={faCircleInfo} />
            More Info
          </button>

          <button className="lg:hidden">
            <FontAwesomeIcon
              icon={faCircleInfo}
              className="text-2xl text-[#ffffffe6]"
            />
            <h6 className="text-sm text-[#E5E5E0]">Info</h6>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
