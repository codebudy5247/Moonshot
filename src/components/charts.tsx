"use client";
import { useState } from "react";
import TotalTimeSpentChart from "./total-time-spent-chart";
import Filter from "./filter";
import TimeTrendChart from "./time-trend-chart";

type ChartsProps = {
  analyticsData: IAnalytics[];
};
const Charts = ({ analyticsData }: ChartsProps) => {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  const handleBarClick = (feature: string) => {
    setSelectedFeature(feature);
  };
  return (
    <>
      {/* <div className="flex justify-center items-center">
        <Filter />
      </div> */}

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
