import { Outlet } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import { Button } from "@heroui/react";
import { BiLogoProductHunt } from "react-icons/bi";
import { FaUserFriends, FaUserSecret } from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";

interface SidebarItem {
  id?: number;
  title: string;
  icon: JSX.Element;
  link?: string;
  subItems?: { title: string; link: string }[];
}

const sidebarItems: SidebarItem[] = [
  { title: "Dashboard", icon: <RiDashboardFill />, link: "/admin/dashboard" },
  {
    id: 1,
    title: "Properties",
    icon: <BiLogoProductHunt />,
    subItems: [
      { title: "All Properties", link: "/admin/property/all" },
      { title: "Add Property", link: "/admin/property/add" },
      { title: "Visit Requests", link: "/admin/property/visit-request" },
    ],
  },
  { title: "Brokers", icon: <FaUserSecret />, link: "/admin/brokers/all" },
  { title: "Users", icon: <FaUserFriends />, link: "/admin/users" },
];

export default function DefaultAdminLayout() {
  return (
    <div className="relative flex flex-col w-full min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container px-6 mx-auto max-w-7xl flex justify-between items-center h-14">
          <h1 className="text-xl font-semibold">Admin Dashboard</h1>
          <Button variant="flat" color="danger">
            Logout
          </Button>
        </div>
      </header>

      {/* Sidebar + Content Wrapper */}
      <div className="flex flex-1 h-full">
        {/* Sidebar */}
        <Sidebar sidebarItems={sidebarItems} />

        {/* Main Content */}
        <main
          style={{
            height: "100%",
            overflowY: "auto",
            padding: "1rem",
            flex: 1,
          }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}
