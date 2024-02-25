import React, { useState } from "react";

const NavItems = ({ navTags }) => {
  const [isActive, setIsActive] = useState("LIVE");

  const handleClick = (data) => {
    setIsActive(data);
  };
  return (
    <div className="flex w-full sm:justify-start md:justify-around gap-20 text-white pb-5 px-10 overflow-x-auto">
      {navTags.map((data, i) => (
        <div className="" key={i} onClick={() => handleClick(data)}>
          <h2 className=" cursor-pointer text-lg">{data}</h2>
          {data === isActive && (
            <div className="w-full bg-white h-1 rounded-md"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default NavItems;
