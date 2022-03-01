import React from "react";
import { Outlet } from "react-router-dom";

function Bonus() {
  return (
    <div className="box">
      <div className="container">
        <h1 className="text-center mt-5">Blog page</h1>
        <Outlet />
      </div>
    </div>
  );
}

export default Bonus;
