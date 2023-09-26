// pages/StartLeaguePage.tsx

import Link from "next/link"
import React from "react"
import MainGolfLogo from "../../components/Icons/MainGolfLogo"

interface Player {
  id: number
  name: string
}

interface MockDraftProps {
  player: Player
}

const players: Player[] = [
  { id: 1, name: "Tiger Woods" },
  { id: 2, name: "Rory McIlroy" },
  { id: 3, name: "Brooks Koepka" },
  { id: 4, name: "Justin Thomas" },
  { id: 5, name: "Dustin Johnson" },
  { id: 6, name: "Jon Rahm" },
  { id: 7, name: "Justin Rose" },
  { id: 8, name: "Adam Scott" },
  { id: 9, name: "Tommy Fleetwood" },
  { id: 10, name: "Bubba Watson" },
]

const MockDraft: React.FC<MockDraftProps> = ({ player }) => {
  const handlePlayerSelection = (selectedPlayer: Player) => {
    console.log(`Selected: ${selectedPlayer.name}`)
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white font-sans flex-col">
      <header className=" flex flex-col bg-emerald-300 p-8 w-full items-center justify-center max-w-screen-md">
        <Link href="/">
          <div className="flex w-full justify-center items-center cursor-pointer">
            <div className=" bg-white rounded-3xl mb-2 transition duration-300 ease-in-out shadow-md hover:bg-slate-100">
              <MainGolfLogo />
            </div>
          </div>
        </Link>
        <h1 className="text-4xl font-extrabold mb-2 ">Mock Draft</h1>
      </header>
      <div className="w-full max-w-screen-lg text-center">
        <h1 className="text-4xl font-extrabold mb-8 mt-4"></h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Available Players</h2>
          <div className="flex flex-wrap justify-center">
            {players.map((availablePlayer) => (
              <div
                key={availablePlayer.id}
                className="bg-white p-4 m-2 rounded-lg shadow-md text-black"
              >
                {availablePlayer.name}
                <button
                  className="ml-2"
                  // onClick={() => handlePlayerSelection(availablePlayer)}
                ></button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MockDraft
