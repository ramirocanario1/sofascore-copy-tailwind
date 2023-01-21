import React from 'react'

import Buzzer from "./Buzzer";

export default function BuzzerSection() {
  return (
    <section className="bg-gray-800 py-3 pl-2">
      <h2 className="text-gray-300 font-semibold mb-2">
        Nuestras Buzzer favoritas
      </h2>
      <div className="flex gap-3 overflow-x-scroll">
        <Buzzer
          type="match"
          img1="https://api.sofascore.app/api/v1/team/44/image"
          img2="https://api.sofascore.app/api/v1/team/38/image"
          text1="FT"
          text2="0 - 0"
        />
        <Buzzer
          type="match"
          img1="https://api.sofascore.app/api/v1/team/122366/image"
          img2="https://api.sofascore.app/api/v1/team/206570/image"
          text1="Mañana"
          text2="05:00"
        />
        <Buzzer
          type="transfer"
          img1="https://api.sofascore.app/api/v1/player/138833/image"
          img2="https://api.sofascore.app/api/v1/team/2817/image"
          img3="https://api.sofascore.app/api/v1/team/2836/image"
          text1="M. Depay"
        />
        <Buzzer
          type="match"
          img1="https://api.sofascore.app/api/v1/team/4422/image"
          img2="https://api.sofascore.app/api/v1/team/4386/image"
          text1="Hoy"
          text2="18:30"
        />
        <Buzzer
          type="match"
          img1="https://api.sofascore.app/api/v1/team/44/image"
          img2="https://api.sofascore.app/api/v1/team/38/image"
          text1="FT"
          text2="0 - 0"
        />
      </div>
    </section>
  );
}
