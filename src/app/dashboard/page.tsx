"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // If user not logged in, redirect to login
  if (status === "loading") return <p>Loading...</p>;

  if (!session) {
    router.push("/login");
    return null;
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">
        Welcome, {session.user?.name} 👋
      </h1>
      <p>Your email: {session.user?.email}</p>

      <div className="mt-6">
        <button
          onClick={() => signOut()}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
