import React from 'react'

import { ImStatsBars } from "react-icons/im";
import { AiFillBell, AiOutlineBell } from "react-icons/ai";

export default function Match({hour, status, team1, team2, score1, score2, bell, live}) {

  function isWinner(score1, score2) {
    return parseInt(score1) > parseInt(score2);
  }

  function getColor(labelName, score1, score2){
    if (labelName === 'status') {
      return live ? 'text-red-600' : 'text-gray-500'
    }

    if (labelName === 'team') {
      if (live) return 'text-white'
      return isWinner(score1, score2) ? 'text-white' : 'text-gray-500'
    }

    if (labelName === 'score') {
      if (live) return 'text-red-600'
      return isWinner(score1, score2) ? "text-white" : "text-gray-500";
    }
  }

  function getBell(isActivated) {
    return isActivated ? (
      <AiFillBell className="text-2xl text-sky-600" />
    ) : (
      <AiOutlineBell className="text-2xl text-sky-600" />
    );
  } 

  return (
    <article className="flex justify-between items-center text-white bg-black py-1 pb-3">
      <div className="w-20 flex flex-col justify-center items-center text-xs text-gray-500">
        <span>{hour}</span>
        <span className={getColor('status')}>{status}</span>
      </div>
      <div className="flex justify-between w-full border-x-2 border-gray-800 px-2">
        <div className="flex flex-col text-sm justify-center text-gray-500">
          <span className={getColor('team', score1, score2)}>
            {team1}
          </span>
          <span className={getColor('team', score2, score1)}>
            {team2}
          </span>
        </div>
        <div className="flex items-center gap-2 mr-2">
          <ImStatsBars className="text-green-600" />
          <div className="flex flex-col justify-center text-sm text-gray-500">
            <span className={getColor('score', score1, score2)}>{score1}</span>
            <span className={getColor('score', score2, score1)}>{score2}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-20">
        {getBell(bell)}
      </div>
    </article>
  );
}
