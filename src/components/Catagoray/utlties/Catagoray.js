import React, { useEffect } from "react";
import { BsMusicNoteList, BsGeoAlt, BsController } from "react-icons/bs";
import { MdOutlineSportsCricket, MdLaptopWindows } from "react-icons/md";
import { SlCamrecorder } from "react-icons/sl";
import { Link } from "react-router-dom";
function Catagoray() {
  return (
    <div className="grid items-center justify-center gap-5">
      <h3 className="text-3xl"> Choose The Catagoray</h3>
      <div className="grid gap-4 grid-cols-3 text-black catagoray-sec items-center justify-center ">
        <Link to="music">
          <div className=" h-16 w-52 rounded-xl flex gap-2 items-center justify-center text-2xl cat-container">
            <BsMusicNoteList />
            Music
          </div>
        </Link>
        <Link to="bollywood">
          <div className=" h-16 w-52 rounded-xl flex gap-2 items-center justify-center text-2xl cat-container">
            <SlCamrecorder />
            Bollywood
          </div>
        </Link>
        <Link to="technology">
          <div className="h-16 w-52 rounded-xl flex gap-2 items-center justify-center text-2xl cat-container">
            <MdLaptopWindows />
            Technology
          </div>
        </Link>
        <Link to="sport">
          <div className="h-16 w-52 rounded-xl flex gap-2 items-center justify-center text-2xl cat-container">
            <MdOutlineSportsCricket />
            Sport
          </div>
        </Link>
        <Link to="geography">
          <div className=" h-16 w-52 rounded-xl flex gap-2 items-center justify-center text-2xl cat-container">
            <BsGeoAlt />
            Geography
          </div>
        </Link>
        <Link to="gaming">
          <div className="h-16 w-52 rounded-xl flex gap-2 items-center justify-center text-2xl cat-container">
            <BsController />
            Gaming
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Catagoray;
