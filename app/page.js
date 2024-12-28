"use client"
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import HomePage from "@/components/HomePage";


export default function Home() {
  const { data: session } = useSession();

  return (
   <div>
   <HomePage />
   </div>
  );
}
