import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faTv,
  faClapperboard,
  faPlus,
  faArrowDown,
  faBars,
   faPictureInPicture,
} from "@fortawesome/free-solid-svg-icons";

import {
  faHouse,
  faCalendarDays,
 
} from "@fortawesome/free-regular-svg-icons";

const HomeSideNavBar = () => {
  const homeIcons = [
    {
      iconName: faMagnifyingGlass,
     
    },
    {
      iconName: faHouse,
       active : "border-b-4 border-red-700 ",
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

  const homeIconsPhone = [
    {
      name : "Home",
      iconName: faHouse,
    },
    {
      name : "Search",
      iconName: faMagnifyingGlass,
    },

    {
      name  : "Coming Soon",
      iconName : faPictureInPicture,
    },

    {
      name : "Downloads",
      iconName : faArrowDown,
    },

    {
      name : "Menu",
      iconName : faBars ,
    }
    
   
  ]

  return (
    <div className="lg:h-screen h-fit fixed bottom-0 lg:top-0 lg:left-0 w-full lg:z-49 z-[1000] bg-black lg:w-26 lg:flex-col lg:flex text-3xl place-items-center lg:gap-14 grid md:grid-cols-6 grid-cols-5 gap-6 py-3 rounded-t-4xl lg:rounded-none items-center lg:justify-center">
      {homeIcons.map((item) => {
        return (
          <div className=" border-red-700 md:justify-center md:items-center my-4 md:flex  hidden ">
            <FontAwesomeIcon
              icon={item.iconName}
              className={`text-white text-2xl ${item.active}  `}
            />
            
          </div>
        );
      })}

      {homeIconsPhone.map((item) => {
        return (
          <div className=" border-red-700 flex flex-col gap-2 items-center my-2  lg:hidden md:hidden text-white">
            <FontAwesomeIcon
              icon={item.iconName}
              className="text-white text-xl"
            />
            <h6 className="text-[12px] text-nowrap">{item.name}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default HomeSideNavBar;
