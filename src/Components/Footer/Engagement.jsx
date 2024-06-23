import React from "react";
import { CiSearch } from "react-icons/ci";
import { TfiReload } from "react-icons/tfi";
import { GoPlus } from "react-icons/go";
import { PiTelevisionSimple } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { GrNotes } from "react-icons/gr";
import { MdOutlineGroup } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { RiTimerLine } from "react-icons/ri";

const Engagement = () => {
  return (
    <div className="border ml-5 mt-5">
      <div>
        <h1 className="ml-5 text-xl font-bold mt-3">Engagement</h1>
        <div className="footer-search2"></div>
        <CiSearch className="search-icon2" />
        <div className="flex items-center gap-5 reload-icon">
          <TfiReload />
          <GoPlus className="plus-icon" />
        </div>
      </div>

      <div className="flex gap-20  ml-5 font-[400]">
        <div className="gap-css">
          <PiTelevisionSimple />
          <h1>All</h1>
        </div>
        <div className="gap-css">
          <MdOutlineEmail />
          <h1>Email</h1>
        </div>
        <div className="gap-css">
          <IoChatboxEllipsesOutline />
          <h1>Chat</h1>
        </div>
        <div className="gap-css">
          <FiPhone />
          <h1>Phone Calls</h1>
        </div>
        <div className="gap-css">
          <GrNotes />
          <h1>Notes</h1>
        </div>
        <div className="gap-css">
          <MdOutlineGroup />
          <h1>Meetings</h1>
        </div>
      </div>
      <div className="footer-sidebar-box border ml-20 mt-5">
        <div className="flex gap-1">
          <p>from</p>
          <h1 className="font-bold">Agent: John Doe</h1>
          <p>On Mar 04,2021 to</p>
          <h1 className="font-bold">Contact: Noian</h1>
        </div>
        <div className="flex font-semibold gap-2 ">
          <div className="gap-css">
            <FiPhone />
            <p>+422-345-4567</p>
          </div>
          <div className="gap-css">
            <IoTimeOutline />
            <p>01:30 - 01:40</p>
          </div>
          <div className="gap-css">
            <RiTimerLine />
            <p>00:00:00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Engagement;
