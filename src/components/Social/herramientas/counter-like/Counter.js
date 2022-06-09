import "./Counter.css";
import Boton from "./containers/boton";
import Contador from "./containers/contador";
import { useState } from 'react'
import { useCounter } from '../../../../hooks/useCounter';

function Counter() {

  const { manejarClick, numClics } = useCounter(0)

  return (
    <div className="Counter">
      <div className="container-counter">
        <Boton
          texto="like"
          esBotonDeClick={true}
          manejarClick={() => manejarClick(1)}
          
        />
        <Boton
          texto="dislike"
          esBotonDeClick={true}
          manejarClick={() => manejarClick(-1)}
        />
        <Contador numClics={numClics} />
      </div>
    </div>
  );
}

export default Counter;
