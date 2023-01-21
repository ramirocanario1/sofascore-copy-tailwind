import React from 'react'

import { FiRepeat } from "react-icons/fi";

export default function Buzzer({type, img1, img2, img3, text1, text2}) {

  function getBuzzer(type) {
    if (type === "match") {
      return (
        <>
          <div className="flex justify-evenly w-full">
            <img src={img1} className="w-8" />
            <img src={img2} className="w-8" />
          </div>
          <div className="flex flex-col items-center leading-none">
            <span className="text-xs">{text1}</span>
            <span className="font-semibold">{text2}</span>
          </div>
        </>
      );
    }

    if (type === 'transfer') {
      return (
        <>
          <div className="flex justify-between w-full items-center rounded-full bg-gradient-to-r from-gray-400 to-black">
            <img src={img1} className="w-10 rounded-full" />
            <div className='flex flex-col'>
              <img src={img2} className="w-4 h-4" />
              <img src={img3} className="w-4 h-4" />
            </div>
            <FiRepeat className='text-sm'/>
          </div>
          <div className="mb-0">
            <span className="text-xs font-semibold">{text1}</span>
          </div>
        </>
      );
    }
  }

  return (
    <article className="flex flex-col shrink-0 items-center gap-2 justify-center w-24 h-24 rounded bg-black text-white p-1">
      {getBuzzer(type)}
    </article>
  )
}
