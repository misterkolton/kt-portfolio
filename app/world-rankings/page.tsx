// pages/WorldLeadersPage.tsx

import React from "react"
import MainGolfLogo from "../../components/Icons/MainGolfLogo"
import Link from "next/link"
import { leaders } from "./top-50"

interface Leader {
  id: number
  name: string
  ranking: number
  earnings: number
}

const WorldLeadersPage: React.FC = () => {
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
        <h1 className="text-4xl font-extrabold mb-2">Current World Leaders</h1>
      </header>
      <div className="w-full max-w-screen-lg text-center">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 py-5 ">
            Top 50 World Rankings
          </h2>
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Ranking</th>
                <th className="px-4 py-2">Player Name</th>
                <th className="px-4 py-2">Earnings (USD)</th>
              </tr>
            </thead>
            <tbody>
              {leaders.map((leader) => (
                <tr key={leader.id}>
                  <td className="px-4 py-2">{leader.ranking}</td>
                  <td className="px-4 py-2">{leader.name}</td>
                  <td className="px-4 py-2">
                    ${leader.earnings.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default WorldLeadersPage
