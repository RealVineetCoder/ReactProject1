import React from "react";
import { AiOutlineFieldTime } from "react-icons/ai";
import { MdOutlinePlayCircleOutline } from "react-icons/md";
import { BsJournals } from "react-icons/bs";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { PiTelevisionSimpleLight } from "react-icons/pi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex gap-20 ml-10 mt-5 font-semibold">
      <div className="flex items-center gap-1">
        <PiTelevisionSimpleLight />
      <Link to="/Overview">Overview</Link>
      </div>

      <div className="flex items-center gap-1">
        <TbDeviceDesktopAnalytics />
        <Link to="/Usage">Usage</Link>
      </div>

      <div className="flex items-center gap-1">
        <BsJournals />
        <Link to="/CustomerJourney">Customer Journey</Link>
      </div>

      <div className="flex items-center gap-1">
        <MdOutlinePlayCircleOutline />
        <Link to="/Plays">Plays</Link>
      </div>
      <div className="flex items-center gap-1">
        <AiOutlineFieldTime />
        <Link to="/TimeLine"> TimeLine</Link>
      </div>
    </div>
  );
};

export default Sidebar;
