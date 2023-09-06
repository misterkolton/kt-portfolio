import React from "react";
import MainGolfLogo from "./Icons/MainGolfLogo";
import Link from "next/link";

const LoginScreen: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white font-sans">
      <div className="w-full max-w-screen-md text-center">
        {/* Header */}
        <header className="bg-emerald-300 p-4">
          {/* Use Link component to navigate back to PGA page */}
          <Link href="/pga">
            <div className="flex w-full justify-center items-center cursor-pointer">
              <MainGolfLogo />
            </div>
          </Link>
          <h1 className="text-4xl font-extrabold mb-2">
            Login to Fantasy Golf
          </h1>
          <p className="text-lg mb-4">Enter your credentials to get started.</p>
        </header>
        {/* Main Content */}
        <main className="container mx-auto px-4 py-8 text-center">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Enter Your Email Address
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-violet-50 transition duration-300 ease-in-out">
              {/* Login form fields */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-slate-800 text-left text-lg font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-emerald-300"
                  placeholder="Your email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-slate-800 text-left text-lg font-semibold mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-emerald-300"
                  placeholder="Your password"
                />
              </div>
              <button
                onClick={() => alert("Logged in")}
                className="bg-emerald-50 hover:bg-slate-50 text-gray-900 py-2 px-4 rounded-full font-semibold transition duration-300 ease-in-out shadow-md"
              >
                Login
              </button>
            </div>
          </section>
          {/* Sign-up Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-violet-50 transition duration-300 ease-in-out">
              {/* Sign-up form fields */}
              <div className="mb-4">
                <label
                  htmlFor="signup-email"
                  className="block text-slate-800 text-left text-lg font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="signup-email"
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-emerald-300"
                  placeholder="Your email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="signup-password"
                  className="block text-slate-800 text-left text-lg font-semibold mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="signup-password"
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-emerald-300"
                  placeholder="Your password"
                />
              </div>
              <button
                onClick={() => alert("Signed up")}
                className="bg-emerald-50 hover:bg-slate-50 text-gray-900 py-2 px-4 rounded-full font-semibold transition duration-300 ease-in-out shadow-md"
              >
                Sign Up
              </button>
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

export default LoginScreen;
