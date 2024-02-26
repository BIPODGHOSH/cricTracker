import React, { useState } from "react";
import { navTags } from "../utils/constants";
import { FaArrowLeft } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import Header from "./Header";
import NavItems from "./NavItems";
import Title from "./Title";

const Navbar = () => {
  const [isActive, setIsActive] = useState("LIVE");
  return (
    <div className=" cb-nav w-full flex flex-col fixed top-0 ">
      <Title />
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
      <NavItems
        navTags={navTags}
        setIsActive={setIsActive}
        isActive={isActive}
      />
      <Header />
    </div>
  );
};

export default Navbar;
