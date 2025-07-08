import React from "react";
import "./page.css";

const Login = () => {
  return (
    <>
      <div className="absolute right-0 top-0 h-full w-[700px] bg-green-900/50 backdrop-blur-md rounded-tl-[50px] rounded-bl-[50px] z-10">
      <div className="p-40 flex flex-col items-center justify-center h-full">
        <h1 className="text-5xl font-semibold mb-2 text-white">Welcome</h1>
        <p className="mb-10 text-sm font-semibold text-gray-200">
          Sign in to access your EMR Dashboard
        </p>

        <form className="space-y-4">
          <label className="text-white font-semibold" htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            className="w-full pt px-4 py-2 rounded-full bg-white text-black focus:outline-none"
          />
          <label className="text-white font-semibold" htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            className="w-full px-4 py-2 rounded-full bg-white text-black focus:outline-none"
          />

          <div className="flex justify-between items-center text-sm text-gray-300">
            <label className="flex items-center">
              <input type="checkbox" className="mr-1" />
              Remember Me
            </label>
            <a href="#" className="hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-2 text-white bg-black rounded-full hover:bg-gray-800"
          >
            Go To Dashboard
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Login;
