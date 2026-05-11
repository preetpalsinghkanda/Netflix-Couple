import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const footerBtns = [
    [
      {
        name: "FAQ",
      },
      {
        name: "Investor Relations",
      },
      {
        name: "Privacy",
      },
      {
        name: "Speed Test",
      },
    ],
    [
      {
        name: "Help Center",
      },
      {
        name: "Jobs",
      },
      {
        name: "Cookie Preferences",
      },
      {
        name: "Legal Notices",
      },
    ],
    [
      {
        name: "Account",
      },
      {
        name: "Ways to Watch",
      },
      {
        name: "Corporate Information",
      },
      {
        name: "Only on Netflix",
      },
    ],
    [
      {
        name: "Media Center",
      },
      {
        name: "Terms of Use",
      },
      {
        name: "Contact Us",
      },
    ],
  ];

  return (
    <div className=" w-full px-10 mx-auto max-w-7xl text-[#B3B3B3] mb-25">
      <h6>
        Questions? Call{" "}
        <span className="underline cursor-pointer">000-800-919-1743</span>
      </h6>

      <div className="grid-cols-4 grid my-10">
        <div>
          <ul className="gap-2 flex  flex-col">
            {footerBtns[0].map((item) => {
              return <li className="underline">{item.name}</li>;
            })}
          </ul>
        </div>

        <div>
          <ul className="gap-2 flex  flex-col">
            {footerBtns[1].map((item) => {
              return <li className="underline">{item.name}</li>;
            })}
          </ul>
        </div>

        <div>
          <ul className="gap-2 flex flex-col">
            {footerBtns[2].map((item) => {
              return <li className="underline">{item.name}</li>;
            })}
          </ul>
        </div>

        <div>
          <ul className="gap-2 flex flex-col">
            {footerBtns[3].map((item) => {
              return <li className="underline">{item.name}</li>;
            })}
          </ul>
        </div>
      </div>

      <div className="outline-1 px-4 py-1 rounded-md text-white outline-[#7e7e7e] w-fit my-8">
        <FontAwesomeIcon icon={faLanguage} />
        <select name="" id="" className="outline-0">
          <option value="">English</option>
          <option value="">Hindi</option>
        </select>
      </div>

      <h6>Netflix India</h6>

      <p className="my-6">
        This page is protected by Google reCAPTCHA to ensure you're not a bot.
      </p>
    </div>
  );
};

export default Footer;
