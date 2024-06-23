import React from "react";
import "../Css/Footer.css";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { PiTelevisionSimple } from "react-icons/pi";
import { GrNotes } from "react-icons/gr";
import { MdOutlineGroup } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { TfiReload } from "react-icons/tfi";
import { FiPhone } from "react-icons/fi";
import { RiTimerLine } from "react-icons/ri";
import { IoTimeOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="flex">
      <div className="footer-box border mt-5">
        <h1 className="ml-5 text-xl font-bold mt-3">Contacts</h1>
        <div className="footer-search"></div>
        <CiSearch className="search-icon" />
        <div className="flex items-center gap-5 filter-icon">
          <CiFilter />
          <GoPlus />
        </div>
        <div className="footer-component-box border m-5 ml-20">
          <div className="flex justify-between">
            <h1 className="flex flex-col">
              <p className="font-semibold mt-2 ml-2">Olive John</p>
              <span className="text-xs ml-2">Chief executive</span>
            </h1>
            <div className="flex mt-2 mr-2 mb-2  items-center gap-3">
              <p className="mr-2">NPS</p>
              <button className="px-1 py-1 bg-orange-600 text-white text-xs">
                6.6
              </button>
              <FaRegEdit />
              <MdOutlineDelete />
            </div>
          </div>
          <div className="flex justify-between m-2">
            <div className="flex items-center gap-1">
              <FiPhone />
              <p>666-455-5678</p>
            </div>
            <div className="flex items-center gap-1">
              <MdOutlineEmail />

              <p>olivejohn@techsolace.com</p>
            </div>
          </div>

          <div className="flex justify-between text-xs m-2">
            <p>Last seen 2 days ago</p>
            <div className="flex items-center gap-1">
              <CiLocationOn />
              <p>New york, USA</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border ml-5 mt-5">
        <div>
          <h1 className="ml-5 text-xl font-bold mt-3">Engagement</h1>
          <div className="footer-search2"></div>
          <CiSearch className="search-icon2" />
          <div className="flex items-center gap-5 reload-icon">
            <TfiReload />
            <GoPlus className="plus-icon"/>
          </div>
        </div>

        <div className="flex gap-20  ml-5 font-[400]">
          <div className="flex items-center gap-1">
            <PiTelevisionSimple />
            <h1>All</h1>
          </div>
          <div className="flex items-center gap-1">
            <MdOutlineEmail />
            <h1>Email</h1>
          </div>
          <div className="flex items-center gap-1">
            <IoChatboxEllipsesOutline />
            <h1>Chat</h1>
          </div>
          <div className="flex items-center gap-1">
            <FaPhone />
            <h1>Phone Calls</h1>
          </div>
          <div className="flex items-center gap-1">
            <GrNotes />
            <h1>Notes</h1>
          </div>
          <div className="flex items-center gap-1">
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
            <div className="flex items-center gap-1">
              <FiPhone />
              <p>+422-345-4567</p>
            </div>
            <div className="flex items-center gap-1">
              <IoTimeOutline />
              <p>01:30 - 01:40</p>
            </div>
            <div className="flex items-center gap-1">
              <RiTimerLine />
              <p>00:00:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
