import React from "react";

import Catagoray from "./Catagoray";
import { Link } from "react-router-dom";
import { RiFeedbackLine } from "react-icons/ri";
import Feedback from "./Catagoray/utlties/Feedback";
function Dashboard() {
  return (
    <>
      <section className=" text-white">
        <main
          className="text-center grid justify-center items-center "
          style={{
            height: "100vh",
          }}
        >
          <div className="grid gap-20">
            <h1 className="text-7xl font-semibold text-sm-w">
              LETS START QUIZE
            </h1>
            <Catagoray />
          </div>
        </main>
        <a
          href="https://maligaurav947.github.io/Portfolio/"
          target={"_blank"}
          className="absolute bottom-2 right-2 text-end text-black text-6xl font-semibold flex items-center justify-end gap-2 me"
        >
          <span>me</span>
        </a>
        <Link to="feedback" target={"_blank"}>
          <span className="text-5xl flex items-center absolute top-2 right-5 ">
            <RiFeedbackLine />
          </span>
        </Link>
      </section>
    </>
  );
}

export default Dashboard;
