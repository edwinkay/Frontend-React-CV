import React from "react";
import { Outlet } from "react-router-dom";
import "./blog.scss"

function Bonus() {
  return (
    <div className="box">
      <div className="container">
        <h1 className="titleBlog">Projects in Blog page</h1>
        <Outlet />
      </div>
    </div>
  );
}

export default Bonus;
