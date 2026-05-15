import React from "react";
import video from "../../assets/video.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";

const MoreInfo = () => {
  const moreInfo = [
    {
      leftSide: "Director",
      rightSide: "Piyush",
    },
    {
      leftSide: "Writer",
      rightSide: "Piyush",
    },
    {
      leftSide: "Cast",
      rightSide: "Harsh , aman , nonny",
    },
    {
      leftSide: "Genres",
      rightSide: "Romantic Drama, Emotional Love Story, Feel-Good Romance",
    },
    {
      leftSide: "This Movie is",
      rightSide: "Emotional, Heartfelt, Romantic",
    },
  ];

  return (
    <div className="text-white flex justify-center">
      <div className="my-4 border border-[#ffffff39] px-4 py-2 rounded-xl max-w-190">
        <div className="relative overflow-hidden rounded-2xl">
          <video src={video} loop muted playsInline className="w-full" />

          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent"></div>
        </div>

        <div className="flex gap-2 mt-4 relative bottom-6">
          <button className="rounded-xl flex items-center text-black text-2xl font-[700] px-6 gap-2 bg-white py-2">
            <FontAwesomeIcon icon={faPlay} />
            Play
          </button>

          <button className="border px-2 flex items-center border-[#ffffff98] rounded-xl text-2xl">
            <FontAwesomeIcon icon={faPlus} />
          </button>

          <button className="border px-2 flex items-center border-[#ffffff98] rounded-xl text-2xl">
            <FontAwesomeIcon icon={faThumbsUp} />
          </button>
        </div>

        <div className="">
          <p className="italic text-2xl font-bold mb-2">2026, 15 May</p>
          <div className="flex gap-4">
            <span className="border border-[#ffffff9b] px-2">U/A 18+ [A]</span>
            Passion, heartbreak, and unforgettable romance.
          </div>

          <p className="text-md text-[#ffffffad] my-6 italic">
            {" "}
            In a world full of noise and chaos, they found comfort in each other
            — a love built through quiet moments, late-night conversations, and
            memories that refused to fade. Some stories are not about perfect
            endings, but about the feelings that stay with us forever.
          </p>

          <hr className="border-[#ffffff96]" />

          <div className="my-4">
            <h2 className="text-2xl font-[500]">
              Spidername : An Unforgettable Love Story
            </h2>

            <ul className="my-4 text-sm space-y-2">
              {moreInfo.map((item, index) => {
                return (
                  <li key={index} className="flex">
                    <span className="text-[#ffffffa2] font-[500] w-[130px]">
                      {item.leftSide}:
                    </span>

                    <span className="text-white flex-1 font-[600]">
                      {item.rightSide}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
