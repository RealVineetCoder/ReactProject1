import React from "react";
import "../Css/Navbar.css";
import NavComponent from "./NavComponent";

const Navbar = () => {
 
  return (
    <>
      <div className="flex justify-between h-15 items-center border mt-1">
        <div className="flex items-center gap-4  ml-10">
          <div className="header-circle"></div>
          <h1 className="font-semibold text-xl">Global SpaceX</h1>
          <button className="px-2 py-1 bg-orange-600 text-white text-xs">
            Chumed
          </button>
          <button className="px-2 py-1 bg-zinc-300 text-xs">
            New Customer <span className="px-2">X</span>
          </button>
          <button className="px-2 py-1 bg-zinc-300 text-xs">
            important <span className="px-2">X</span>
          </button>
          <h3 className="text-xs">+ Tag</h3>
        </div>

        <div className="flex items-center gap-4 mr-10">
          <h1 className="flex gap-2">
            Status <button className="button-css"></button>
          </h1>
          <h1 className="text-sm">
            Cloud Service <span className="px-2">X</span>
          </h1>
          <h1 className="text-sm">CSM</h1>
          <h1 className="text-sm font-bold">Arjun</h1>
          <p className="font-semibold text-3xl pb-4">...</p>
        </div>
      </div>

      
      <NavComponent  />;
    
    </>
  );
};

export default Navbar;
