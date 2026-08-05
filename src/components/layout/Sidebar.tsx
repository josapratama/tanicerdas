"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Leaf,
  Bird,
  Calculator,
  CalendarDays,
  Wallet,
  ChevronLeft,
  ChevronRight,
  Sprout,
  X,
  BookOpen,
  Egg,
  Bug,
} from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/kebun", label: "Kebun Tanaman", icon: Leaf },
  { href: "/ternak", label: "Peternakan Ayam", icon: Bird },
  { href: "/penyakit", label: "Diagnosa Penyakit", icon: Bug },
  { href: "/kalkulator", label: "Kalkulator", icon: Calculator },
  { href: "/panduan", label: "Panduan Bertani", icon: BookOpen },
  { href: "/panduan-ternak", label: "Panduan Berternak", icon: Egg },
  { href: "/planner", label: "Planner Tanam", icon: CalendarDays },
  { href: "/keuangan", label: "Keuangan", icon: Wallet },
];

interface SidebarProps {
  mobileOpen: boolean;
  onMobileClose: () => void;
}

export default function Sidebar({ mobileOpen, onMobileClose }: SidebarProps) {
  const pathname = usePathname();
  // Always start as false on server to avoid hydration mismatch.
  // Read localStorage only after mount on the client.
  const [collapsed, setCollapsed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("sidebar-collapsed") === "true";
    setCollapsed(stored);
    setMounted(true);
  }, []);

  function toggleCollapsed() {
    const next = !collapsed;
    setCollapsed(next);
    localStorage.setItem("sidebar-collapsed", String(next));
  }

  // Close mobile sidebar on route change
  useEffect(() => {
    onMobileClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Close on Escape key
  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if (e.key === "Escape" && mobileOpen) onMobileClose();
    }
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [mobileOpen, onMobileClose]);

  const sidebarContent = (
    <aside
      className={cn(
        "flex flex-col h-full bg-sidebar text-sidebar-foreground transition-all duration-300 ease-in-out",
        // Desktop: collapsible width; Mobile: always full width (240px)
        "w-60 md:shrink-0",
        collapsed && "md:w-16",
      )}
    >
      {/* Logo */}
      <div
        className={cn(
          "flex items-center gap-3 px-4 py-5 border-b border-sidebar-border",
          collapsed && "md:justify-center md:px-2",
        )}
      >
        <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary shrink-0">
          <Sprout className="w-5 h-5 text-primary-foreground" />
        </div>
        {/* Always show text on mobile overlay; hide when desktop-collapsed */}
        <div className={cn(collapsed && "md:hidden")}>
          <p className="font-bold text-base text-sidebar-foreground leading-tight">
            TaniTernak
          </p>
          <p className="text-xs text-sidebar-foreground/60">
            Manajemen Terpadu
          </p>
        </div>
        {/* Close button — mobile only */}
        <button
          onClick={onMobileClose}
          className="ml-auto p-1 rounded-lg text-sidebar-foreground/60 hover:text-sidebar-foreground md:hidden"
          aria-label="Tutup menu"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto scrollbar-thin">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              title={collapsed ? item.label : undefined}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150",
                isActive
                  ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground",
                collapsed && "md:justify-center md:px-2",
              )}
            >
              <Icon className="w-5 h-5 shrink-0" />
              <span className={cn(collapsed && "md:hidden")}>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Collapse button — desktop only */}
      <div className="p-2 border-t border-sidebar-border hidden md:block">
        <button
          onClick={toggleCollapsed}
          className="flex items-center justify-center w-full py-2 rounded-xl text-sidebar-foreground/60 hover:bg-sidebar-accent hover:text-sidebar-foreground transition-colors text-xs gap-2"
        >
          {/* Render placeholder until mounted to match server HTML */}
          {!mounted || !collapsed ? (
            <>
              <ChevronLeft className="w-4 h-4" />
              <span>Ciutkan</span>
            </>
          ) : (
            <ChevronRight className="w-4 h-4" />
          )}
        </button>
      </div>
    </aside>
  );

  return (
    <>
      {/* Desktop sidebar — always visible */}
      <div className="hidden md:flex">{sidebarContent}</div>

      {/* Mobile sidebar — overlay drawer with animation */}
      <>
        {/* Backdrop */}
        <div
          className={cn(
            "fixed inset-0 z-40 bg-black/50 md:hidden transition-opacity duration-300",
            mobileOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none",
          )}
          onClick={onMobileClose}
          aria-hidden="true"
        />
        {/* Drawer */}
        <div
          className={cn(
            "fixed inset-y-0 left-0 z-50 md:hidden flex transition-transform duration-300 ease-in-out",
            mobileOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          {sidebarContent}
        </div>
      </>
    </>
  );
}
