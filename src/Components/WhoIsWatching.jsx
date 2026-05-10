import React from "react";
import profile1 from "../assets/Profiles/profile1.webp";
import profile2 from "../assets/Profiles/profile2.webp";
import profile3 from "../assets/Profiles/profile3.webp";
import profile4 from "../assets/Profiles/profile4.webp";

const WhoIsWatching = () => {
  const profiles = [
    {
      photo: profile1,
      month: "1 month",
    },
    {
      photo: profile2,
      month: "3 month",
    },
    {
      photo: profile3,
      month: "5 month",
    },
    {
      photo: profile4,
      month: "6 month",
    },
  ];

  return (
    <div className="h-screen text-white flex justify-center items-center flex-col">
      <h1 className="text-5xl font-[600]">Who's Watching ?</h1>

      <div className="my-16 flex gap-12">
        {profiles.map((item) => {
          return (
            <div className="flex flex-col items-center gap-2">
              <div className="rounded-2xl  w-50 h-50 overflow-hidden cursor-pointer">
                <img src={item.photo} alt="" className="object-fit " />
              </div>
              <h6 className="text-3xl"> {item.month}</h6>
            </div>
          );
        })}
      </div>

      <button className="border cursor-pointer rounded-xl text-[#9c9c9c] border-white px-6 text-2xl border-dashed flex items-center py-3 bg-[#131313af]">
        MANAGE PROFILES
      </button>
    </div>
  );
};

export default WhoIsWatching;
