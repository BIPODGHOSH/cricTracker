import React, { useState } from "react";
import { navTags } from "../utils/constants";
import { FaArrowLeft } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

const Navbar = () => {
  const [isActive, setIsActive] = useState("LIVE");

  const handleClick = (data) => {
    setIsActive(data);
  };
  return (
    <div className=" cb-nav w-screen flex flex-col fixed top-0 ">
      <div className="m-auto cursor-none">
        <h1 className="text-white text-2xl md:text-3xl lg:text-5xl font-semibold md:font-bold lg:font-extrabold">
          CricTracker
        </h1>
      </div>
      <div className=" w-full h-full flex justify-between py-2 top-0">
        <div className="flex gap-10 items-center px-5 md:px-20 text-white font-bold">
          <FaArrowLeft size={"25px"} className="cursor-pointer" />
          <h2 className=" text-xl md:text-2xl lg:text-3xl cursor-pointer min-w-28">
            Ind vs Eng
          </h2>
        </div>

        <div className="flex gap-10 items-center px-5 md:px-20 text-white font-bold">
          <FaCaretDown size={"25px"} className="cursor-pointer" />
          <BsThreeDotsVertical size={"25px"} className="cursor-pointer" />
        </div>
      </div>
      <div className="flex w-full justify-around gap-20 text-white pb-5 px-10 overflow-x-auto">
        {navTags.map((data, i) => (
          <div className="" key={i} onClick={() => handleClick(data)}>
            <h2 className=" cursor-pointer text-lg">{data}</h2>
            {data === isActive && (
              <div className="w-full bg-white h-1 rounded-md"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
