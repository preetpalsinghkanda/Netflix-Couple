import React, { useState } from "react";

const Cards = () => {
  const [visibleCards, setVisibleCards] = useState(4);
  const [cardss, setCardss] = useState(6);

  const CardImages = [
    {
      url: "https://m.media-amazon.com/images/M/MV5BNzljN2MwM2UtMDg2Ny00YzlmLWFlYTktODM5ZmEwMWE5MTgwXkEyXkFqcGc@._V1_.jpg",
    },
    {
      url: "https://m.media-amazon.com/images/M/MV5BYjMzMWFjYmEtZWJkZS00NDUwLWE2M2MtN2IyNjE0ZDEyYmRiXkEyXkFqcGc@._V1_.jpg",
    },
    {
      url: "https://m.media-amazon.com/images/M/MV5BODFkMGE0Y2QtMmUyMi00ZjVkLTkxYWMtOTkyM2FhNGZjYzJjXkEyXkFqcGc@._V1_.jpg",
    },
    {
      url: "https://m.media-amazon.com/images/M/MV5BMGRmODRlODktZDUzNi00MDhhLWEyNjYtNThmNmY0Nzk0YzI0XkEyXkFqcGc@._V1_.jpg",
    },
    {
      url: "https://m.media-amazon.com/images/M/MV5BYWE1ZTBjNTYtYmQzNy00NGE0LWE2ODctM2ZhNjJlZjAzYWM4XkEyXkFqcGc@._V1_.jpg",
    },
    {
      url: "https://m.media-amazon.com/images/M/MV5BZGFlMjJlY2QtNDY3ZC00ZjQ4LTg1OWItYjlkYWE3MTAzMTFiXkEyXkFqcGc@._V1_.jpg",
    },
  ];

  const CardImagesV = [
    "https://m.media-amazon.com/images/M/MV5BNzllNmRlN2EtMDQyOC00ODJjLTg4OWQtZDNmNGU3YzlkNjc1XkEyXkFqcGc@._V1_.jpg",

    "https://m.media-amazon.com/images/M/MV5BZjU4OWNiYzQtMzc1NS00NjZlLTgyYTctZWY4ZmEzMTkxYjA4XkEyXkFqcGc@._V1_.jpg",

    "https://m.media-amazon.com/images/M/MV5BNTg2YWNkN2EtMzc1Ny00ZTBhLWFmYTItMmMyNzhjNjhhNmVhXkEyXkFqcGc@._V1_.jpg",

    "https://m.media-amazon.com/images/M/MV5BNzM3OTRlZDktYTk0OS00OTlmLWFhMjctMTZiODU4N2RiYzhhXkEyXkFqcGc@._V1_.jpg",

    "https://m.media-amazon.com/images/M/MV5BZmM3ZDU3ODItZmY5Yi00OTQ2LWE5OTctZTA5NDBhMWJkOGY3XkEyXkFqcGc@._V1_.jpg",

    "https://m.media-amazon.com/images/M/MV5BZDY2NTkxMWQtMmNkMC00NmNjLWIzMmItNmEyMmRmMDk2YmY2XkEyXkFqcGc@._V1_.jpg",

    "https://m.media-amazon.com/images/M/MV5BNjUzODE2ZWYtMDdiMS00ZTA0LWI4MzEtNDkyODNiNmIwMWY1XkEyXkFqcGc@._V1_.jpg",

    "https://m.media-amazon.com/images/M/MV5BYTI2NzI3OTgtNjJmNS00Yjk3LTliMTMtZDA1MWM4MDA0N2QzXkEyXkFqcGc@._V1_.jpg",

    "https://m.media-amazon.com/images/M/MV5BNTkwNzJiYTctNzI3NC00NjE1LTlhYjktY2Q5MTdmMWFmNzcxXkEyXkFqcGc@._V1_.jpg",

    "https://m.media-amazon.com/images/M/MV5BNTFmZWI4YmMtNmQ0ZC00ZGQwLTk1OWEtZjAyZmIzOGY0MGFiXkEyXkFqcGc@._V1_.jpg",

    "https://m.media-amazon.com/images/M/MV5BYzg5MTVmNjgtMGQ3Zi00YThlLWFjMzgtYzc2NGUyMzE2MWQ1XkEyXkFqcGc@._V1_.jpg",

    "https://m.media-amazon.com/images/M/MV5BOTgxOWY5NTMtYjdiNi00NTIyLTkwMTQtMWNjM2IzYTU0ODgyXkEyXkFqcGc@._V1_.jpg",

    "https://m.media-amazon.com/images/M/MV5BNDAwNDljNWEtNWE1Zi00YjFlLWEzM2UtY2E3ZTM1MTcxMTcyXkEyXkFqcGc@._V1_.jpg",

    "https://m.media-amazon.com/images/M/MV5BZjFlMTMyZTAtY2NiZS00NzdjLWEwZTUtNDJjYjI4ZmU4NTBiXkEyXkFqcGc@._V1_.jpg",

    "https://m.media-amazon.com/images/M/MV5BNDBkMWRhMzEtM2M0Ny00OGZhLThkZGMtMTY1NWUwZWNhODdiXkEyXkFqcGc@._V1_.jpg",
  ];

  return (
    <div className="text-white">
      <div className="text-white flex flex-col gap-3">
        <h4 className="text-2xl">Trending Now</h4>

        <div className="flex gap-3 flex-wrap">
          {CardImages.slice(0, visibleCards).map((item, index) => {
            return (
              <div key={index} className="w-90 h-54">
                <img
                  src={item.url}
                  alt=""
                  className="object-cover w-full h-full rounded-md"
                />
              </div>
            );
          })}
        </div>

        {visibleCards < CardImages.length && (
          <button
            onClick={() => setVisibleCards(visibleCards + 4)}
            className="bg-red-600 px-4 py-2 rounded-lg w-fit font-[500] self-end mx-10"
          >
            Show More
          </button>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <h4 className="text-2xl">New on Netflix</h4>

        <div className="flex gap-3 flex-wrap">
          {CardImagesV.slice(0, cardss).map((item, index) => {
            return (
              <div key={index} className="w-60 h-80">
                <img
                  src={item}
                  alt=""
                  className="object-cover w-full h-full rounded-md"
                />
              </div>
            );
          })}
        </div>

        {cardss < CardImagesV.length && (
          <button
            onClick={() => setCardss(cardss + 6)}
            className="bg-red-600 px-4 py-2 rounded-lg w-fit font-[500] self-end mx-10"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Cards;
