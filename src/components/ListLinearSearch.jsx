"use client";

import { useState } from 'react';
import ButtonPlay from "@/components/ButtonPlay";

export default function ListLinearSearch({ numbers }) {
  const [valueToFind, setValueToFind] = useState(null); // valor a encontrar
  const [index, setIndex] = useState(null); // indice actual
  const [indexFound, setIndexFound] = useState(null); // indice del valor encontrado

  const linearSearch = async () => {
    const value = numbers[Math.floor(Math.random() * numbers.length)];
    setValueToFind(value);
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIndexFound(null); // restablecer el valor encontrado

    for (let i = 0; i < numbers.length; i++) {
      setIndex(i);

      if (numbers[i] === value) {
        setIndexFound(i);
        return; // detener la búsqueda si se encuentra el valor
      }

      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    setIndexFound(null); // restablecer el índice encontrado si no se encontró
    setValueToFind(null); // restablecer el valor a encontrar
  };

  return (
    <div className='flex flex-col items-center p-5'>
      <ButtonPlay play={linearSearch} />
      <span className={`mt-10 ${valueToFind ? "block" : "hidden"}`}>
        <p className="font-bold text-xl">Value to find: {valueToFind}</p>
      </span>
      <div className="flex justify-center items-center gap-2 m-5">
        {numbers.map((num, i) => (
          <div
            key={i}
            className={`py-4 px-8 border-2 rounded-lg font-bold text-xl transition-colors duration-300 ease-in-out 
            ${index === i ? "border-blue-600" : ""} ${indexFound === i ? "border-green-600" : ""}`}
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  )
}