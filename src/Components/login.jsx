import React from "react";
import bgImage from "../assets/bgImage.jpg";
import netflixLogo from "../assets/netflix.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  return (
    <div
      className="bg-black w-full h-screen bg-cover bg-center flex mx-auto items-center justify-center"
      style={{
        backgroundImage: `
      radial-gradient(
        circle,
        rgba(0,0,0,0.1) 0%,
        rgba(0,0,0,0.1) 100%
      ),
      linear-gradient(
        to top,
        rgba(0,0,0,0.5),
        rgba(0,0,0,0.06),
        rgba(0,0,0,0.5)
      ),
      url(${bgImage})
    `,
      }}
    >
      <img className="absolute left-55 h-12 top-5" src={netflixLogo} alt="" />

      <div className="text-white px-15 py-10 max-w-lg bg-[#080808d5] rounded-xl ">
        <h5 className="text-4xl font-extrabold">Sign In</h5>
        <div className="flex flex-col mt-8 gap-4">
          <input
            type="text"
            placeholder="Email or mobile number"
            className="border border-[#ffffff58] rounded-sm py-3.5 px-4.5 text-lg"
          />
          <input
            placeholder="Password"
            type="text"
            className="border border-[#ffffff58] rounded-sm py-3.5 px-4.5 text-lg"
          />
        </div>
        <div className="flex flex-col gap-2.5 my-4">
          <button className="bg-[#D90C16] w-full  text-lg font-bold py-2.5 rounded-lg flex items-center justify-center">
            Sign In
          </button>

          <p className="text-center text-[#ffffffae]">OR</p>

          <button className="bg-[#333535] text-black w-full  text-lg font-bold py-2.5 rounded-lg flex items-center justify-center">
            <FontAwesomeIcon icon={faGoogle} className="text-white" />
          </button>
        </div>

        <div className="flex flex-col gap-4 mt-8">
          <p className="text-[18px] text-[#ffffffc6]">
            New to Netflix?{" "}
            <span className="text-white font-bold">Sign up now.</span>
          </p>
          <p className="text-sm text-[#ffffffae]">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
