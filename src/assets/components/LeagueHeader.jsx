import React from 'react'

import { BsFillPinFill } from "react-icons/bs";
import { AiFillCaretRight } from "react-icons/ai";

export default function LeagueHeader({ symbol, country, name }) {
  return (
    <header className="flex justify-between items-center text-white bg-black py-1">
      <picture className="w-20 flex justify-center">
        <img src={symbol} className="w-6" />
      </picture>
      <div className="flex flex-col text-sm font-semibold w-full">
        <div className="flex items-center gap-1">
          <span>{country}</span>
          <AiFillCaretRight className="text-gray-500 text-xs" />
          <span className="text-gray-500">{name}</span>
        </div>
        <span className="text-green-500 font-normal">
          Valoraciones de Sofascore
        </span>
      </div>
      <div className='flex justify-center w-20'>
        <BsFillPinFill className="text-2xl text-sky-600" />
      </div>
    </header>
  );
}
