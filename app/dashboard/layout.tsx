import SideNav from "@/app/ui/dashboard/sidenav";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  console.log("dashboard layout render");
  return (
    <div className="flex flex-col h-screen md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
};

export default DashboardLayout;
