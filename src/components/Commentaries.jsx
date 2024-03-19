import React, { useEffect, useState } from "react";
import { apiData } from "../utils/apiData";

const Commentaries = ({ comm }) => {
  // console.log(commentaryList);
  const { commentaryList } = comm;

  // Function to replace text based on pattern
  const replaceText = (text, formatValue) => {
    let modifiedText = text;
    const pattern = /B(\d)\$/g;
    const matches = text.match(pattern);

    if (matches) {
      matches.forEach((match) => {
        const index = parseInt(match[1]);
        modifiedText = modifiedText.replace(match, formatValue[index] || "");
      });
    }

    return modifiedText;
  };

  return (
    <div className="p-5 pt-3 w-full mt-5">
      {commentaryList &&
        commentaryList.map((com, i) => (
          <div className="flex  w-full pl-4 items-center mt-5 " key={i}>
            {com?.overNumber && (
              <div className="flex flex-col place-items-start w-20">
                <p className="">{com?.overNumber}</p>
                {com.event !== "NONE" && (
                  <div className="bg-red flex items-center justify-center p-0">
                    {com?.event.includes("WICKET") ? (
                      <p className="rounded-full bg-red-500 w-6 h-6 flex items-center justify-center text-white">
                        W
                      </p>
                    ) : com?.event.includes("SIX") ? (
                      <p className="rounded-full bg-green-500 w-6 h-6 flex items-center justify-center text-white">
                        6
                      </p>
                    ) : com?.event.includes("FOUR") ? (
                      <p className="rounded-full bg-blue-500 w-6 h-6 flex items-center justify-center text-white">
                        4
                      </p>
                    ) : (
                      <p>{com?.event}</p>
                    )}
                  </div>
                )}
              </div>
            )}
            <div className=" w-full">
              <p>
                {replaceText(
                  com?.commText,
                  com?.commentaryFormats?.bold?.formatValue
                )}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Commentaries;
