import { useState } from 'react';

export const useCounter = (initialState = 0) => {
    const [numClics, setNumclics] = useState(initialState);

    const manejarClick = (numero = 1) => {
        console.log({numero})
        setNumclics(numClics + numero);
    }

    return {
        manejarClick,
        numClics
    }
}