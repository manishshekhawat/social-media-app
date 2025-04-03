import React from "react";
import Sidebar from "../HomePage/Sidebar";
import Contentbar from "../HomePage/Contentbar";
import Suggestionbar from "../HomePage/Suggestionbar";

const HomePage = () => {
  return (
    <>
      <div className="container h-screen w-full bg-black">
        <div className="grid grid-cols-12 h-full w-full transition-all">
          <div className="hidden md:block md:col-span-2 bg-black text-white border-r border-gray-700 ">
            <Sidebar />
          </div>
          <div className="col-span-12 md:col-span-10 xl:col-span-7 bg-black">
            <Contentbar />
          </div>
          <div className="hidden xl:block xl:col-span-3 text-white bg-black">
            <Suggestionbar />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
