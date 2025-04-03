import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Sidebar = () => {

  return (
    <div className="flex flex-col justify-center  h-screen w-full p-2">
      <Link to="#" className="flex items-center justify-center lg:justify-start gap-2 mt-4">
        <h1 className="hidden lg:block text-2xl ms-2">Instagram</h1>
        <Icon icon="basil:instagram-outline" width="30" height="30" className="block lg:hidden"/>
      </Link>

    
      <div className="flex flex-col items-center gap-2 w-full mt-8">
        <Link to="#" className="flex w-full  items-center justify-center lg:justify-start gap-4 p-2 hover:bg-gray-800">
          <Icon
            icon="material-symbols-light:home-rounded"
            width="30"
            height="30"
          />
          <p className="hidden lg:block text-lg">Home</p>
        </Link>
        <Link to="#" className="flex w-full items-center justify-center lg:justify-start gap-4 p-2 hover:bg-gray-800">
          <Icon
            icon="material-symbols-light:search-rounded"
            width="30"
            height="30"
          />
          <p className="hidden lg:block text-lg">Search</p>
        </Link>
        <Link to="#" className="flex w-full items-center justify-center lg:justify-start gap-4 p-2 hover:bg-gray-800">
          <Icon
            icon="material-symbols:explore-outline-rounded"
            width="30"
            height="25"
          />
          <p className="hidden lg:block text-lg">Explore</p>
        </Link>
        <Link to="#" className="flex w-full items-center justify-center lg:justify-start gap-4 p-2 hover:bg-gray-800">
          <Icon
            icon="hugeicons:play-list"
            width="30"
            height="25"
          />
          <p className="hidden lg:block text-lg">Reels</p>
        </Link>
        <Link to="#" className="flex w-full items-center justify-center lg:justify-start gap-4 p-2 hover:bg-gray-800">
          <Icon
           icon="ant-design:message-outlined"
            width="30"
            height="30"
          />
          <p className="hidden lg:block text-lg">Messages</p>
        </Link>
        <Link to="#" className="flex w-full items-center justify-center lg:justify-start gap-4 p-2 hover:bg-gray-800">
          <Icon
            icon="mdi:heart-outline"
            width="30"
            height="30"
          />
          <p className="hidden lg:block text-lg">Notifications</p>
        </Link>
        <Link to="#" className="flex w-full items-center justify-center lg:justify-start gap-4 p-2 hover:bg-gray-800">
          <Icon
           icon="mynaui:plus-square"
            width="30"
            height="30"
          />
          <p className="hidden lg:block text-lg">Create</p>
        </Link>
        <Link to="#" className="flex w-full items-center justify-center lg:justify-start gap-4 p-2 hover:bg-gray-800">
          <Icon
            icon="ix:user-profile-filled"
            width="30"
            height="30"
          />
          <p className="hidden lg:block text-lg">Profile</p>
        </Link>
        <Link to="#" className="flex w-full items-center justify-center lg:justify-start gap-4 p-2 hover:bg-gray-800">
          <Icon
            icon="material-symbols:menu"
            width="30"
            height="30"
          />
          <p className="hidden lg:block text-lg">More</p>
        </Link>
        
        
      </div>
    </div>
  );
};

export default Sidebar;
