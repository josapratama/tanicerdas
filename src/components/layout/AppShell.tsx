"use client";

import { useState, useCallback } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const openSidebar = useCallback(() => setMobileSidebarOpen(true), []);
  const closeSidebar = useCallback(() => setMobileSidebarOpen(false), []);

  return (
    <>
      <Sidebar mobileOpen={mobileSidebarOpen} onMobileClose={closeSidebar} />
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <Header onMenuClick={openSidebar} />
        <main
          className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-6 pb-6 sm:pb-8 animate-fade-in"
          style={{
            paddingBottom: "max(1.5rem, env(safe-area-inset-bottom, 1.5rem))",
          }}
        >
          {children}
        </main>
      </div>
    </>
  );
}
