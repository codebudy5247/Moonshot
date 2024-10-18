"use client";
import { useState } from "react";
import Link from "next/link";
import signup from "@/app/(auth)/signup/signup";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (formData: FormData) => {
    setLoading(true);
    try {
      await signup(formData);
    } catch (error: unknown) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <h1 className="text-center text-xl font-bold mb-5">Signup</h1>
      <form className="w-full space-y-2 max-w-xs" action={handleSubmit}>
        <div className="flex flex-col gap-2 border-b py-2">
          <p className="shrink-0 w-32 font-medium">Name</p>
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="mb-2 w-full rounded-md border bg-white px-2 py-2 outline-none ring-black sm:mr-4 sm:mb-0 focus:ring-1"
          />
        </div>

        <div className="flex flex-col gap-2 border-b py-2">
          <p className="shrink-0 w-32 font-medium">Email</p>
          <input
            name="email"
            type="email"
            placeholder="your.email@domain.com"
            className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-black focus:ring-1"
          />
        </div>

        <div className="flex flex-col gap-2 border-b py-2">
          <p className="shrink-0 w-32 font-medium">Password</p>
          <input
            name="password"
            type="password"
            placeholder="password"
            className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-black focus:ring-1"
          />
        </div>

        <button
          disabled={loading}
          className="w-full rounded-lg border-2 px-4 py-2 font-medium text-gray-500 focus:outline-none focus:ring hover:bg-gray-200"
        >
          {loading ? "submitting..." : "Signup"}
        </button>

        <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
          or
        </div>

        <p className="text-center text-sm text-gray-600 mt-2">
          If you don&apos;t have an account, please&nbsp;
          <Link className="text-blue-500 hover:underline" href="/signin">
            Sign in
          </Link>
        </p>
      </form>
    </>
  );
};

export default Signup;
