import React from "react";

const FantasyPGALanding: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white font-sans">
      <div className="w-full max-w-screen-lg text-center">
        {/* Header */}
        <header className="bg-green-500 p-4">
          <h1 className="text-4xl font-extrabold mb-2">
            Welcome to Fantasy Golf
          </h1>
          <p className="text-lg mb-4">
            Create your dream PGA team and compete with friends!
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 py-2 px-4 rounded-full font-semibold transition duration-300 ease-in-out">
            Get Started
          </button>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8 text-center">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Featured Content</h2>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* Featured content or promotional banners */}
              <p className="text-lg">
                Join thousands of golf enthusiasts and experience the excitement
                of Fantasy Golf. Build your team, make strategic picks, and
                dominate the leaderboard.
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              {/* Featured League 1 */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">
                  PGA Masters League
                </h3>
                <p className="text-lg">
                  Join this prestigious league and compete against the best.
                  Prizes await the top performers!
                </p>
              </div>
            </div>
            <div>
              {/* Featured League 2 */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">
                  Rookie's Challenge
                </h3>
                <p className="text-lg">
                  New to Fantasy Golf? Try the Rookie's Challenge and learn the
                  ropes while having fun.
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 p-4 w-full">
          <div className="container mx-auto text-center">
            <p className="text-gray-300 text-sm">
              &copy; {new Date().getFullYear()} Fantasy Golf, Inc. All rights
              reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default FantasyPGALanding;
