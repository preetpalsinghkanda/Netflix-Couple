import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const ReadyToWatch = () => {
  return (
    <div className="my-16 w-full max-w-7xl mx-auto  text-white justify-center flex flex-col items-center">
       <h4 className='text-lg'>Ready to watch? Enter your email to create or restart your membership.</h4>
       <div className="my-4  flex items-center justify-center gap-3">
            <input
              className=" min-w-[600px] border px-4 rounded-sm bg-[#0F0F0F] py-3.5 text-xl font-[700] border-[#7d7c7c9f]"
              type="text"
              placeholder="Email address"
            />
            <button className="bg-[#E50914] flex items-center justify-center px-7 py-3.5 text-2xl cursor-pointer font-[700] rounded-lg">
              Get Started <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
    </div>
  )
}

export default ReadyToWatch