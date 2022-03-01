import React from "react";
import "./Landing.styles.scss";
import perfil from "../../assets/image/perfil.jpg";
import wsp from "../../assets/icons/icon phone.png";
import email from "../../assets/icons/icon email.png";
import location from "../../assets/icons/icon ubicacion.png";

function Home() {

  
  return (
    <div className="box">
      <div className="display">
        <div className="ajustarTitulo">
          <h1 className="name">EDWIN CUETIA</h1>
          <h3 className="post">FRONTEND DEVELOPER</h3>
        </div>
        <div className="positionImage">
          <img className="myImage" src={perfil} alt="" />
        </div>
        <div className="adjust">
          <div className="numero">
            <ul>
              <li className="numberStyle">
                <img className="iconos" src={wsp} alt="" />
              </li>
              <li className="number">+57 301 7757343</li>
            </ul>
          </div>

          <div className="numero">
            <ul>
              <li>
                <img className="iconos" src={email} alt="" />
              </li>
              <li className="number">edwinkaycut@gmail.com</li>
            </ul>
          </div>

          <div className="numero">
            <ul>
              <img className="iconos" src={location} alt="" />
              <li className="number">Corinto - Cauca</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="left">
          <div className="content">
            <h3>ABOUT ME</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              ipsum reiciendis iste voluptatum suscipit fuga vitae aut, eaque
              pariatur illum. Numquam, pariatur porro? Sapiente dolorem minus
              repellat, ullam suscipit mollitia?
            </p>
            <h3>WORK EXPERIENCE</h3>
            <ul>
              <li>2021</li>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Sapiente laborum aspernatur,
              </p>
            </ul>
            <ul>
              <li>2020</li>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Sapiente laborum aspernatur,
              </p>
            </ul>
            <ul>
              <li>2019</li>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Sapiente laborum aspernatur,
              </p>
            </ul>
            <h3>PROJECTS</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              maxime assumenda ratione similique ipsum facilis animi eaque,
              minima repellendus ducimus voluptatum quaerat cum minus nostrum
              error rerum molestias autem totam?
            </p>
          </div>
        </div>
        <div className="right">
          <div className="content">
            <h3>SKILL</h3>
            <p>Software Development:</p>
            <ul>
              <li>
                <b>Javascript:</b> ReactJS, VueJS, Angular, Express
              </li>
              <li>
                <b>Database:</b> MySql, PostgreSql, MongoDB
              </li>
              <li>
                <b>Web Development:</b> Html, Css, Sass, Stylus, Less
              </li>
              <li>
                <b>O.S:</b> MAC OSX, Linux, Windows
              </li>
            </ul>
            <h3>EDUCATION</h3>
            <ul>
              <li>2021</li>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Sapiente laborum aspernatur,
              </p>
            </ul>
            <ul>
              <li>2020</li>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Sapiente laborum aspernatur,
              </p>
            </ul>
            <ul>
              <li>2019</li>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Sapiente laborum aspernatur,
              </p>
            </ul>
            <h3>LANGUAGE</h3>

            <div className="box2">
              <div className="left2">
                <p>Spanish(native)</p>
                <div className="content2">
                  <div>
                    <div className="circular">
                      <div className="inner"></div>
                      <div className="outer"></div>
                      <div className="numb">100%</div>
                      <div className="circle">
                        <div className="dot">
                          <span></span>
                        </div>
                        <div className="bar left">
                          <div className="progress"></div>
                        </div>
                        <div className="bar right">
                          <div className="progress"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="littleBit">English</p>
              <div className="right2">
                <div className="content2">
                  <div>
                    <div className="circular2">
                      <div className="inner2"></div>
                      <div className="outer2"></div>
                      <div className="numb2">50%</div>
                      <div className="circle2">
                        <div className="dot2">
                          <span></span>
                        </div>
                        <div className="bar2 left2">
                          <div className="progress2"></div>
                        </div>
                        <div className="bar2 right2">
                          <div className="progress2"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;



