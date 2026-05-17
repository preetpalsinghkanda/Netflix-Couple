import React, { useContext } from "react";
import { useState } from "react";
import bgImage from "../assets/bgImage.jpg";
import netflixLogo from "../assets/netflix.png";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import NetflixCouple from "../Context/Context.";

const Login = ({ AuthName, oppositeLine, oppositeName, navigatePage }) => {
  const { setEmail, email, pass, setPass, setUserName } =
    useContext(NetflixCouple);

  const navigate = useNavigate();
  const [emailErr, setEmailErr] = useState(false);

  const [passErr, setPassErr] = useState(false);

  const provider = new GoogleAuthProvider();

  // google login

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      setUserName(result.user.displayName);

      localStorage.setItem("isLoggedIn", "true");
      toast.success("Successfully Login with GOOOGLE!");
      navigate("/home");
    } catch (error) {
      toast.error(`Err : ${error.message}`);
    }
  };

  // email login

  const handleEmailLogin = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, pass);
      localStorage.setItem("isLoggedIn", "true");
      toast.success("Successfully Logged In :) ");

      navigate("/home");
    } catch (error) {
      toast.error(error.message);
    }
  };

  //signup

  const handleSignup = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, pass);
      toast.success("Account Created Successfully :), let's gooo");

      navigate("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };

  //input check

  function emailErrCheck() {
    if (email.length < 10) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }
  }

  function passErrCheck() {
    if (pass.length < 6) {
      setPassErr(true);
    } else {
      setPassErr(false);
    }
  }

  return (
    <div
      className=" bg-black w-full h-screen bg-cover bg-center flex mx-auto items-center justify-center"
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
      <img
        onClick={() => {
          navigate("/");
          setEmail("");
        }}
        className="cursor-pointer absolute lg:left-45 md:left-3 sm:left-3 left-5 lg:h-25 md:h-22 sm:h-20  h-22 top-5"
        src={netflixLogo}
        alt=""
      />

      {/*  */}

      <div className="text-white sm:px-15 px-8 sm:py-10 py-45 sm:bg-[#080808d5] bg-black sm:max-w-lg sm:h-auto h-full w-full  rounded-xl ">
        <h5 className="text-4xl font-extrabold">{AuthName}</h5>
        <div className="flex flex-col mt-8 gap-4">
          <div>
            <input
              type="text"
              value={email}
              placeholder="Email or mobile number"
              className="border border-[#ffffff58] w-full rounded-sm py-3.5 px-4.5 text-lg"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            {emailErr && (
              <div className="flex items-center text-sm mt-1 gap-1 text-[#C91404]">
                <FontAwesomeIcon icon={faCircleXmark} />
                <p>Please enter a valid email or mobile number.</p>
              </div>
            )}
          </div>

          <div>
            <input
              value={pass}
              placeholder="Password"
              type="password"
              className="border w-full border-[#ffffff58] rounded-sm py-3.5 px-4.5 text-lg"
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />

            {passErr && (
              <div className="flex items-center text-sm mt-1 gap-1 text-[#C91404]">
                <FontAwesomeIcon icon={faCircleXmark} />
                <p>Your password must contain 6 characters.</p>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2.5 my-4">
          <button
            onClick={() => {
              emailErrCheck();
              passErrCheck();

              if (email.length >= 10 && pass.length >= 6) {
                if (AuthName === "Sign Up") {
                  handleSignup();
                } else {
                  handleEmailLogin();
                }
              }
            }}
            className="cursor-pointer bg-[#D90C16] w-full  text-lg font-bold py-2.5 rounded-lg flex items-center justify-center"
          >
            {AuthName}
          </button>

          <p className="text-center text-[#ffffffae]">OR</p>

          <button
            onClick={handleGoogleLogin}
            className=" cursor-pointer bg-[#333535] text-black w-full  text-lg font-bold py-3 rounded-lg flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faGoogle} className="text-white text-2xl" />
          </button>
        </div>

        <div className="flex flex-col gap-4 mt-8">
          <p className="text-[18px] text-[#ffffffc6]">
            {oppositeLine}{" "}
            <span
              onClick={() => navigate(`/${navigatePage}`)}
              className="text-white font-bold cursor-pointer"
            >
              {oppositeName}
            </span>
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
