import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faTv,
  faClapperboard,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faHouse, faCalendarDays } from "@fortawesome/free-regular-svg-icons";

const HomeSideNavBar = () => {
  const homeIcons = [
    {
      iconName: faMagnifyingGlass,
    },
    {
      iconName: faHouse,
    },
    {
      iconName: faCalendarDays,
    },
    {
      iconName: faTv,
    },
    {
      iconName: faClapperboard,
    },
    {
      iconName: faPlus,
    },
  ];

  return (
    <div className="h-screen bg-black w-30 flex flex-col text-3xl gap-12 items-center justify-center">
      {homeIcons.map((item) => {
        return (
          <div className=" border-red-700 inline-block pb-2 ">
            <FontAwesomeIcon
              icon={item.iconName}
              className="text-white text-2xl"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
