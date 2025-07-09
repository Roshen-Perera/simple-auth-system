"use client";

import React from "react";
import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";

const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(1, { message: "Invalid Password" }),
});

type FormData = z.infer<typeof schema>;

const onSubmit = (data: FieldValues) => {
  const loginUser = async () => {
    try {
      const response = await signIn("credentials", {
        ...data,
        redirect: false,
      });

      if (response?.error) {
        throw new Error(response.error);
      }

      // Redirect to dashboard on successful login
      window.location.href = "/dashboard";
    } catch (error) {
      console.error("Error during login:", error);
    }
  }
  // Call the function to handle login
  loginUser();
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
            Sign in to access your EMR Dashboard
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="text-white font-semibold" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                {...register("email")}
                type="text"
                className="w-full pt px-4 py-2 rounded-full bg-white text-black focus:outline-none"
              />
              {errors.email && (
                <label className="text-red-500">{errors.email.message}</label>
              )}
            </div>
            <div>
              <label className="text-white font-semibold" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                {...register("password")}
                type="password"
                className="w-full px-4 py-2 rounded-full bg-white text-black focus:outline-none"
              />
              {errors.password && (
                <label className="text-red-500">
                  {errors.password.message}
                </label>
              )}
            </div>
            <div className="flex justify-between items-center text-sm text-gray-300">
              <label className="flex items-center">
                <input type="checkbox" className="mr-1" />
                Remember Me
              </label>
              <a href="/reset" className="hover:underline">
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
