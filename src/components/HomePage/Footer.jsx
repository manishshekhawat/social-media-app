import React from "react";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <div className="flex justify-around items-center text-white h-12 p-5">
      <Icon icon="material-symbols-light:home-rounded" width="35" height="35" />
      <Icon icon="material-symbols:explore-outline-rounded" width="35" height="30" className="hidden sm:block"/>
      <Icon icon="hugeicons:play-list" width="35" height="30" />
      <Icon icon="mynaui:plus-square" width="35" height="30" />
      <Icon icon="ant-design:message-outlined" width="35" height="30" className="hidden sm:block"/>
      <Icon icon="material-symbols-light:search-rounded" width="30" height="30" className="md:hidden" />
      <Icon icon="ix:user-profile-filled" width="35" height="30" />
    </div>
  );
};

export default Footer;
