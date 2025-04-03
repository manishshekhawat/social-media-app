import React from "react";
import { Icon } from "@iconify/react";

const Navbar = () => {
  return (
    <>
      <div className="container text-white flex justify-between items-center h-full w-full p-5">
        <div>
          <h1 className="text-3xl">Instagram</h1>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-800 h-10 text-start p-2 rounded-lg m-5 w-70"
          />
          <Icon icon="mdi:heart-outline" width="30" height="30" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
