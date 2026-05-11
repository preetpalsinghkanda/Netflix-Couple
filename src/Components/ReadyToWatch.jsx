import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const ReadyToWatch = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 my-16 text-white flex flex-col items-center">
      <h4 className="lg:text-lg text-md lg:text-center md:text-start">
        Ready to watch? Enter your email to create or restart your membership.
      </h4>
      <div className="my-4 w-full flex flex-col md:flex-row items-center justify-center gap-3">
        <input
          className="w-full md:w-[500px] lg:w-[600px] border border-[#7d7c7c9f] bg-[#0F0F0F] px-4 py-3.5 rounded-sm text-lg font-[600] outline-none"
          type="text"
          placeholder="Email address"
        />
        <button className="bg-[#E50914] whitespace-nowrap hover:bg-[#c11119] flex items-center justify-center gap-2 lg:px-8  px-5 lg:py-3.5 md:py-3.5 py-3 lg:text-2xl md:text-xl text-md font-[700] rounded-lg cursor-pointer self-start md:w-auto">
          Get Started
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </div>
  );
};
export default ReadyToWatch;
