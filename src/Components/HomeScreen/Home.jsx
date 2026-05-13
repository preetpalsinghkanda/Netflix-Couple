import React from "react";
import strangerThings from "../../assets/Home/strangerPosterwebp.webp";
import originalLogo from "../../assets/original.webp";
import strangerName from "../../assets/strangersName.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="relative h-[75vh] w-full overflow-hidden rounded-xl">
      
      <img
        src={strangerThings}
        alt="Stranger Things"
        className="w-300 h-150 object-cover absolute right-0 top-0"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>

      <div className="flex flex-col  text-white absolute w-120 z-10 top-30 ">
        
        <img src={originalLogo} alt="" className="w-60" />

        <img src={strangerName} alt="" className="w-90" />

        <p className="text-xl text-[#a8a7a8] pr-6">
          When a young boy vanishes, a small town uncovers a mystery involving
          secret experiments, terrifying supernatural forces and a strange
          little girl.
        </p>

        <div className="flex gap-4 my-6">
          <button className="bg-white text-black px-6 py-3 rounded-md flex items-center font-bold gap-3 text-lg hover:bg-gray-200 transition">
            <FontAwesomeIcon icon={faPlay} />
            Play
          </button>

          <button className="bg-gray-600/80 text-white px-6 py-3 rounded-md flex items-center font-semibold gap-3 text-lg hover:bg-gray-500 transition">
            <FontAwesomeIcon icon={faCircleInfo} />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;