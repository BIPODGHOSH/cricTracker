import React, { useState } from "react";
import { homeNavTags, matchCategory } from "../../utils/constants";
import Title from "../Title";
import NavItems from "../NavItems";

const Home = () => {
  const [category, setCategory] = useState("All");
  const handleClick = (data) => {
    setCategory(data);
  };
  return (
    <div className="flex h-screen w-screen bg-slate-300">
      <div className="cb-nav px-4 flex flex-col fixed top-0 w-full ">
        <Title />
        <h1 className="pl-5 mt-3 text-white text-2xl font-bold">
          Current Matches
        </h1>
        <div className="flex mt-2">
          <NavItems navTags={homeNavTags} />
        </div>
      </div>
      <div className="bg-slate-300 fixed top-[150px]  flex justify-between md:justify-center sm:gap-10 md:gap-5 w-full py-4 px-2">
        {matchCategory.map((data, i) => (
          <div
            className={`${
              category === data ? "cb-nav text-white" : "bg-white"
            } rounded-lg  px-1 md:px-5 py-2 cursor-pointer`}
            key={i}
            onClick={() => handleClick(data)}
          >
            {data}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
