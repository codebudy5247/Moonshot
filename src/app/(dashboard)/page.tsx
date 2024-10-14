import { getAnalytics } from "@/lib/get-analytics";
import Charts from "@/components/charts";

export default async function Dashboard() {
  const analyticsData = await getAnalytics();

  return (
    <main className="flex flex-1 flex-col gap-2 p-4 lg:gap-6 lg:p-6">
      <Charts analyticsData={analyticsData.data} />
    </main>
  );
}
