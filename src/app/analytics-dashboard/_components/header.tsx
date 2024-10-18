"use client";
import { useEffect, useState } from "react";
import getMe from "@/app/(auth)/get-me";
import logout from "@/app/(auth)/logout";

type User = {
  id: string;
  email: string;
  name: string;
};
const Header = () => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const fetchMe = async () => {
      const result = await getMe();
      if (result) {
        setUser(result.user);
      }
    };
    fetchMe();
  }, []);

  return (
    <header className="mb-2 shadow">
      <div className="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 sm:mx-auto sm:flex-row">
        <h2 className="text-lg font-bold">Dashboard</h2>
        <nav className="peer-checked:mt-8 peer-checked:max-h-32 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all sm:ml-24 sm:max-h-full sm:flex-row sm:items-start">
          <ul className="flex flex-col items-center sm:flex-row"></ul>
          <ul className="mt-4 flex items-center gap-4 sm:mt-0">
            <li className="font-bold underline text-xl">{user?.name}</li>
            <li>
              <button
                onClick={async () => {
                  await logout();
                }}
                className="bg-[#E54065] font-semibold px-3 py-2 text-white rounded-lg"
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
