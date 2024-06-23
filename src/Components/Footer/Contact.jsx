import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { FiPhone } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";

const Contact = () => {
  return (
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
            <div className="gap-css">
              <FiPhone />
              <p>666-455-5678</p>
            </div>
            <div className="gap-css">
              <MdOutlineEmail />

              <p>olivejohn@techsolace.com</p>
            </div>
          </div>

          <div className="flex justify-between text-xs m-2">
            <p>Last seen 2 days ago</p>
            <div className="gap-css">
              <CiLocationOn />
              <p>New york, USA</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Contact