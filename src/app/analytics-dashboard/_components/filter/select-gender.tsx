"use client";
import { useRouter, useSearchParams } from "next/navigation";

const SelectGender = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedGender = searchParams.get("gender") || "";

  const handleGenderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const queryParams = new URLSearchParams(searchParams);
    queryParams.set("gender", value);

    router.push(`?${queryParams.toString()}`);
  };
  return (
    <div className="flex flex-col">
      <label htmlFor="gender" className="text-stone-600 text-sm font-medium">
        Gender
      </label>
      <select
        id="gender"
        className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        value={selectedGender}
        onChange={handleGenderChange}
      >
        <option value="">Select Gender</option>
        <option>Male</option>
        <option>Female</option>
      </select>
    </div>
  );
};

export default SelectGender;
