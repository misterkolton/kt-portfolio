import Link from "next/link"
import MainGolfLogo from "../../components/Icons/MainGolfLogo"

const MockMultiplayerGame = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white font-sans flex-col">
      <header className="flex flex-col bg-emerald-300 p-8 w-full items-center justify-center max-w-screen-md">
        <Link href="/">
          <div className="flex w-full justify-center items-center cursor-pointer">
            <div className="bg-white rounded-3xl mb-2 transition duration-300 ease-in-out shadow-md hover:bg-slate-100">
              <MainGolfLogo />
            </div>
          </div>
        </Link>
        <h1 className="text-4xl font-extrabold mb-2">Multiplayer Game</h1>
      </header>
      <div className="w-full max-w-screen-lg text-center">
        <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-full mt-8">
          Find Opponent
        </button>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Match Found!</h2>
          <p>Opponent: Jerry</p>
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full mt-4">
            Play
          </button>
        </div>
      </div>
    </div>
  )
}

export default MockMultiplayerGame
