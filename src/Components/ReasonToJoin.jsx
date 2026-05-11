import React from "react";
import tvImg from "../assets/TV.webp";
import downloadImg from "../assets/download.webp";
import everywhereImg from "../assets/everywhere.webp";
import twoFaceImg from "../assets/twoFace.webp";

const ReasonToJoin = () => {
  const reasonsToJoin_Data = [
    {
      heading: "Enjoy on your TV",
      para: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
      img: tvImg,
    },

    {
      heading: "Download your shows to watch offline",
      para: "Save your favourites easily and always have something to watch.",
      img: downloadImg,
    },
    {
      heading: "Watch everywhere",
      para: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      img: everywhereImg,
    },
    {
      heading: "Create profiles for kids",
      para: "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
      img: twoFaceImg,
    },
  ];

  return (
    <div className="w-full mx-auto max-w-7xl px-6 text-white my-15 flex flex-col gap-6">
      <h3 className="text-3xl font-bold">More reasons to join</h3>

      <div className=" grid  md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 grid-rows-4 grid-cols-1 gap-4 bg-[black]">
        {reasonsToJoin_Data.map((item) => {
          return (
            <div className="py-6 px-4 rounded-2xl flex flex-col items-center justify-between bg-gradient-to-b from-[#1F1C4D] via-[#1A1230] to-[#26162b] shadow-[0_0_80px_rgba(168,85,247,0.15)]">
              <div className="flex flex-col gap-4 items-start text-left w-full">
                <h5 className="font-[700] text-2xl">{item.heading}</h5>
                <p className="text-[#c8c8d2]">{item.para}</p>
              </div>
              <img
                src={item.img}
                alt=""
                className="h-22 self-end relative top-3 left-2"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReasonToJoin;
