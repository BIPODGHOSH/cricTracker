import { useState, useEffect } from "react";
import { apiData } from "../utils/apiData";

const Header = () => {
  useEffect(() => {}, []);
  return (
    <div className="px-10 border py-6 bg-white">
      <div className=" bg-white w-full flex justify-between pb-5 ">
        <div className=" flex flex-col gap-4">
          <div className="flex gap-3">
            <h1 className="">IND</h1>
            <h6 className="">1st inn</h6>
          </div>
          <div className="flex gap-3">
            <h1 className="">74-1</h1>
            <h2 className="">(21.3)</h2>
          </div>
        </div>
        <div className="flex flex-col">
          <h5 className="">CRR</h5>
          <h5 className="">3.59</h5>
        </div>
      </div>
      <h5 className=" text-red-400">
        Day 2: 3rd Session - India trail by 136 runs
      </h5>
    </div>
  );
};

export default Header;
