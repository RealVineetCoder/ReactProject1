import React from "react";
import "../Css/Footer.css";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { PiTelevisionSimple } from "react-icons/pi";
import { GrNotes } from "react-icons/gr";
import { MdOutlineGroup } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className="flex">
      <div className="footer-box border mt-5">
        <h1 className="ml-5 text-xl font-bold mt-3">Contacts</h1>
        <div className="footer-search"></div>
        <div className="footer-component-box border m-5 ml-20">
          <div className="flex justify-between">
            <h1 className="flex flex-col">
              <p className="font-semibold mt-2 ml-2">Olive John</p>
              <span className="text-xs ml-2">Chief executive</span>
            </h1>
            <div className="flex m-2  items-center">
              <p className="mr-2">NPS</p>
              <button>6.6</button>
            </div>
          </div>
          <div className="flex justify-between m-2">
            <p>666-455-5678</p>
            <p>olivejohn@techsolace.com</p>
          </div>

          <div className="flex justify-between text-xs m-2">
            <p>Last seen 2 days ago</p>
            <p>New york, USA</p>
          </div>
        </div>
      </div>
      <div className="border ml-5 mt-5">
        <div>
          <h1 className="ml-5 text-xl font-bold mt-3">Engagement</h1>
          <div className="flex items-center justify-around ml-[200px]">
            <div className="flex flex-col justify-center items-center">
            </div>
            <div className="flex gap-10">
            </div>
          </div>
        </div>

        <div className="flex gap-20 mt-5 ml-5 font-[400]">
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
            <p>+422-345-4567</p>
            <p>01:30 - 01:40</p>
            <p>00:00:00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
