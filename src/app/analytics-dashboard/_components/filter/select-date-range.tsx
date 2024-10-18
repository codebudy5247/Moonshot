"use client";
import { useRouter, useSearchParams } from "next/navigation";

const SelectDateRange = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedStartDate = searchParams.get("startDate") || "";
  const selectedEndDate = searchParams.get("endDate") || "";

  const updateDateRangeInURL = (start: string, end: string) => {
    const queryParams = new URLSearchParams(searchParams);
    if (start) queryParams.set("startDate", start);
    if (end) queryParams.set("endDate", end);

    router.push(`?${queryParams.toString()}`);
  };

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    updateDateRangeInURL(value, selectedEndDate);
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    updateDateRangeInURL(selectedStartDate, value);
  };

  return (
    <>
      <div className="flex flex-col mb-4">
        <label
          htmlFor="startDate"
          className="text-stone-600 text-sm font-medium"
        >
          Start Date
        </label>
        <input
          type="date"
          id="startDate"
          className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          value={selectedStartDate}
          onChange={handleStartDateChange}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="endDate" className="text-stone-600 text-sm font-medium">
          End Date
        </label>
        <input
          type="date"
          id="endDate"
          className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          value={selectedEndDate}
          onChange={handleEndDateChange}
        />
      </div>
    </>
  );
};

export default SelectDateRange;
