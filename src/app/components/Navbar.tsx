"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100 border-b">
      <Link href="/" className="text-xl font-bold">
        Next SaaS
      </Link>

      <div>
        {session ? (
          <>
            <Link href="/dashboard" className="mr-4">
              Dashboard
            </Link>
            <button
              className="px-3 py-1 bg-red-500 text-white rounded"
              onClick={() => signOut()}
            >
              Sign Out
            </button>
          </>
        ) : (
          <Link
            href="/login"
            className="px-3 py-1 bg-blue-500 text-white rounded"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
