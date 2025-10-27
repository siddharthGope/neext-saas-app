"use client"

import { signIn, signOut, useSession } from "next-auth/react"

export default function LoginPage() {
  const { data: session } = useSession()

  if (session) {
    return (
      <div className="p-10">
        <p>Signed in as {session.user?.email}</p>
        <button
          onClick={() => signOut()}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        >
          Sign out
        </button>
      </div>
    )
  }

  return (
    <div className="p-10">
      <p>Not signed in</p>
      <button
        onClick={() => signIn("google")}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Sign in with Google
      </button>
    </div>
  )
}
