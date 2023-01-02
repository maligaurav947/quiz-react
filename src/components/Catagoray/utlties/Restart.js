import React from "react";
import { IoHomeOutline } from "react-icons/io5";
function Restart() {
  return (
    <a href="#">
      <span className="text-2xl flex items-center text-white gap-2 absolute top-1 left-1">
        <IoHomeOutline />
        Restart
      </span>
    </a>
  );
}

export default Restart;
