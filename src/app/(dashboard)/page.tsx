import { getAnalytics } from "@/lib/get-analytics";
import Charts from "@/components/chart/charts";

type DashboardProps = {
  searchParams: {
    age?: string | null;
    gender?: string | null;
    startDate?: string | null;
    endDate?: string | null;
  };
};
export default async function Dashboard({ searchParams }: DashboardProps) {
  const analyticsData = await getAnalytics(
    searchParams?.age!,
    searchParams?.gender!,
    searchParams?.startDate!,
    searchParams?.endDate!
  );

  return (
    <main className="flex flex-1 flex-col gap-2 p-4 lg:gap-6 lg:p-6">
      <Charts analyticsData={analyticsData.data} />
    </main>
  );
}
