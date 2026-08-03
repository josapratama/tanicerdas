"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, XCircle, AlertTriangle, Info, X } from "lucide-react";

export type ToastType = "success" | "error" | "warning" | "info";

export interface ToastItem {
  id: string;
  message: string;
  type: ToastType;
}

const toastConfig = {
  success: {
    icon: CheckCircle2,
    cls: "bg-green-50 border-green-200 text-green-800 dark:bg-green-900/30 dark:border-green-700 dark:text-green-300",
    iconCls: "text-green-500",
  },
  error: {
    icon: XCircle,
    cls: "bg-red-50 border-red-200 text-red-800 dark:bg-red-900/30 dark:border-red-700 dark:text-red-300",
    iconCls: "text-red-500",
  },
  warning: {
    icon: AlertTriangle,
    cls: "bg-yellow-50 border-yellow-200 text-yellow-800 dark:bg-yellow-900/30 dark:border-yellow-700 dark:text-yellow-300",
    iconCls: "text-yellow-500",
  },
  info: {
    icon: Info,
    cls: "bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-900/30 dark:border-blue-700 dark:text-blue-300",
    iconCls: "text-blue-500",
  },
};

// ─── Global toast state ──────────────────────────────────────────────────────
type ToastListener = (toasts: ToastItem[]) => void;
let toasts: ToastItem[] = [];
const listeners = new Set<ToastListener>();

function notify() {
  listeners.forEach((l) => l([...toasts]));
}

export function showToast(message: string, type: ToastType = "success") {
  const id = Math.random().toString(36).slice(2);
  toasts = [...toasts, { id, message, type }];
  notify();
  setTimeout(() => {
    toasts = toasts.filter((t) => t.id !== id);
    notify();
  }, 3500);
}

// ─── Provider / container ────────────────────────────────────────────────────
export function ToastContainer() {
  const [items, setItems] = useState<ToastItem[]>([]);

  useEffect(() => {
    listeners.add(setItems);
    return () => {
      listeners.delete(setItems);
    };
  }, []);

  if (items.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-2 max-w-sm w-full pointer-events-none">
      {items.map((item) => {
        const cfg = toastConfig[item.type];
        const Icon = cfg.icon;
        return (
          <div
            key={item.id}
            className={`flex items-start gap-3 px-4 py-3 rounded-xl border shadow-lg pointer-events-auto animate-in slide-in-from-bottom-2 fade-in ${cfg.cls}`}
          >
            <Icon className={`w-5 h-5 shrink-0 mt-0.5 ${cfg.iconCls}`} />
            <p className="flex-1 text-sm font-medium leading-snug">
              {item.message}
            </p>
            <button
              onClick={() => {
                toasts = toasts.filter((t) => t.id !== item.id);
                notify();
              }}
              className="shrink-0 opacity-60 hover:opacity-100 transition-opacity"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
