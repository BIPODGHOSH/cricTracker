import React from "react";

const HomeMatchCard = ({ matches }) => {
  const { seriesMatches } = matches;
  console.log(seriesMatches);
  return (
    <>
      {seriesMatches?.map((data, i) => (
        <div className="w-full bg-white border" key={i}>
          <div className=" bg-green-200 px-3">
            <h1 className="">{data.seriesAdWrapper?.seriesName || ""}</h1>
          </div>
          <div className="px-3">
            {data.seriesAdWrapper?.matches?.map((match, i) => (
              <div className=" border-b-2 pr-10 md:pr-20" key={i}>
                {console.log(match)}
                <h5 className="">
                  {match.matchInfo?.matchDesc} .{" "}
                  {match.matchInfo?.venueInfo?.city}
                </h5>
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <div className="">
                      <img src="" alt="" />
                      <h3 className="">{match.matchInfo?.team1.teamName}</h3>
                    </div>
                    <div className="">
                      <img src="" alt="" />
                      <h3 className="">{match.matchInfo?.team2.teamName}</h3>
                    </div>
                  </div>
                  {match.matchScore && (
                    <div className="flex flex-col ">
                      {/* {console.log(match.matchScore.team1Score)} */}
                      <div className="flex">
                        <div className="flex">
                          <h4 className="">
                            {match.matchScore?.team1Score?.inngs1?.runs}
                          </h4>
                          {match.matchScore?.team1Score?.inngs1?.wickets !==
                            10 && (
                            <h4 className="">
                              - {match.matchScore?.team1Score?.inngs1?.wickets}
                            </h4>
                          )}
                          {match.matchInfo.matchFormat !== "TEST" && (
                            <h4 className="">
                              ({match.matchScore?.team1Score?.inngs1?.overs})
                            </h4>
                          )}
                        </div>
                        {match.matchScore?.team1Score?.inngs2 && (
                          <div className="flex">
                            {" & "}
                            <h4 className="">
                              {match.matchScore?.team1Score?.inngs2?.runs}
                            </h4>
                            {match.matchScore?.team1Score?.inngs2?.wickets !==
                              10 && (
                              <h4 className="">
                                <span>&nbsp; - </span>
                                {match.matchScore?.team1Score?.inngs2?.wickets}
                              </h4>
                            )}
                          </div>
                        )}
                      </div>
                      <div className="flex">
                        <div className="flex">
                          <h4 className="">
                            {match.matchScore?.team2Score?.inngs1?.runs}
                          </h4>
                          {match.matchScore?.team2Score?.inngs1?.wickets !==
                            10 && (
                            <h4 className="">
                              - {match.matchScore?.team2Score?.inngs1?.wickets}
                            </h4>
                          )}
                          {match.matchInfo?.matchFormat !== "TEST" && (
                            <h4 className="">
                              ({match.matchScore?.team2Score?.inngs1?.overs})
                            </h4>
                          )}
                        </div>
                        {match.matchScore?.team2Score?.inngs2 && (
                          <div className="flex">
                            {" & "}
                            <h4 className="">
                              {match.matchScore?.team2Score?.inngs2?.runs}
                            </h4>
                            {match.matchScore?.team2Score?.inngs2?.wickets !==
                              10 && (
                              <h4 className="">
                                -{" "}
                                {match.matchScore?.team2Score?.inngs2?.wickets}
                              </h4>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <h5 className=" text-red-400">{match.matchInfo.status}</h5>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default HomeMatchCard;
