import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type TimeTrendChartProps = {
  data: IAnalytics[];
  feature: string;
};
const TimeTrendChart = ({ data, feature }: TimeTrendChartProps) => {
  const timeTrendData = data.map((item) => ({
    day: item.Day,
    value: item[feature as keyof IAnalytics],
  }));
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={timeTrendData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TimeTrendChart;
