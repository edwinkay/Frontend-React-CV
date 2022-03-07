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
      <div className="box3">
        <div className="left">
          <div className="content">
            <h3>ABOUT ME</h3>
            <p>
              I am an organized person who fulfills the tasks and requirements
              that are demanded of him. I have values ​​such as responsibility
              and teamwork. I want to participate in the selection of the right
              person for your organization, so I present to you my resume, and
              thus have the opportunity to offer my knowledge and experience in
              frontend development. As well as continue with my professional and
              personal improveme
            </p>
            <h3>WORK EXPERIENCE</h3>
            <ul>
              <li>2021</li>
              <p>
                {" "}
                <b>Freelance</b> cell phone computer repair technician.
              </p>
            </ul>
            <ul>
              <li>2018</li>
              <p>
                Operator in flexographic machines in <b>GILPA IMPRESORES.</b>{" "}
                monitoring the quality and tracking of prints.
              </p>
            </ul>
            <ul>
              <li>2017</li>
              <p>
                Graphic designer at <b>ESTUDIO DIGITAL</b> Adobe management
                (Acrobat, Photoshop, after effects, premiere and illustrator) &
                3d modeling in Sketchup,
              </p>
            </ul>
            <h3>PROJECTS</h3>
            <p>
              I have started my projects since 2019, among the most outstanding
              is this same page made in React, for more projects you can go to
              the projects section or see my repositories hosted on{" "}
              <a className="color" href="https://github.com/edwinkay">github.</a> 
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
                <b>Libraries:</b> Bootstrap, Tailwind, videoJs
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
              <li>2020</li>
              <p>
                Fullstack Javascript developer <b>PLATZI MASTERS</b> high
                performance program focused on enhancing skills for the
                technology sector
              </p>
            </ul>
            <ul>
              <li>2018</li>
              <p>
                <b>SENA:</b> Technician in systems & system architectures, with
                complementary Java and C++.
              </p>
            </ul>
            <ul>
              <li>2016</li>
              <p>
                <b>SENA:</b> Technician in construction and assembly in
                electrical networks with management of control drive and PLC.,
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



