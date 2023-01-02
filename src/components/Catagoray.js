import React from "react";
import { BsMusicNoteList, BsGeoAlt, BsController } from "react-icons/bs";
import { MdOutlineSportsCricket, MdLaptopWindows } from "react-icons/md";
import { SlCamrecorder } from "react-icons/sl";
function Catagoray() {
  return (
    <div className="grid items-center justify-center gap-5">
      <h3 className="text-3xl"> Choose The Catagoray</h3>
      <div className="grid gap-4 grid-cols-3 text-black">
        <div className="bg-white h-16 w-52 rounded-xl flex gap-2 items-center justify-center text-2xl">
          <BsMusicNoteList />
          Music
        </div>
        <div className="bg-white h-16 w-52 rounded-xl flex gap-2 items-center justify-center text-2xl">
          <SlCamrecorder />
          Bollywood
        </div>
        <div className="bg-white h-16 w-52 rounded-xl flex gap-2 items-center justify-center text-2xl">
          <MdLaptopWindows />
          Technology
        </div>
        <div className="bg-white h-16 w-52 rounded-xl flex gap-2 items-center justify-center text-2xl">
          <MdOutlineSportsCricket />
          Sport
        </div>
        <div className="bg-white h-16 w-52 rounded-xl flex gap-2 items-center justify-center text-2xl">
          <BsGeoAlt />
          Geography
        </div>
        <div className="bg-white h-16 w-52 rounded-xl flex gap-2 items-center justify-center text-2xl">
          <BsController />
          Gaming
        </div>
      </div>
    </div>
  );
}

export default Catagoray;
