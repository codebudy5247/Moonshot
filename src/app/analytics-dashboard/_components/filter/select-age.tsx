"use client";
import { useRouter, useSearchParams } from "next/navigation";

const SelectAge = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedAge = searchParams.get("age") || "";


  const handleAgeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const queryParams = new URLSearchParams(searchParams);
    queryParams.set("age", value);

    router.push(`?${queryParams.toString()}`);
  };
  return (
    <div className="flex flex-col">
      <label htmlFor="age" className="text-stone-600 text-sm font-medium">
        Age
      </label>
      <select
        id="age"
        className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        value={selectedAge}
        onChange={handleAgeChange}
      >
        <option value="">Select Age</option>
        <option value="15-25">15-25</option>
        <option value=">25">&gt;25</option>
      </select>
    </div>
  );
};

export default SelectAge;
