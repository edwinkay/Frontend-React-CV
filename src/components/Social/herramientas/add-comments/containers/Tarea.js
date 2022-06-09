import React from "react";
import './style-tarea.css'
import { AiOutlineCloseCircle } from "react-icons/ai";
import Counter from "../../counter-like/Counter";

function Tarea ({id, texto, completada, completarTarea,eliminartarea}) {
    return (
      <div
        className={
          completada ? "tarea-contenedor2 completada2" : "tarea-contenedor2"
        }
      >
        <div className="tarea-texto2" onClick={() => completarTarea(id)}>
          {texto}
        </div>
        <div className='contenedor-likes'>
          <div className='likes'>
            <Counter />
          </div>
          <div
            className="tarea-contenedor-iconos eliminar"
            onClick={() => eliminartarea(id)}>
            <AiOutlineCloseCircle className="tarea-icono" />
          </div>
        </div>
      </div>
    );
}
export default Tarea;