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
            <label className="text-white font-semibold" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="w-full pt px-4 py-2 rounded-full bg-white text-black focus:outline-none"
            />
            <p className="mb-10 ml-6 text-xs font-semibold text-gray-200">
              Enter your email address to reset your password
            </p>
            <button
              type="submit"
              className="w-full py-2 text-white bg-black rounded-full hover:bg-gray-800"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
