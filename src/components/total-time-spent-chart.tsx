"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { calculateTotalTimeSpent } from "@/lib/utils";

type TotalTimeSpentChartProps = {
  data: IAnalytics[];
  onBarClick: (feature: string) => void;
};

const TotalTimeSpentChart = ({
  data,
  onBarClick,
}: TotalTimeSpentChartProps) => {
  const totalTimeData = calculateTotalTimeSpent(data);
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={totalTimeData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar
          dataKey="total"
          fill="#0000FF"
          className="cursor-pointer"
          onClick={(data) => onBarClick(data.name)}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TotalTimeSpentChart;
