import React from "react";

import Catagoray from "./Catagoray";
function Dashboard() {
  return (
    <>
      <section
        className=" text-white"
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "#3f4c76",
        }}
      >
        <main
          className="text-center grid justify-center items-center"
          style={{
            height: "100vh",
          }}
        >
          <div className="grid gap-20">
            <h1 className="text-7xl font-semibold">LETS START QUIZE</h1>
            <Catagoray />
          </div>
        </main>
      </section>
    </>
  );
}

export default Dashboard;
