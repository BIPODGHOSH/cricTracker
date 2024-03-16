const Header = ({ scoreDetails }) => {
  return (
    <>
      {scoreDetails && (
        <div className="px-10 border py-6 bg-white">
          <div className=" bg-white w-full flex justify-between pb-5 ">
            <div className=" flex flex-col gap-4">
              <div className="flex gap-3">
                <h1 className="">
                  {
                    scoreDetails?.matchScoreDetails?.inningsScoreList[0]
                      ?.batTeamName
                  }
                </h1>
                {scoreDetails?.matchHeader?.matchFormat === "TEST" && (
                  <h6 className="">
                    {scoreDetails?.inningsId <= 2 ? "1st inn" : "2nd inn"}
                  </h6>
                )}
              </div>
              <div className="flex gap-3">
                <h1 className="">
                  {scoreDetails?.batTeam?.teamScore} -{" "}
                  <span>{scoreDetails?.batTeam?.teamWkts}</span>
                </h1>
                <h2 className="">({scoreDetails?.overs})</h2>
              </div>
            </div>

            <div className="flex justify-between w-24">
              <div className="flex flex-col">
                <h5 className="">CRR</h5>
                <h5 className="">{scoreDetails?.currentRunRate}</h5>
              </div>
              {scoreDetails?.requiredRunRate !== 0 && (
                <div className="flex flex-col">
                  <h5 className="">REQ</h5>
                  <h5 className="">{scoreDetails?.requiredRunRate}</h5>
                </div>
              )}
            </div>
          </div>
          <h5 className=" text-red-400">{scoreDetails?.status}</h5>
        </div>
      )}
    </>
  );
};
//
export default Header;
