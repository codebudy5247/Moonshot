import Header from "@/components/header";
import AuthProvider from "../auth-provider";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-1 overflow-y-auto">
      <Header />
      {children}
    </div>
  );
};

export default DashboardLayout;
