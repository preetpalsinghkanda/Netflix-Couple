import React from "react";
import Hero_NavBar from "./Hero_NavBar";
import bgImage from "../assets/bgImage.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import FAQ from "./FAQ";

const Hero = () => {
  return (
    <div
      className="bg-[#000000]  max-h-218  w-full h-screen bg-[length:100%_100%] bg-center flex mx-auto items-start justify-center"
      style={{
        backgroundImage: `
    radial-gradient(
      circle,
      rgba(0,0,0,0.2) 0%,
      rgba(0,0,0,0.65) 100%
    ),
    linear-gradient(
      to top,
      rgba(0,0,0,0.9),
      rgba(0,0,0,0.06),
      rgba(0,0,0,0.7)
    ),
    url(${bgImage})
  `,
      }}
    >
      <div className="w-[1280px] mx-auto px-6 flex flex-col   ">
        <Hero_NavBar />

        <div className="text-white text-center   my-14">
          <h1 className="lg:text-6xl md:text-6xl text-4xl font-extrabold leading-tight">
            Unlimited movies,<p className="lg:block  md:block sm:block inline-block"></p> shows, and more
          </h1>

          <p className="lg:text-2xl md:text-2xl text-md font-bold relative bottom-2 mt-6">
            Starts at ₹149. But FREE for Harsh ,<p className="block"></p>Cancel
            at any time.
          </p>

          <p className="text-lg mt-5">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>

          <div className="my-4 flex-col md:flex-row flex items-center justify-center gap-3">
            <input
              className="  md:w-auto w-full lg:min-w-[400px] md:min-w-[400px] border bg-[#0f0f0f93] px-4 rounded-sm py-3.5 text-xl font-[700] border-[#7d7c7c9f]"
              type="text"
              placeholder="Email address"
            />
            <button className="bg-[#E50914] flex items-center justify-center px-8 py-3.5 text-2xl cursor-pointer font-[700] rounded-lg">
              Get Started <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
