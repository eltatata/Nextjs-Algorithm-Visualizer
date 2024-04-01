"use client"

import { CiPlay1 } from "react-icons/ci";
import { useEffect, useState } from 'react';
import { Result } from "postcss";

export default function QuickSortPage() {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    const generatedNumbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));
    setNumbers(generatedNumbers);
  }, []);

  const clickPlay = async () => {
    let arrayNumbers = [...numbers];
    console.log(arrayNumbers);

    function quickSort(array) {
      if (array.length <= 1) {
        return array;
      }

      const pivot = array[0];

      const left = [];
      const right = [];

      for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
          left.push(array[i]);
        } else {
          right.push(array[i]);
        }
      }

      console.log(left, right);
      console.log(pivot);

      return quickSort(left).concat(pivot, quickSort(right));
    }

    const result = quickSort(arrayNumbers);
    console.log(result);
  }

  return (
    <div className='flex flex-col justify-center items-center gap-4 h-screen w-screen'>
      <h1 className="text-3xl font-bold">Quick Sort</h1>
      <span
        onClick={clickPlay}
        className="border rounded-lg py-2 px-4 text-2xl transition-colors duration-300 ease-in-out hover:text-blue-600 hover:border-blue-600 cursor-pointer">
        <CiPlay1 />
      </span>
      <div className="flex justify-center items-center gap-2 m-10">
        {numbers.map((num, index) => (
          <div
            key={index}
            className={`py-4 px-8 border-2 rounded-lg font-bold text-xl`}
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  )
}
