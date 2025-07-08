"use client";

import React from "react";
import "./page.css";

const Login = () => {
  return (
    <>
      <div className="absolute right-0 top-0 h-full w-[700px] bg-green-900/50 backdrop-blur-md rounded-tl-[50px] rounded-bl-[50px] z-10">
        <div className="p-40 flex flex-col items-center justify-center h-full">
          <h1 className="text-5xl font-semibold mb-2 text-white">Welcome</h1>
          <p className="mb-10 text-sm font-semibold text-gray-200">
            Enter your email address to reset your password
          </p>

          <form className="space-y-4">
            <label className="text-white font-semibold" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 rounded-full bg-white text-black focus:outline-none"
            />
            <label className="text-white font-semibold" htmlFor="password">
              Confirm Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 rounded-full bg-white text-black focus:outline-none"
            />
            <div className="backdrop-blur-md p-3 rounded-2xl">
              <p className="font-semibold text-white">Password Requirements</p>
              <ul className="ml-6 text-sm text-gray-300">
                <li>At least 8 characters</li>
                <li>At least one uppercase letter</li>
                <li>At least one lowercase letter</li>
                <li>At least one number</li>
                <li>At least one special character</li>
              </ul>
            </div>
            <button
              type="submit"
              className="w-full py-2 text-white border-2 border-black bg-black rounded-full hover:bg-gray-800 cursor-pointer"
            >
              Create New Password
            </button>
            <button
              type="submit"
              className="w-full py-2 text-white border-2 border-black rounded-full hover:bg-gray-800 cursor-pointer"
            >
              Create New Password
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
