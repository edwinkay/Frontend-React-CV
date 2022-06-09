import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logos/logo.png";
import perfil from "../../assets/logos/foto.jpeg";
import miPerfil from "../../assets/logos/foto.jpeg";
import "./Social.scss";
import { BsBell } from "react-icons/bs";
import Gallery from "./React-gallery/Gallery";
import Comments from "./herramientas/add-comments/Comments";
import FriendList from "../FriendList/FriendList";


function Social() {
    return (
        <div className="contenedor-social">
            <div className="logo-container-social">
                <img className="logo-social" src={logo} alt="logo" />
            </div>
            <div>
                <nav className="fondo1">
                    <div className='disponibilidad'>
                        <p className="tiempo">Tiempo activo 0:00</p>
                        <div className="horario-oficina">
                            <ul className='social-ul'>
                                <li className='social-li'>Disponible
                                    <input type="checkbox" className='btn-switch' id='btn-switch' />
                                    <label className='lbl-switch' htmlFor="btn-switch" />
                                </li>
                                <li className='social-li'>No Disponible
                                    <input type="checkbox" className='btn-switch' id='btn-switch2' />
                                    <label className='lbl-switch' htmlFor="btn-switch2" /></li>
                                <li className='social-li'>Ausente
                                    <input type="checkbox" className='btn-switch' id='btn-switch3' />
                                    <label className='lbl-switch' htmlFor="btn-switch3" />
                                </li>
                                <li className="social-li space-season">
                                    <BsBell className="icon1" />
                                    <img className="perfil2" src={perfil} alt="perfil" />
                                    <p className="sesion">Cerrar Sesion</p>
                                </li>
                            </ul>

                        </div>
                    </div>
                    
                    
                </nav>
                <div className="fondo2">
                    <h1 className="titulo">Juntos lo hacemos mejor</h1>
                </div>
                <div className="tamaño-del-perfil">
                    <img className="miPerfil" src={miPerfil} alt="miPerfil" />
                    <h2 className="name-perfil">Cosme Fulanito</h2>
                    <h4 className="name-perfil">Asu/Co-Founder</h4>
                    <p className="name-perfil acerca">
                        Soy una persona apasionada por las ventas, tengo 10 años de
                        experiencia conociendo el mundo del comercio. Me gusta el liderazgo
                        y llevar a mi equipo a lograr los objetivos que nos pongan en el
                        camino. Lo que mas me gusta es viajar y compartir tiempo con mi
                        familia y amigos.
                    </p>
                </div>

                <div className="base-social">
                    <div className="contenedor-base">
                        <Comments />
                    </div>
                    <div className="contenedor-derecho">
                        <div className="seccion-fotos">
                            <h3 className="title-fotos">
                                {/* <NavLink className="nav-link-Fotos" to="/Photography">
                                    Fotos
                                </NavLink> */}
                            </h3>
                            <div >
                                <Gallery />
                            </div>
                            <button className="agregar">Añadir Fotos</button>
                        </div>
                        <div>
                            <FriendList />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='boton' >
                <input type="checkbox" className='btn-switch' id='btn-switch'/>
                <label className='lbl-switch' htmlFor="btn-switch"></label>
            </div> */}
            
        </div>
    );
}
export default Social;
