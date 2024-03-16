import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdRefresh } from "react-icons/md";
import { apiData } from "../utils/apiData";
import Navbar from "./Navbar";
import Commentaries from "./Commentaries";

const MatchDetails = () => {
  const { id } = useParams();
  const [scoreDetails, setScoreDetails] = useState();
  const [refresh, setRefresh] = useState(false);

  const [comm, setComm] = useState({ commentaryList: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiData(`mcenter/v1/${id}/comm`);
        setComm(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    apiData(`mcenter/v1/${id}/overs`).then((data) => {
      try {
        console.log(data);
        setScoreDetails(data);
      } catch (error) {
        console.error(error);
      }
    });
  }, [id, refresh]);

  useEffect(() => {}, [scoreDetails]);

  return (
    <>
      {!scoreDetails?.message ? (
        <div>
          <div className="">
            <Navbar scoreDetails={scoreDetails} />
          </div>
          {scoreDetails && (
            <div className=" mt-80 md:pt-4 ">
              <div className="flex justify-between items-center border-b-2 pb-4 px-8">
                {scoreDetails?.target && (
                  <h1 className="">Target - {scoreDetails?.target}</h1>
                )}
                {scoreDetails?.partnerShip?.runs && (
                  <h1 className="">
                    P'Ship - {scoreDetails?.partnerShip?.runs}(
                    {scoreDetails?.partnerShip?.balls})
                  </h1>
                )}
                <MdRefresh onClick={() => setRefresh(!refresh)} />
              </div>
              <div className="flex justify-between pl-8 border-b items-center py-2 bg-green-200">
                <div className=" w-2/4 pr-3">Batter</div>
                <div className="flex justify-between w-full items-center score-card-container">
                  <h1>R</h1>
                  <h1>B</h1>
                  <h1>4s</h1>
                  <h1>6s</h1>
                  <h1 className="">SR</h1>
                </div>
              </div>
              {scoreDetails?.batsmanStriker && (
                <div className="flex justify-between pl-8 border-b items-center py-2 ">
                  <div className=" w-2/4 pr-3">
                    {scoreDetails.batsmanStriker.batName}
                  </div>
                  <div className="flex justify-between w-full items-center score-card-container">
                    <h1>{scoreDetails.batsmanStriker.batRuns}</h1>
                    <h1>{scoreDetails.batsmanStriker.batBalls}</h1>
                    <h1>{scoreDetails.batsmanStriker.batFours}</h1>
                    <h1>{scoreDetails.batsmanStriker.batSixes}</h1>
                    <h1>{scoreDetails.batsmanStriker.batStrikeRate} </h1>
                  </div>
                </div>
              )}
              {scoreDetails?.batsmanNonStriker && (
                <div className="flex justify-between pl-8 border-b items-center py-2 ">
                  <div className=" w-2/4 pr-3">
                    {scoreDetails?.batsmanNonStriker.batName}
                  </div>
                  <div className="flex justify-between w-full items-center score-card-container">
                    <h1>{scoreDetails.batsmanNonStriker.batRuns}</h1>
                    <h1>{scoreDetails.batsmanNonStriker.batBalls}</h1>
                    <h1>{scoreDetails.batsmanNonStriker.batFours}</h1>
                    <h1>{scoreDetails.batsmanNonStriker.batSixes}</h1>
                    <h1>{scoreDetails.batsmanNonStriker.batStrikeRate} </h1>
                  </div>
                </div>
              )}
              <div className="flex justify-between pl-8 border-b items-center py-2 bg-green-200">
                <div className=" w-2/4 pr-3">Bowler</div>
                <div className="flex justify-between w-full items-center score-card-container">
                  <h1>O</h1>
                  <h1>M</h1>
                  <h1>R</h1>
                  <h1>W</h1>
                  <h1 className="">ER</h1>
                </div>
              </div>
              {scoreDetails?.bowlerStriker && (
                <div className="flex justify-between pl-8 border-b items-center py-2 ">
                  <div className=" w-2/4 pr-3">
                    {scoreDetails?.bowlerStriker.bowlName}
                  </div>
                  <div className="flex justify-between w-full items-center score-card-container">
                    <h1>{scoreDetails?.bowlerStriker.bowlOvs}</h1>
                    <h1>{scoreDetails?.bowlerStriker.bowlMaidens}</h1>
                    <h1>{scoreDetails?.bowlerStriker.bowlRuns}</h1>
                    <h1>{scoreDetails?.bowlerStriker.bowlWkts}</h1>
                    <h1>{scoreDetails?.bowlerStriker.bowlEcon}</h1>
                  </div>
                </div>
              )}
            </div>
          )}
          <Commentaries comm={comm} />
        </div>
      ) : (
        <div className="flex w-screen h-screen items-center justify-center">
          <h1 className="text-3xl px-5">{scoreDetails.message}</h1>
        </div>
      )}
    </>
  );
};

export default MatchDetails;
