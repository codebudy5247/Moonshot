import Header from "@/components/header";
const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-1 overflow-y-auto">
      <Header />
      {children}
      </div>
  );
};

export default DashboardLayout;
