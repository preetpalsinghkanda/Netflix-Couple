import React, { useContext, useEffect, useState } from "react";
import NetflixLogo from "../../assets/netflix.png";
import HomeProfile from "../../assets/Home/homeProfile.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBell,
  faCaretDown,
  faUser,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import logoSmall from "../../assets/NetflixSmallLogo.webp";
import catImg from "../../assets/catimg.webp";
import NetflixCouple from "../../Context/Context.";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const HomeNavBar = () => {
  const navigate = useNavigate();
  const { userName } = useContext(NetflixCouple);
  const [showNavBar, setShowNavBar] = useState(false);
  const [showNote, setShowNote] = useState(false);
  const [showAccount, setShowAccount] = useState(false);

  //logout fnc

  async function handleLogout() {
    try {
      await signOut(auth);
      localStorage.removeItem("isLoggedIn");
      toast.success("Successfully Logout champ!");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowNavBar(true);
      } else {
        setShowNavBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div
        className={`fixed top-0 left-0 z-50 w-full text-white flex justify-between lg:px-14 md:px-10 px-4 py-4 transition-all duration-300 ${
          showNavBar ? "bg-black/70 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="flex gap-22 items-center">
          <img src={NetflixLogo} alt="" className="h-10 hidden lg:flex" />

          <img src={logoSmall} alt="" className="h-10 lg:hidden flex" />

          <ul className="lg:flex font-[700] text-xl gap-9 text-[#ffffffa1] hidden">
            <li className="text-white cursor-pointer">Home</li>
            <li className="cursor-pointer hover:text-white transition">
              TV Shows
            </li>
            <li className="cursor-pointer hover:text-white transition">
              Movies
            </li>
            <li className="cursor-pointer hover:text-white transition">
              My List
            </li>
            <li className="cursor-pointer hover:text-white transition">
              My Netflix
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-6">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-[28px] cursor-pointer"
          />

          <div
            className="relative flex cursor-pointer group"
            onClick={() => setShowNote(!showNote)}
          >
            <FontAwesomeIcon icon={faBell} className="text-[28px]" />

            <p className="relative right-4 font-[700] bottom-2 w-5 h-5 text-sm text-white flex justify-center items-center rounded-full bg-red-700">
              2
            </p>

            <div
              className={`absolute top-12 sm:right-0 -right-22 w-80 p-2 rounded-2xl bg-[#0000007b] border border-[#ffffff5b] text-white z-50 ${
                showNote ? "block" : "hidden"
              } group-hover:block`}
            >
              <img src={catImg} alt="" className="rounded-2xl" />

              <hr className="border-0 outline-[#ffffff5b]  outline-1 my-3" />

              <div className="text-sm italic">
                The truth? I like you. A lot. More than I've liked anyone for a
                long time. And to be honest, it kinda scares me. I don't want to
                screw up what we have, whatever it is, and I've fallen pretty
                damn hard for you. I just hope that whatever happens we don't
                ruin what we had before all this happened. The truth? I love
                you.
                <p className="text-end">- by Harsh Sharma</p>
              </div>
            </div>
          </div>

          <div
            className="flex items-center gap-1 cursor-pointer group"
            onClick={() => setShowAccount(!showAccount)}
          >
            <img src={HomeProfile} alt="" className="h-9 rounded-md" />

            <FontAwesomeIcon icon={faCaretDown} />
            <div
              className={`absolute top-18  w-50 right-2 lg:right-10  p-4 rounded-2xl bg-[black] border border-[#ffffff5b] text-white z-50 ${
                showAccount ? "block" : "hidden"
              } group-hover:block`}
            >
              <div className="flex flex-col gap-2">
                <div className="flex gap-3  items-center">
                  <img src={HomeProfile} alt="" className="h-8 rounded-md" />{" "}
                  Hi, {userName}
                </div>
                <div className="flex gap-3  items-center">
                  {" "}
                  <FontAwesomeIcon icon={faUser} /> Account
                </div>
                <div className="flex gap-3  items-center">
                  <FontAwesomeIcon icon={faCircleQuestion} /> Help Center
                </div>
              </div>

              <button onClick={handleLogout} className=" cursor-pointer py-1 mt-3 text-lg cursor-pointer w-full rounded-md bg-[#E50914] flex items-center justify-center font-[600]">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNavBar;
