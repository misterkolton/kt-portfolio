// pages/UpcomingTournamentsPage.tsx

import React from "react"
import MainGolfLogo from "../../components/Icons/MainGolfLogo"
import Link from "next/link"

interface Tournament {
  id: number
  name: string
  startDate: string
  isMajor: boolean
}

interface Player {
  id: number
  name: string
}

interface UpcomingTournamentsPageProps {
  player: Player
}

const tournaments: Tournament[] = [
  {
    id: 1,
    name: "The Masters",
    startDate: "April 4, 2024",
    isMajor: true,
  },
  {
    id: 2,
    name: "PGA Championship",
    startDate: "May 16, 2024",
    isMajor: true,
  },
  {
    id: 3,
    name: "U.S. Open",
    startDate: "June 13, 2024",
    isMajor: true,
  },
  {
    id: 4,
    name: "The Open Championship",
    startDate: "July 18, 2024",
    isMajor: true,
  },
  {
    id: 5,
    name: "The Players Championship",
    startDate: "March 14, 2024",
    isMajor: false,
  },
  {
    id: 6,
    name: "WGC-FedEx St. Jude Invitational",
    startDate: "July 25, 2024",
    isMajor: false,
  },
]

const UpcomingTournamentsPage: React.FC<UpcomingTournamentsPageProps> = ({
  player,
}) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white font-sans flex-col">
      <header className="flex flex-col bg-emerald-300 p-8 w-full items-center justify-center max-w-screen-md">
        <Link href="/">
          <div className="flex w-full justify-center items-center cursor-pointer">
            <div className=" bg-white rounded-3xl mb-2 transition duration-300 ease-in-out shadow-md hover:bg-slate-100">
              <MainGolfLogo />
            </div>
          </div>
        </Link>
        <h1 className="text-4xl font-extrabold mb-2">Upcoming Tournaments</h1>
      </header>
      <div className="w-full max-w-screen-lg text-center">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 pb-4 pt-8">
            Highlighted Major Tournaments
          </h2>
          <div className="flex flex-wrap justify-center">
            {tournaments
              .filter((tournament) => tournament.isMajor)
              .map((majorTournament) => (
                <div
                  key={majorTournament.id}
                  className="bg-white p-4 m-2 rounded-lg shadow-md text-black"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {majorTournament.name}
                  </h3>
                  <p className="text-lg">{majorTournament.startDate}</p>
                </div>
              ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">All Tournaments</h2>
          <div className="flex flex-wrap justify-center">
            {tournaments.map((tournament) => (
              <div
                key={tournament.id}
                className="bg-white p-4 m-2 rounded-lg shadow-md text-black"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {tournament.name}
                </h3>
                <p className="text-lg">{tournament.startDate}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpcomingTournamentsPage
