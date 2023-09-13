import Link from "next/link"
import MainGolfLogo from "../../components/Icons/MainGolfLogo"

export default function Landing() {
  const pages = [
    {
      description:
        "Build your team, make strategic picks, and dominate the leaderboard.",
      title: "Start A League",
      slug: "start-league",
    },
    {
      description:
        "Join this prestigious league and compete against the best. Prizes await the top performers!",
      title: "PGA Masters League",
      slug: "pga-masters-league",
    },
    {
      description:
        "New to Fantasy Golf? Try a Mock Draft and learn the ropes while having fun.",
      title: "Mock Draft",
      slug: "mock-draft",
    },
    {
      description: "Insight to Players projections in upcoming events",
      title: "Upcoming Tournaments",
      slug: "upcoming-tournaments",
    },
    {
      description: "PGA World Rankings and Money Leaders",
      title: "World Rankings",
      slug: "world-rankings",
    },
  ]

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white font-sans">
      <div className="w-full max-w-screen-lg text-center">
        {/* Header */}
        <header className="bg-emerald-300 p-4">
          <div className="flex w-full justify-center items-center">
            <MainGolfLogo />
          </div>
          <h1 className="text-4xl font-extrabold mb-2">
            Welcome to Fantasy Golf
          </h1>
          <p className="text-lg mb-4">
            Create your dream PGA team and compete with friends!
          </p>
          <div className="flex w-full justify-center items">
            <Link href="/login">
              <div className="bg-emerald-50 hover:bg-slate-50 text-gray-900 py-2 px-4 rounded-full font-semibold transition duration-300 ease-in-out shadow-md w-fit">
                Get Started
              </div>
            </Link>
          </div>
        </header>
        {/* Main Content */}
        <main className="container mx-auto px-4 py-8 text-center">
          {pages.map((page) => {
            return (
              <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div
                  id={page.slug}
                  className="bg-white p-6 rounded-lg shadow-lg hover:bg-violet-50 transition duration-300 ease-in-out"
                >
                  <h3 className="text-xl font-semibold mb-2 text-slate-800">
                    {page.title}
                  </h3>
                  <p className="text-lg text-slate-800">{page.title}</p>
                </div>
              </section>
            )
          })}
        </main>
        {/* Footer */}
        <footer className="bg-gray-800 p-4 w-full">
          <div className="container mx-auto text-center">
            <p className="text-gray-300 text-sm">Contact</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

//  <section className="mb-8">
//             <h2 className="text-2xl font-semibold mb-4">Featured Content</h2>
//             <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-violet-50 transition duration-300 ease-in-out">
//               {/* Featured content or promotional banners */}
//               <h3 className="text-xl font-semibold mb-2 text-slate-800">
//                 Start a League
//               </h3>
//               <p className="text-lg text-slate-800">
//                 Build your team, make strategic picks, and dominate the
//                 leaderboard.
//               </p>
//             </div>
//           </section>
//           <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div>
//               {/* Featured League 1 */}
//               <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-violet-50 transition duration-300 ease-in-out">
//                 <h3 className="text-xl font-semibold mb-2 text-slate-800">
//                   PGA Masters League
//                 </h3>
//                 <p className="text-lg text-slate-800">
//                   Join this prestigious league and compete against the best.
//                   Prizes await the top performers!
//                 </p>
//               </div>
//             </div>
//             <div>
//               {/* Featured League 2 */}
//               <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-violet-50 transition duration-300 ease-in-out">
//                 <h3 className="text-xl font-semibold mb-2 text-slate-800">
//                   Mock Draft
//                 </h3>
//                 <p className="text-lg text-slate-800">
//                   New to Fantasy Golf? Try a Mock Draft and learn the ropes
//                   while having fun.
//                 </p>
//               </div>
//             </div>
//             <div>
//               {/* Featured League 2 */}
//               <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-violet-50 transition duration-300 ease-in-out">
//                 <h3 className="text-xl font-semibold mb-2 text-slate-800">
//                   Upcoming Tournaments
//                 </h3>
//                 <p className="text-lg text-slate-800">
//                   Insight to Players projections in upcoming events
//                 </p>
//               </div>
//             </div>
//             <div>
//               {/* Featured League 2 */}
//               <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-violet-50 transition duration-300 ease-in-out">
//                 <h3 className="text-xl font-semibold mb-2 text-slate-800">
//                   World Rankings
//                 </h3>
//                 <p className="text-lg text-slate-800">
//                   PGA World Rankings and Money Leaders
//                 </p>
//               </div>
//             </div>
//           </section>
