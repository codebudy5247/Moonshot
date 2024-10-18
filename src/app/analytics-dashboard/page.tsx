import { getAnalytics } from "./get-analytics";
import Charts from "./_components/charts";

type DashboardProps = {
  searchParams: {
    age?: string | null;
    gender?: string | null;
    startDate?: string | null;
    endDate?: string | null;
  };
};
export default async function Dashboard({ searchParams }: DashboardProps) {
  const ageFilter = searchParams.age || "";
  const genderFilter = searchParams.gender || "";
  const startDate = searchParams.startDate || "";
  const endDate = searchParams.endDate || "";

  const analyticsData = await getAnalytics({
    ageFilter,
    genderFilter,
    startDate,
    endDate,
  });

  return (
    <main className="flex flex-1 flex-col gap-2 p-4 lg:gap-6 lg:p-6">
      <Charts analyticsData={analyticsData.data} />
    </main>
  );
}
