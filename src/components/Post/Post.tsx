import React, { useEffect } from "react";
import { useParams } from "react-router";
import Calculadora from "../project-react/calculadora/calculadora";
import Things from "../project-react/things-to-do/things-to-do";
import "./post.scss"



function Post() {
  let { postSlug } = useParams();

  useEffect(() => {
    // Fetch post using the postSlug
  }, [postSlug]);

  return (
    <div className="home">
      <div className="container">
        <h1 className="centerPost">Projects in React</h1>
        <h6 className="centerTitle"> {postSlug}</h6>
        

        <div className='grid'>
          <div className='notas'>
            <Things />
          </div>
          <div>
            <Calculadora />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
