"use client"

import { useSession } from "next-auth/react";
import React from "react";

export default function Dashboard() {
    const { data: session, status } = useSession();
    console.log("Session Data:", session);
    
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <header className="mb-8 flex items-center justify-between">
                <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
                <button className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                    Logout
                </button>
            </header>
            <main>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <div className="rounded-lg bg-white p-6 shadow">
                        <h2 className="mb-2 text-lg font-semibold text-gray-700">Users</h2>
                        <p className="text-3xl font-bold text-blue-600">1,234</p>
                    </div>
                    <div className="rounded-lg bg-white p-6 shadow">
                        <h2 className="mb-2 text-lg font-semibold text-gray-700">Revenue</h2>
                        <p className="text-3xl font-bold text-green-600">$12,345</p>
                    </div>
                    <div className="rounded-lg bg-white p-6 shadow">
                        <h2 className="mb-2 text-lg font-semibold text-gray-700">Active Sessions</h2>
                        <p className="text-3xl font-bold text-purple-600">87</p>
                    </div>
                </div>
                <section className="mt-10">
                    <h3 className="mb-4 text-xl font-semibold text-gray-800">Recent Activity</h3>
                    <ul className="divide-y rounded-lg bg-white shadow">
                        <li className="p-4">User <span className="font-semibold">john@example.com</span> logged in.</li>
                        <li className="p-4">User <span className="font-semibold">jane@example.com</span> registered.</li>
                        <li className="p-4">User <span className="font-semibold">admin@example.com</span> updated settings.</li>
                    </ul>
                </section>
            </main>
        </div>
    );
}