// pages/StartLeaguePage.tsx

import Link from "next/link"
import React from "react"
import MainGolfLogo from "../../components/Icons/MainGolfLogo"

interface Player {
  id: number
  name: string
}

interface StartLeaguePageProps {
  player: Player
}

const players: Player[] = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
  { id: 3, name: "Bob Smith" },
  { id: 4, name: "Alice Johnson" },
  { id: 5, name: "Michael Davis" },
]
const StartLeaguePage: React.FC<StartLeaguePageProps> = ({ player }) => {
  const handlePlayerSelection = (selectedPlayer: Player) => {
    console.log(`Selected: ${selectedPlayer.name}`)
  }

  const handleInviteManager = (event: React.FormEvent) => {
    event.preventDefault()
    const email = (event.target as HTMLFormElement).elements["email"].value
    console.log(`Inviting manager with email: ${email}`)
    // Add logic to send an invite
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
        <h1 className="text-4xl font-extrabold mb-2 ">Start A League</h1>
      </header>
      <div className="w-full max-w-screen-lg text-center">
        <h1 className="text-4xl font-extrabold mb-8 mt-4"></h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Select From Managers In Your Previous Leagues
          </h2>
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
      {/* Section to invite new manager */}
      <div className="bg-white p-6 rounded-lg shadow-md text-black mb-8">
        <h2 className="text-2xl font-semibold mb-4">Invite a New Manager</h2>
        {/* <form onSubmit={handleInviteManager}> */}
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium">Email:</label>
            <input
              type="email"
              name="email"
              className="w-full mt-1 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="w-full bg-indigo-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Invite Manager
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default StartLeaguePage
