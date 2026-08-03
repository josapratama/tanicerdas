"use client";

import { usePathname, useRouter } from "next/navigation";
import { Moon, Sun, Bell, X, Download, Upload, Menu } from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  useCallback,
  startTransition,
} from "react";
import { getNotifications, type Notification } from "@/lib/notifications";
import { exportAllData, importAllData, useAppStore } from "@/lib/store";
import { showToast } from "@/components/ui/toast";
import { cn } from "@/lib/utils";

const pageTitles: Record<string, { title: string; desc: string }> = {
  "/": { title: "Dashboard", desc: "Selamat datang di TaniTernak" },
  "/kebun": {
    title: "Kebun Tanaman",
    desc: "Kelola semua tanaman hortikultura",
  },
  "/ternak": { title: "Peternakan Ayam", desc: "Pantau kandang dan produksi" },
  "/kalkulator": {
    title: "Kalkulator Budidaya",
    desc: "Hitung kebutuhan dan BEP",
  },
  "/penyakit": {
    title: "Diagnosa Penyakit",
    desc: "Referensi dan riwayat penyakit",
  },
  "/panduan": {
    title: "Panduan Bertani",
    desc: "Tata cara bertani, pupuk, dan penyakit tanaman",
  },
  "/panduan-ternak": {
    title: "Panduan Berternak",
    desc: "Tata cara berternak, penyakit ternak, obat & vaksin",
  },
  "/planner": {
    title: "Planner Tanam",
    desc: "Jadwal kegiatan kebun & kandang",
  },
  "/keuangan": { title: "Keuangan", desc: "Pantau pemasukan dan pengeluaran" },
};

const notifTypeCls: Record<Notification["type"], string> = {
  danger: "bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800",
  warning:
    "bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-800",
  info: "bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800",
  success:
    "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800",
};

const notifDotCls: Record<Notification["type"], string> = {
  danger: "bg-red-500",
  warning: "bg-yellow-500",
  info: "bg-blue-500",
  success: "bg-green-500",
};

export default function Header({ onMenuClick }: { onMenuClick: () => void }) {
  const pathname = usePathname();
  const router = useRouter();
  // Start with false on both server and client to avoid hydration mismatch.
  // useEffect runs only on the client after hydration, so it's safe to read
  // localStorage there and apply the correct theme without SSR/client diff.
  const [dark, setDark] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isDark = stored === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    // Batch both state updates in one render to avoid cascading
    startTransition(() => {
      setDark(isDark);
      setMounted(true);
    });
  }, []);
  const [notifOpen, setNotifOpen] = useState(false);
  const [notifs, setNotifs] = useState<Notification[]>([]);
  // Bug fix: persist dismissed IDs to sessionStorage so they survive re-renders
  // but reset on page refresh (intentional — stale notifications should reappear)
  const [dismissedIds, setDismissedIds] = useState<Set<string>>(() => {
    if (typeof window === "undefined") return new Set();
    try {
      const stored = sessionStorage.getItem("notif-dismissed");
      return stored ? new Set(JSON.parse(stored)) : new Set<string>();
    } catch {
      return new Set<string>();
    }
  });
  const notifRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const info = pageTitles[pathname] ?? { title: "TaniTernak", desc: "" };

  const refreshNotifs = useCallback(() => {
    setNotifs(getNotifications());
  }, []);

  // Bug fix: subscribe to Zustand store changes for instant notification updates.
  // Use queueMicrotask to defer the initial setState call out of the effect body
  // and avoid the "setState synchronously within effect" warning.
  useEffect(() => {
    queueMicrotask(refreshNotifs);
    const unsubscribe = useAppStore.subscribe(() => refreshNotifs());
    return unsubscribe;
  }, [refreshNotifs]);

  // Close on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setNotifOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const visibleNotifs = notifs.filter((n) => !dismissedIds.has(n.id));

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  function handleExport() {
    const json = exportAllData();
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `taniternak-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast("Backup data berhasil diunduh", "success");
  }

  function handleImportClick() {
    fileInputRef.current?.click();
  }

  function handleImportFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const text = ev.target?.result as string;
      const result = importAllData(text);
      if (result.success) {
        showToast("Data berhasil dipulihkan dari backup", "success");
        window.location.reload();
      } else {
        showToast(result.error ?? "Gagal import data", "error");
      }
    };
    reader.readAsText(file);
    // reset input so same file can be re-selected
    e.target.value = "";
  }

  const now = new Date();
  const dateStr = now.toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="flex items-center justify-between px-3 sm:px-6 py-3 sm:py-4 bg-card border-b border-border">
      {/* Hamburger — mobile only */}
      <button
        onClick={onMenuClick}
        className="p-2 -ml-1 rounded-xl hover:bg-muted transition-colors text-muted-foreground hover:text-foreground md:hidden"
        aria-label="Buka menu"
      >
        <Menu className="w-5 h-5" />
      </button>
      <div className="min-w-0">
        <h1 className="text-lg sm:text-xl font-bold text-foreground truncate">
          {info.title}
        </h1>
        <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">
          {info.desc}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-muted-foreground hidden lg:block mr-1">
          {dateStr}
        </span>

        {/* Backup / Restore buttons */}
        <button
          onClick={handleExport}
          title="Export backup data"
          className="p-2 rounded-xl hover:bg-muted transition-colors text-muted-foreground hover:text-foreground hidden sm:flex"
        >
          <Download className="w-4 h-4" />
        </button>
        <button
          onClick={handleImportClick}
          title="Import backup data"
          className="p-2 rounded-xl hover:bg-muted transition-colors text-muted-foreground hover:text-foreground hidden sm:flex"
        >
          <Upload className="w-4 h-4" />
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept=".json"
          className="hidden"
          onChange={handleImportFile}
        />

        {/* Notifications */}
        <div className="relative" ref={notifRef}>
          <button
            onClick={() => {
              setNotifOpen(!notifOpen);
              setNotifs(getNotifications());
            }}
            className="relative p-2 rounded-xl hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
            title="Notifikasi"
          >
            <Bell className="w-5 h-5" />
            {visibleNotifs.length > 0 && (
              <span className="absolute top-1 right-1 min-w-4 h-4 px-0.5 bg-red-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                {visibleNotifs.length}
              </span>
            )}
          </button>

          {notifOpen && (
            <div className="absolute right-0 top-12 w-[calc(100vw-1.5rem)] sm:w-80 max-w-sm bg-card border border-border rounded-2xl shadow-xl z-50 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-border">
                <p className="font-semibold text-sm text-foreground">
                  Notifikasi
                </p>
                {visibleNotifs.length > 0 && (
                  <button
                    onClick={() => {
                      const all = new Set(notifs.map((n) => n.id));
                      setDismissedIds(all);
                      sessionStorage.setItem(
                        "notif-dismissed",
                        JSON.stringify([...all]),
                      );
                    }}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Tandai semua dibaca
                  </button>
                )}
              </div>
              <div className="max-h-80 overflow-y-auto">
                {visibleNotifs.length === 0 ? (
                  <div className="px-4 py-8 text-center text-sm text-muted-foreground">
                    <Bell className="w-8 h-8 mx-auto mb-2 opacity-30" />
                    <p>Tidak ada notifikasi</p>
                  </div>
                ) : (
                  visibleNotifs.map((n) => (
                    <div
                      key={n.id}
                      className={cn(
                        "flex items-start gap-3 px-4 py-3 border-b border-border last:border-0 cursor-pointer hover:bg-muted/50 transition-colors",
                        notifTypeCls[n.type],
                      )}
                      onClick={() => {
                        if (n.link) router.push(n.link);
                        setNotifOpen(false);
                      }}
                    >
                      <span
                        className={cn(
                          "w-2 h-2 rounded-full mt-1.5 shrink-0",
                          notifDotCls[n.type],
                        )}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-foreground">
                          {n.title}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {n.message}
                        </p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setDismissedIds((prev) => {
                            const next = new Set([...prev, n.id]);
                            sessionStorage.setItem(
                              "notif-dismissed",
                              JSON.stringify([...next]),
                            );
                            return next;
                          });
                        }}
                        className="shrink-0 text-muted-foreground hover:text-foreground"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-xl hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
          title="Toggle tema"
        >
          {/* Render placeholder until mounted to avoid hydration mismatch */}
          {!mounted ? (
            <Moon className="w-5 h-5 opacity-0" />
          ) : dark ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>

        {/* User avatar */}
        <div className="flex items-center gap-2 pl-3 border-l border-border">
          <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
            P
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-foreground leading-tight">
              Pak Tani
            </p>
            <p className="text-xs text-muted-foreground">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
}
