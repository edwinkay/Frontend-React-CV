import React from "react";
import { Link } from "react-router-dom";
import "./posts.scss"

function Posts() {
  return (
    <div className="home">
      <div className="container">
        <Link to="/react/Thanks for watching">
          <div className="row align-items-center my-5">
            <div className="col-lg-7"></div>
            <div className="col-lg-5">
              <h1 className="subtitle">Click to see projects</h1>
              <p className="paragraph">projects created only with React</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Posts;
