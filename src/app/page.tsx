"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Login from "./login/page";

export default function Home() {

  const { data: session, status } = useSession();

  // if (status === "loading") {
  //   return <p>Loading...</p>;
  // }

  if (status === "unauthenticated") {
    window.location.href = "/login";
  }
  return (
    <div >
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
}
