import React, { useEffect } from "react";
import { useParams } from "react-router";
import "./post.scss"

function Post() {
  let { postSlug } = useParams();

  useEffect(() => {
    // Fetch post using the postSlug
  }, [postSlug]);

  return (
    <div className="home">
      <div className="container">
        <h1 className="centerPost">my first projects</h1>
        <h6 className="centerTitle">Html; CSS, Javascript. {postSlug}</h6>

        <div className="box5">
          <div className="left5">
            <div className="content5">
              <div className="izquierdo">
                <iframe
                  src="https://edwinkay.github.io/IsPalindromo/"
                  className="width-vid1"
                ></iframe>
                <p className="rightParagraph">
                  Application that checks if it is a palindrome or not. <br />
                  <a href="https://edwinkay.github.io/IsPalindromo/">
                    click on the link to see it in full.
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="derecho">
            <div className="right5">
              <div className="content5">
                <iframe
                  src="https://carritodimi.netlify.app/"
                  className="width-vid2"
                ></iframe>
                <p className="rightParagraph">
                  Application that checks if it is a palindrome or not. <br />
                  <a href="https://edwinkay.github.io/IsPalindromo/">
                    click on the link to see it in full.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
