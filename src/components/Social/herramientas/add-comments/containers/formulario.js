import React, { useState} from "react";
import './formulario.css'
import { v4 as uuidv4 } from "uuid";

function Formulario (props){

    const [input, setInput] = useState('');


    const manejarCambio = e => {
        //  console.log('escribiendo...')

        setInput(e.target.value)
        console.log(e.target.value)
    }

    const manejarEnvio = e => {
        e.preventDefault();
        // console.log('enviando...')
        

        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }
       props.onSubmit(tareaNueva);
    }
    return(
        <form className='tarea-formulario'
        onSubmit={manejarEnvio}>
            <input
            className='tarea-input'
            type='text'
            placeholder='escribe un comentario...'
            name='texto'
            onChange={manejarCambio}/>
            <button className='tarea-boton'>
                Comentar
            </button>
        </form>
    )
}
export default Formulario;