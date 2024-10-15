"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import TotalTimeSpentChart from "./total-time-spent-chart";
import TimeTrendChart from "./time-trend-chart";
import SelectAge from "./filter/select-age";
import SelectGender from "./filter/select-gender";
import SelectDateRange from "./filter/select-date-range";

type ChartsProps = {
  analyticsData: IAnalytics[];
};
const Charts = ({ analyticsData }: ChartsProps) => {
  const router = useRouter();
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  const handleBarClick = (feature: string) => {
    setSelectedFeature(feature);
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="m-2 max-w-screen-md">
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="flex justify-end">
              <button onClick={() => router.push("http://localhost:3000")} className="text-[#E54065] text-sm font-semibold">
                Reset
              </button>
            </div>
            <div className="mt-2 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
              <SelectAge />
              <SelectGender />
              <SelectDateRange />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-4 border border-gray-200 rounded-lg px-5 py-3">
          <h6 className="text-md font-semibold text-center">
            Total time spent
          </h6>
          <TotalTimeSpentChart
            data={analyticsData}
            onBarClick={handleBarClick}
          />
        </div>

        {selectedFeature && (
          <div className="flex flex-col gap-4 border border-gray-200 rounded-lg px-5 py-3">
            <h2 className="text-md font-semibold text-center">
              Time Trend for Feature {selectedFeature}
            </h2>
            <TimeTrendChart data={analyticsData} feature={selectedFeature} />
          </div>
        )}
      </div>
    </>
  );
};

export default Charts;
