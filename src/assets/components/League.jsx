import React from 'react'
import LeagueHeader from './LeagueHeader'
import Match from './Match';

function getMatches(name) {

  if (name === 'Premier League') {
    return (
      <>
        <Match
          hour="09:30"
          status="FT"
          team1="Liverpool"
          team2="Chelsea"
          score1="0"
          score2="0"
          bell={true}
          live={false}
        />
        <Match
          hour="12:00"
          status="FT"
          team1="AFC Bournemouth"
          team2="Nottingham Forest"
          score1="1"
          score2="1"
          bell={false}
          live={false}
        />
        <Match
          hour="12:00"
          status="FT"
          team1="Leicester City"
          team2="Brighton & Hove Albion"
          score1="2"
          score2="2"
          bell={true}
          live={false}
        />
        <Match
          hour="12:00"
          status="FT"
          team1="Southhampton"
          team2="Aston Villa"
          score1="0"
          score2="1"
          bell={false}
          live={false}
        />
        <Match
          hour="12:00"
          status="FT"
          team1="West Ham United"
          team2="Everton"
          score1="2"
          score2="0"
          bell={false}
          live={false}
        />
        <Match
          hour="14:30"
          status="87'"
          team1="Crystal Palace"
          team2="Newcastle United"
          score1="0"
          score2="0"
          bell={false}
          live={true}
        />
    </>)
  }

  if (name === 'Bundesliga') {
    return (
      <>
        <Match
          hour="11:30"
          status="FT"
          team1="1. FC Union Berlin"
          team2="1899 Hoffenheim"
          score1="3"
          score2="1"
          bell={false}
          live={false}
        />
        <Match
          hour="11:30"
          status="FT"
          team1="Eintracht Frankfurt"
          team2="FC Shalke 04"
          score1="3"
          score2="0"
          bell={false}
          live={false}
        />
        <Match
          hour="11:30"
          status="FT"
          team1="VfB Stuttgart"
          team2="1. FSV Mainz 05"
          score1="1"
          score2="1"
          bell={false}
          live={false}
        />
        <Match
          hour="11:30"
          status="FT"
          team1="VfL Bochum"
          team2="Herta BSC"
          score1="3"
          score2="1"
          bell={false}
          live={false}
        />
      </>
    );
  }

}

export default function League({symbol, country, name}) {
  return (
    <>
      <LeagueHeader
        symbol={symbol}
        country={country}
        name={name}
      />
      {getMatches(name)}
    </>
  );
}
