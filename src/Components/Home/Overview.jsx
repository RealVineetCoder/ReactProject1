import React from "react";
import "../Css/Overview.css";
import DoughnutChart from "./DoughnutChart";
import { FaArrowDown } from "react-icons/fa6";
import { RiGroup3Line } from "react-icons/ri";
import { LiaTasksSolid } from "react-icons/lia";
import { MdPendingActions } from "react-icons/md";
import { FaBook } from "react-icons/fa";


const Overview = () => {
  return (
      <div className="flex mb-5 ">
        <div className="box border mt-10 ml-10">
          <h1 className="font-bold text-lg ml-5 mt-5">Quick Actions</h1>
          <div className="flex justify-between items-center">
            <div className="mt-10 ml-10">
              <div className="flex items-center gap-2 ">
                <RiGroup3Line  className="text-orange-400"/>
                <p className="">Today meetings</p>
              </div>

              <div className="flex items-center gap-2">
                <LiaTasksSolid  className="mt-3 text-blue-400" />
                <p className="mt-3">Task due</p>
              </div>
              <div className="flex items-center gap-2">
                <MdPendingActions  className="mt-3 text-purple-400"/>
                <p className="mt-3">Ticket due</p>
              </div>
              <div className="flex items-center gap-2">
                <FaBook  className="mt-3 text-red-400" />
                <p className="mt-3">Active Plays</p>
              </div>
            </div>
            <div className="mt-10 mr-10">
              <p className="circle-overview flex justify-center items-center mb-3">
                1
              </p>
              <p className="circle-overview flex justify-center items-center mt-3">
                3
              </p>
              <p className="circle-overview flex justify-center items-center mt-3">
                5
              </p>
              <p className="circle-overview flex justify-center items-center mt-3">
                3
              </p>
            </div>
          </div>
        </div>
        <div className="box border mt-10 ml-10">
          <h1 className="font-bold text-lg ml-5 mt-5">CTA's</h1>
          <div>
            <div className="flex m-3">
              <div className="flex  items-center">
                <p className="small-orange-box mr-1"></p>
                <p>Completed</p>
              </div>
              <div className="flex items-center ml-3">
                <p className="small-purple-box mr-1"></p>
                <p>In progress</p>
              </div>
            </div>
            <div className="flex ml-3 ">
              <div className="flex items-center">
                <p className="small-skyBlue-box mr-1"></p>
                <p>Overdue</p>
              </div>
              <div className="flex items-center px-4">
                <p className="small-red-box mr-1"></p>
                <p>Not started</p>
              </div>
            </div>
          </div>
          <div className="m-5 ml-7">
            <DoughnutChart />
          </div>
          <div></div>
        </div>
        <div className="box border mt-10 ml-10">
          <h1 className="font-bold text-lg ml-5 mt-5">Renewal Date</h1>
          <h1 className="renewal-css">15 Nov</h1>
          <div className="period-bar">
            <div className="period-progress"></div>
          </div>
          <p className="ml-[115px] mt-5 text-zinc-400">
            Your annual License expire in
          </p>
          <p className="ml-[180px] text-zinc-400">55 Days(s)</p>
        </div>
        <div className="box border mt-10 ml-10">
          <h1 className="font-bold text-lg ml-5 mt-5">Total User</h1>
          <div className="flex items-center ">
            <h1 className="renewal-css">125k</h1>
            <FaArrowDown className="ml-[15px] mt-[30px] text-red-400 text-xl" />
            <h1 className="pt-[32px] pl-[20px] text-2xl">2k</h1>
          </div>
          <p className="ml-[100px] mt-5 mt- text-zinc-400">
            Total Users added in the last 90 days
          </p>
          <p className="ml-[120px] text-zinc-400">
            (compared to previous period)
          </p>
        </div>
      </div>
      

    
  );
};

export default Overview;
