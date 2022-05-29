import "../things-to-do/things.scss";
import React from "react";
import Listadetareas from "../things-to-do/containers/listaDeTareas";

function Things() {
  return (
    <div>
      <div>
        <div className="contenedor">
          <div className="titulo">
            <h1 className='titulo-notas'>To do List</h1>
          </div>
          <div className="tareas-lista-principal">
            <Listadetareas />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Things;
