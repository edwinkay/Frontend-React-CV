import React from "react";
import img1 from "../../assets/image/Captura de Pantalla 2022-03-06 a la(s) 3.29.54 p. m..png";
import './projects.scss'

function Projects() {
  return (
    <div className="container-projects">
      <div className="width-iframe">
        <iframe
          src="https://edwinkay.github.io/asi-somos-asi-bailamos/"
          className="width-vid1"
        ></iframe>
        <p className="rightParagraph">
          multimedia Web page with videos, photos and music and mobile version.{" "}
          <br />
          <a href="https://edwinkay.github.io/asi-somos-asi-bailamos/">
            click on the link to see it in full.
          </a>
        </p>
      </div>
      <div className="width-iframe">
        <iframe
          src="https://edwinkay.github.io/buscador/"
          className="width-vid1"
        ></iframe>
        <p className="rightParagraph">
          website search by date color and more. <br />
          <a href="https://edwinkay.github.io/buscador/">
            click on the link to see it in full.
          </a>
        </p>
      </div>
      <div className="width-iframe">
        <iframe
          src="https://edwinkay.github.io/sendEmail/"
          className="width-vid1"
        ></iframe>
        <p className="rightParagraph">
          Simulates sending a message
          <br />
          <a href="https://edwinkay.github.io/sendEmail/">
            click on the link to see it in full.
          </a>
        </p>
      </div>
      <div className="width-iframe">
        <iframe
          src="https://edwinkay.github.io/tweet/"
          className="width-vid1"
        ></iframe>
        <p className="rightParagraph">
          tweets saved in local storage
          <br />
          <a href="https://edwinkay.github.io/tweet/">
            click on the link to see it in full.
          </a>
        </p>
      </div>
      <div className="width-iframe">
        <iframe
          src="https://carritodimi.netlify.app/"
          className="width-vid1"
        ></iframe>
        <p className="rightParagraph">
          Web page that simulates an ice cream shopping cart.. <br />
          <a href="https://carritodimi.netlify.app/">
            click on the link to see it in full.
          </a>
        </p>
      </div>
      <div className="width-iframe">
        <iframe
          src="https://edwinkay.github.io/cotizaSeguro/"
          className="width-vid1"
        ></iframe>
        <p className="rightParagraph">
          Quote the insurance on a current date <br />
          <a href="https://edwinkay.github.io/cotizaSeguro/">
            click on the link to see it in full.
          </a>
        </p>
      </div>
    </div>
  );
}

export default Projects;
