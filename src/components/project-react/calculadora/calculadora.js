import './calculadora.css';
import Boton from './containers/boton'
import Clear from './containers/clear';
import Pantalla from './containers/display';
import { useState } from 'react'
import { evaluate } from 'mathjs'
import BotonIgual from './containers/BotonIgual';


function Calculadora() {

  const [input, setInput]  = useState('');

  const agregarInput = val => {
    setInput(input + val);
  }; 

  const operadores = (val) => {
    if (input) {
      setInput(input + val);
    } else {
      alert('La operacion es erronea, primero inserta un numero')
    }
  };

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert('Ingrese primero un valor')
    }
  };


  return (
    
      <div className="contenedor">
        <div className="titulo">
          <h1 className='titulo-calculadora'>Calculadora</h1>
        </div>
        <div className="contenedor-calculadora">
          <Pantalla input={input} maxLenght='2'/>
          <div className="fila">
            <Boton manejarClic={agregarInput}>1</Boton>
            <Boton manejarClic={agregarInput}>2</Boton>
            <Boton manejarClic={agregarInput}>3</Boton>
            <Boton manejarClic={operadores}>+</Boton>
          </div>
          <div className="fila">
            <Boton manejarClic={agregarInput}>4</Boton>
            <Boton manejarClic={agregarInput}>5</Boton>
            <Boton manejarClic={agregarInput}>6</Boton>
            <Boton manejarClic={operadores}>-</Boton>
          </div>
          <div className="fila">
            <Boton manejarClic={agregarInput}>7</Boton>
            <Boton manejarClic={agregarInput}>8</Boton>
            <Boton manejarClic={agregarInput}>9</Boton>
            <Boton manejarClic={operadores}>*</Boton>
          </div>
          <div className="fila">
            {/* <Boton manejarClic={calcularResultado}>=</Boton> */}
            <BotonIgual manejarClic={calcularResultado}>=</BotonIgual>
            <Boton manejarClic={agregarInput}>0</Boton>
            <Boton manejarClic={agregarInput}>.</Boton>
            <Boton manejarClic={operadores}>/</Boton>
          </div>
          <div className="fila">
            <Clear manejarClear={() => setInput('')}>Clear</Clear>
          </div>
        </div>
      </div>
    
  );
}

export default Calculadora;
