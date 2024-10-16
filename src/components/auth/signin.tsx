"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import signin from "@/app/(auth)/signin/signin";

const Signin = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);

    try {
      const result = await signin(formData);
      if (result?.error) {
        setError(result.error);
      } else {
        router.push("/");
      }
    } catch (err) {
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-center text-xl font-bold mb-5">Signin</h1>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form className="w-full space-y-2" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 border-b py-2">
          <label htmlFor="email" className="shrink-0 w-32 font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="your.email@domain.com"
            className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-black focus:ring-1"
            required
          />
        </div>

        <div className="flex flex-col gap-2 border-b py-2">
          <label htmlFor="password" className="shrink-0 w-32 font-medium">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="password"
            className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-black focus:ring-1"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg border-2 px-4 py-2 font-medium text-gray-500 focus:outline-none focus:ring hover:bg-gray-200 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          {loading ? "Submitting..." : "Signin"}
        </button>
      </form>

      <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
        or
      </div>
      <p className="text-center text-sm text-gray-600 mt-2">
        If you don&apos;t have an account, please&nbsp;
        <Link className="text-blue-500 hover:underline" href="/signup">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Signin;
