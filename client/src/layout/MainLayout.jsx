import React, { useState } from "react";
import AsideBar from "../components/common/AsideBar";
import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";

const MainLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-800">
      {/* Sidebar (absolute on small, static on larger screens) */}
      <AsideBar
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      {/* Main content */}
      <div
        className={`transition-all duration-300 ${
          isCollapsed ? "md:ms-13" : "md:ms-64"
        }`}
      >
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-61 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
        <Header
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
