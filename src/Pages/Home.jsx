import React from "react";
import LeftBar from "../Components/LeftBar";
import RightBar from "../Components/RightBar";
import Feed from "../Components/Feed";

import Videopost from "../Components/Videopost";

const Home = () => {
  return (
    <div className="flex dark:bg-slate-700">
      <LeftBar />
      <div className="flex">
        <div className="flex flex-col mt-24">
          <Videopost />
          <Feed />
        </div>
        <RightBar />
      </div>
    </div>
  );
};

export default Home;
