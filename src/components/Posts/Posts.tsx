import React from "react";
import { Link } from "react-router-dom";
import "./posts.scss"

function Posts() {
  return (
    <div className="home">
      <div className="container">
        <Link to="/bonus/Thanks for watching">
          <div className="row align-items-center my-5">
            <div className="col-lg-7">
              <img
                className="img-fluid rounded mb-4 mb-lg-0"
                src="http://placehold.it/900x400"
                alt=""
              />
            </div>
            <div className="col-lg-5">
              <h1 className="subtitle">Click to see projects</h1>
              <p className="paragraph">
                Here you will find my first projects in html, css, & native
                javascript, also using libraries like bootstrap, tailwind and
                others.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Posts;
