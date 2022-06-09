import React, { useState } from "react";

import Formulario from './formulario'
import Tarea from './Tarea'
import './list-comment.css'


function ListComments() {

    const [tareas, setTareas] = useState ([]);
    
    const agregarTarea = tarea => {
        // console.log('tarea agregada');
        // console.log(tarea);
        if (tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim();
            const tareaActualizadas = [tarea, ...tareas];
            setTareas(tareaActualizadas)
        }
    }
    const eliminartarea = id => {
        const tareaActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareaActualizadas);
    }

    const completarTarea = id => {
      const tareaActualizadas = tareas.map(tarea => {
        if (tarea.id === id) {
          tarea.completada = !tarea.completada;
        }
        return tarea;
      });
      setTareas(tareaActualizadas);
    }

    return (
      <>
        <Formulario onSubmit={agregarTarea}/>
        <div className="tarea-lista-contenedor">
          {tareas.map((tarea) => (
            <Tarea 
            key={tarea.id}
            id={tarea.id}
             texto={tarea.texto}
             completada={tarea.completada}
             completarTarea={completarTarea}
             eliminartarea={eliminartarea}
           />
          ))}
        </div>
      </>
    );
}

export default ListComments;