import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import NetflixCouple from "../Context/Context.";

const FAQ = () => {
  const { enabledFAQ, setEnabledFAQ } = useContext(NetflixCouple);

  const faqData = [
    {
      faq: " What is Netflix Couple?",
      answer:
        " Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – onthousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
    },

    {
      faq: "Is this only for Harsh ?",
      answer:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – onthousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
    },

    {
      faq: "Is Netflix Couple for parents ?",
      answer:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – onthousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
    },
  ];

  return (
    <div className="w-full mx-auto max-w-7xl px-6 text-white">
      <h3 className="text-3xl font-bold">Frequently Asked Questions</h3>

      <div className="my-3 flex flex-col gap-2 items-stretch w-full">
        {faqData.map((item, indexValue) => (
          <div key={indexValue} className="w-full">
            <div
              className="bg-[#2D2D2D] py-6 px-6 flex items-center justify-between w-full cursor-pointer hover:bg-[#414141] transition-colors"
              onClick={() =>
                setEnabledFAQ &&
                setEnabledFAQ(enabledFAQ === indexValue ? null : indexValue)
              }
            >
              <h4 className="text-2xl font-[500]"> {item.faq}</h4>
              <FontAwesomeIcon icon={faPlus} className="text-4xl" />
            </div>

            {enabledFAQ === indexValue && (
              <div className="py-6 px-6  text-2xl gap-6 flex flex-col bg-[#2D2D2D] border-t-2 border-[black] ">
                <p className="">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
        <div></div>
      </div>
    </div>
  );
};

export default FAQ;
