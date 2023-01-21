import React from 'react'

import { HiOutlineChevronDown } from "react-icons/hi";
import League from './League';

export default function Leagues() {
  return (
    <>
      <header className="flex justify-between py-2 px-4 items-center bg-black text-white">
        <h2 className="font-semibold text-gray-200 text-sm">Ligas Ancladas</h2>
        <HiOutlineChevronDown className="text-gray-400 rotate-180" />
      </header>
      <League
        symbol="https://api.sofascore.app/api/v1/unique-tournament/17/image"
        country="Inglaterra"
        name="Premier League"
      />
      <League
        symbol="https://api.sofascore.app/api/v1/unique-tournament/35/image"
        country="Alemania"
        name="Bundesliga"
      />
    </>
  );
}
