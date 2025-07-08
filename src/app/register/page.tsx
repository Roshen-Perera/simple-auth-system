"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import z from "zod";

const schema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[^A-Za-z0-9]/, {
      message: "Password must contain at least one special character",
    }),
});


type FormData = z.infer<typeof schema>;

const onSubmit = (data: FieldValues) => {
  const registerUser = async () => {
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to register");
      }

      const result = await response.json();
      console.log("Registration successful:", result);
      window.location.href = "/login";
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  // 👇 You need to call the function here
  registerUser();
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  return (
    <>
      <div className="absolute right-0 top-0 h-full w-[700px] bg-green-900/50 backdrop-blur-md rounded-tl-[50px] rounded-bl-[50px] z-10">
        <div className="p-40 flex flex-col items-center justify-center h-full">
          <h1 className="text-5xl font-semibold mb-2 text-white">Welcome</h1>
          <p className="mb-10 text-sm font-semibold text-gray-200">
            Register to access your EMR Dashboard
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <label className="text-white font-semibold" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              {...register("username")}
              type="text"
              className="w-full pt px-4 py-2 rounded-full bg-white text-black focus:outline-none"
            />
            <label className="text-white font-semibold" htmlFor="email">
              Email Address
            </label>
            {errors.email && (
              <label className="text-red-500">{errors.email.message}</label>
            )}
            <input
              id="email"
              {...register("email")}
              type="email"
              className="w-full pt px-4 py-2 rounded-full bg-white text-black focus:outline-none"
            />
            {errors.username && (
              <label className="text-red-500">{errors.username.message}</label>
            )}
            <label className="text-white font-semibold" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              {...register("password")}
              type="password"
              className="w-full px-4 py-2 rounded-full bg-white text-black focus:outline-none"
            />
            
            <div className="backdrop-blur-md p-3 rounded-2xl">
              <p className="font-semibold text-white">Password Requirements</p>
              <div>
              {errors.password && (
                <label className="text-red-500">
                  {errors.password.message}
                </label>
              )}
            </div>
            </div>
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
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
