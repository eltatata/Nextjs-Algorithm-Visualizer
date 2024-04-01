import { CiPlay1 } from "react-icons/ci";

import React from 'react'

export default function ButtonPlay({ play }) {
  return (
    <span
      onClick={play}
      className="border rounded-lg py-2 px-4 text-2xl transition-colors duration-300 ease-in-out hover:text-blue-600 hover:border-blue-600 cursor-pointer"
    >
      <CiPlay1 />
    </span>
  )
}
