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
          isCollapsed ? "md:ms-13" : "md:ms-50"
        }`}
      >
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-61 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
        <div className="md:hidden">
          <Header
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        </div>
        <div className="pt-[50px] md:pt-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
