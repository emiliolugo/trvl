

import DashTabsPage from "@/components/dashboardTabs";
import PersonalInfoPage from "@/components/personalinfo";
import { SideBar } from "@/components/sidebar";

export default function DashboardPage() {
  return (
    <div className="h-screen flex">
      <SideBar />
      <div className="py-10">
      <PersonalInfoPage />
      
      
      <div>
        <DashTabsPage />
      </div>
      </div>
    </div>
  );
}
