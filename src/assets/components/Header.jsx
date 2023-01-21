import React from 'react'

import { MdMenu } from "react-icons/md";
import { AiFillCaretDown } from "react-icons/ai";
import { BiCalendarEvent } from "react-icons/bi";

export default function Header() {
  return (
    <header className="text-lg pt-3 text-white bg-black">
      <section className="flex justify-between items-center px-3">
        <div className="flex items-center">
          <MdMenu className="text-xl" />
          <h1 className="ml-7 font-bold">Fútbol</h1>
          <AiFillCaretDown className="ml-1 text-sm" />
        </div>
        <BiCalendarEvent className="text-xl" />
      </section>
      <nav className="flex justify-evenly text-sm pt-4">
        <button className="uppercase font-semibold text-gray-400 hover:text-white w-1/3 py-2 border-b-4 border-black hover:border-white">Ligas</button>
        <button className='uppercase font-semibold text-gray-400 hover:text-white w-1/3 py-2 border-b-4 border-black hover:border-white'>Eventos</button>
        <button className='uppercase font-semibold text-gray-400 hover:text-white w-1/3 py-2 border-b-4 border-black hover:border-white'>Favoritos</button>
      </nav>
    </header>
  );
}
