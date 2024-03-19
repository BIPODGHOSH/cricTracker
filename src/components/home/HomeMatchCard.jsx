import React, { useEffect, useState } from "react";
import { apiData } from "../../utils/apiData";
import { Link } from "react-router-dom";

const HomeMatchCard = ({ matches }) => {
  const { seriesMatches } = matches;
  const [teamImages, setTeamImages] = useState({});

  useEffect(() => {
    const fetchTeamImages = async (teamIds) => {
      try {
        const newTeamImages = {};
        for (const teamId of teamIds) {
          if (!teamImages[teamId]) {
            const imageData = await apiData(`img/v1/i1/c${teamId}/i.jpg`);
            newTeamImages[teamId] = imageData.url;
          }
        }
        setTeamImages((prevTeamImages) => ({
          ...prevTeamImages,
          ...newTeamImages,
        }));
      } catch (error) {
        console.error("Error fetching team images:", error);
      }
    };

    const teamIds = seriesMatches
      .filter((data) => data.seriesAdWrapper)
      .flatMap((data) => {
        const matches = data.seriesAdWrapper.matches || [];
        return matches.flatMap((match) => [
          match?.matchInfo?.team1?.imageId,
          match?.matchInfo?.team2?.imageId,
        ]);
      })
      .filter((imageId) => imageId !== undefined);

    if (teamIds.length > 0) {
      fetchTeamImages(teamIds);
    }
  }, [seriesMatches]);
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
              <Link key={i} to={`/match/${match.matchInfo?.matchId}`}>
                {/* {console.log(match)} */}
                <div className=" border-b-2 pr-10 md:pr-20">
                  {/* {console.log(match)} */}
                  <h5 className="">
                    {match.matchInfo?.matchDesc} .{" "}
                    {match.matchInfo?.venueInfo?.city}
                  </h5>
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <div className="flex gap-3 items-center">
                        <img
                          src={teamImages[match.matchInfo?.team1.imageId]}
                          className=" h-5 w-5"
                          alt={`${match.matchInfo?.team1.teamName} Logo`}
                        />
                        <h3 className="">{match.matchInfo?.team1.teamName}</h3>
                      </div>
                      <div className="flex gap-3 items-center">
                        <img
                          src={teamImages[match.matchInfo?.team2?.imageId]}
                          className=" h-5 w-5"
                          alt={`${match.matchInfo?.team2.teamName} Logo`}
                        />
                        <h3 className="">{match.matchInfo?.team2.teamName}</h3>
                      </div>
                    </div>
                    {match.matchScore && (
                      <div className="flex flex-col ">
                        {/* {console.log(match.matchScore.team1Score)} */}
                        <div className="flex">
                          <div className="flex">
                            <h4 className="">
                              {match.matchScore?.team1Score?.inngs1.runs}
                            </h4>
                            {match.matchScore?.team1Score?.inngs1?.wickets !==
                              10 && (
                              <h4 className="">
                                -{" "}
                                {match.matchScore?.team1Score?.inngs1?.wickets}
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
                                  {
                                    match.matchScore?.team1Score?.inngs2
                                      ?.wickets
                                  }
                                </h4>
                              )}
                            </div>
                          )}
                        </div>
                        <div className="flex">
                          {match.matchScore?.team2Score?.inngs1 && (
                            <div className="flex">
                              <h4 className="">
                                {match.matchScore?.team2Score?.inngs1?.runs}
                              </h4>
                              {match.matchScore?.team2Score?.inngs1?.wickets !==
                                10 && (
                                <h4 className="">
                                  -{" "}
                                  {
                                    match.matchScore?.team2Score?.inngs1
                                      ?.wickets
                                  }
                                </h4>
                              )}
                              {match.matchInfo?.matchFormat !== "TEST" && (
                                <h4 className="">
                                  ({match.matchScore?.team2Score?.inngs1?.overs}
                                  )
                                </h4>
                              )}
                            </div>
                          )}
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
                                  {
                                    match.matchScore?.team2Score?.inngs2
                                      ?.wickets
                                  }
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
              </Link>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default HomeMatchCard;
