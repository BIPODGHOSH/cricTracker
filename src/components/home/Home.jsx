import React, { useEffect, useState } from "react";
import { homeNavTags, matchCategory } from "../../utils/constants";
import Title from "../Title";
import NavItems from "../NavItems";
import { apiData } from "../../utils/apiData";
import HomeMatchCard from "./HomeMatchCard";

const Home = () => {
  const [isActive, setIsActive] = useState("LIVE");
  const [category, setCategory] = useState("all");
  const [matches, setMatches] = useState(null);

  useEffect(() => {
    apiData(`matches/v1/${isActive.toLowerCase()}`).then((data) => {
      console.log(data);
      setMatches(data?.typeMatches);
    });
  }, [isActive]);
  const handleClick = (data) => {
    setCategory(data);
  };

  return (
    <div className="flex flex-col h-screen w-full bg-slate-300 relative ">
      <div className="cb-nav px-4 flex flex-col top-0 w-full relative">
        <Title />
        <h1 className="pl-2 md:pl-5 mt-3 text-white text-sm md:text-2xl font-bold">
          Current Matches
        </h1>
        <div className="flex mt-2">
          <NavItems
            navTags={homeNavTags}
            setIsActive={setIsActive}
            isActive={isActive}
          />
        </div>
      </div>
      <div className="bg-slate-300 relative   flex justify-between md:justify-center sm:gap-10 md:gap-5 w-full py-4 px-2">
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
      {matches &&
        matches.map((data, i) => (
          <div className="relative my-4" key={i}>
            <div className="p-3">
              <h1 className=" text-3xl">{data.matchType}</h1>
            </div>
            <HomeMatchCard matches={data} />
          </div>
        ))}
    </div>
  );
};

export default Home;
