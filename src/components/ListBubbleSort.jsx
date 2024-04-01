"use client";

import { useState } from 'react';
import ButtonPlay from "@/components/ButtonPlay";

export default function ListBubbleSort({ numbers }) {
  const [highlightedIndices, setHighlightedIndices] = useState([]); // indices de a comparar
  const [swappingIndices, setSwappingIndices] = useState([]); // indices a intercambiar
  const [sortedIndices, setSortedIndices] = useState([]); // indices ordenados

  const bubbleSort = async () => {
    for (let i = 0; i < numbers.length; i++) {
      let swapped = false;

      for (let j = 0; j < numbers.length - i - 1; j++) {
        setHighlightedIndices([j, j + 1]);

        await new Promise(resolve => setTimeout(resolve, 1000));

        if (numbers[j] > numbers[j + 1]) {
          // intercambiar los valores de los indices si la condicion se cumple
          const aux = numbers[j]
          numbers[j] = numbers[j + 1]
          numbers[j + 1] = aux;

          // setear los indices a intercambiar
          setSwappingIndices([j, j + 1]);
          await new Promise(resolve => setTimeout(resolve, 1000));
          setSwappingIndices([]);

          swapped = true;
        }
      }

      if (swapped === false) break;


      setSortedIndices(sortedIndices => [...sortedIndices, numbers.length - i - 1]);
    }

    setHighlightedIndices([]);
    setSortedIndices([...Array(numbers.length).keys()]);

    console.log("Lista ordenada");
  }

  return (
    <div className='flex flex-col items-center p-5'>
      <ButtonPlay play={bubbleSort} />
      <div className="flex justify-center items-center gap-2 m-5">
        {numbers.map((num, index) => (
          <div
            key={index}
            className={`py-4 px-8 border-2 rounded-lg font-bold text-xl transition-colors duration-300 ease-in-out ${highlightedIndices.includes(index)
              ? swappingIndices.includes(index)
                ? 'border-green-600'
                : index === Math.min(...highlightedIndices)
                  ? 'border-blue-600'
                  : 'border-red-600'
              : sortedIndices.includes(index)
                ? 'border-pink-600'
                : ''
              }`}
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  )
} 