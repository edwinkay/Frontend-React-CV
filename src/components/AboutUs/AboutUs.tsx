import React from "react";
import img1 from "../../assets/image/Captura de Pantalla 2022-03-06 a la(s) 3.29.54 p. m..png"

function Projects() {
  return (
    <div className="box">
      <div className="box5">
        <div className="left5">
          <div className="content5">
            <div className="izquierdo">
              <iframe
                src="https://edwinkay.github.io/asi-somos-asi-bailamos/"
                className="width-vid1"
              ></iframe>
              <p className="rightParagraph">
                multimedia Web page with videos, photos and music and mobile
                version. <br />
                <a href="https://edwinkay.github.io/asi-somos-asi-bailamos/">
                  click on the link to see it in full.
                </a>
              </p>
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
                Web page that simulates an ice cream shopping cart.. <br />
                <a href="https://carritodimi.netlify.app/">
                  click on the link to see it in full.
                </a>
              </p>
              <iframe
                src="https://edwinkay.github.io/cotizaSeguro/"
                className="width-vid2"
              ></iframe>
              <p className="rightParagraph">
                Quote the insurance on a current date <br />
                <a href="https://edwinkay.github.io/cotizaSeguro/">
                  click on the link to see it in full.
                </a>
              </p>
              <img src={img1} alt="" className="width-vid2" />
              <p className="rightParagraph">
                website that quotes a weekly expense. <br />
                <a href="https://edwinkay.github.io/gastoSemanal/">
                  click on the link to see it in full.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
