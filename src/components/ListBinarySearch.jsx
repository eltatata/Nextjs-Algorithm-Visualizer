"use client";

import { useState } from 'react';
import ButtonPlay from "@/components/ButtonPlay";

export default function ListBinarySearch({ numbers }) {
  const [valueToFind, setValueToFind] = useState(null);
  const [extremeIndices, setExtremeIndices] = useState([]);
  const [midIndex, setMidIndex] = useState(null);

  const binarySearch = async () => {
    const value = numbers[Math.floor(Math.random() * numbers.length)];
    setValueToFind(value);
    await new Promise(resolve => setTimeout(resolve, 1000));

    setMidIndex(null); // restablecer el valor encontrado

    let left = 0;
    let right = numbers.length - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      setExtremeIndices([left, right]);
      await new Promise(resolve => setTimeout(resolve, 1000));

      setMidIndex(mid);
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (numbers[mid] == value) {
        setExtremeIndices([]);
        console.log(`Elemento ${value} esta en la posicion ${mid}`)
        break;
      } else if (numbers[mid] < value) {
        left = mid + 1
      } else {
        right = mid - 1
      }

      setMidIndex(null);
      setExtremeIndices([]);
    }
  }

  return (
    <div className='flex flex-col items-center p-5'>
      <ButtonPlay play={binarySearch} />
      <span className={`mt-10 ${valueToFind ? "block" : "hidden"}`}>
        <p className="font-bold text-xl">Value to find: {valueToFind}</p>
      </span>
      <div className="flex justify-center items-center gap-2 m-5">
        {numbers.map((num, index) => (
          <div
            key={index}
            className={`py-4 px-8 border-2 rounded-lg font-bold text-xl transition-colors duration-300 ease-in-out ${midIndex === index
              ? 'border-green-600'
              : extremeIndices.includes(index)
                ? 'border-pink-600'
                : ''
              }`}
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
}