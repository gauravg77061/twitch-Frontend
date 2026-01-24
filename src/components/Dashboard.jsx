import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="w-screen min-h-screen bg-gray-50">
      <NavBar />

      {/* Below navbar */}
      <div className="flex pt-16">
        <SideBar />

        {/* Main Content */}
        <main className="flex-1 min-h-[calc(100vh-64px)] p-6">
          <Outlet/>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
