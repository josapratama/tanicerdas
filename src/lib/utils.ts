import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { parseISO, format, isValid } from "date-fns";
import { id } from "date-fns/locale";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ─── Currency ─────────────────────────────────────────────────────────────────
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
}

export function formatCurrencyShort(amount: number): string {
  if (amount >= 1_000_000) return `Rp ${(amount / 1_000_000).toFixed(1)}jt`;
  if (amount >= 1_000) return `Rp ${(amount / 1_000).toFixed(0)}rb`;
  return `Rp ${amount.toLocaleString("id")}`;
}

// ─── Date ─────────────────────────────────────────────────────────────────────
/**
 * Safely parse a YYYY-MM-DD string without timezone shift.
 * Use this instead of new Date(dateStr) to avoid UTC offset issues.
 */
export function parseDate(dateStr: string): Date {
  // parseISO handles ISO 8601 strings correctly (YYYY-MM-DD treated as local)
  const d = parseISO(dateStr);
  if (isValid(d)) return d;
  // Fallback: append T00:00:00 to avoid UTC midnight -> local prev-day bug
  return new Date(dateStr + "T00:00:00");
}

export function formatDate(date: string | Date): string {
  const d = typeof date === "string" ? parseDate(date) : date;
  return format(d, "d MMMM yyyy", { locale: id });
}

export function formatShortDate(date: string | Date): string {
  const d = typeof date === "string" ? parseDate(date) : date;
  return format(d, "d MMM yyyy", { locale: id });
}

export function formatDateDisplay(date: string | Date): string {
  const d = typeof date === "string" ? parseDate(date) : date;
  return format(d, "EEEE, d MMMM yyyy", { locale: id });
}

export function formatMonthYear(date: string | Date): string {
  const d = typeof date === "string" ? parseDate(date) : date;
  return format(d, "MMMM yyyy", { locale: id });
}

export function todayString(): string {
  return format(new Date(), "yyyy-MM-dd");
}

// ─── Number helpers ───────────────────────────────────────────────────────────
export function clampPositive(val: number): number {
  return Math.max(0, val);
}

export function safeNumber(
  val: string | number | undefined,
  fallback = 0,
): number {
  const n = Number(val);
  return isNaN(n) ? fallback : n;
}

// ─── Validation helpers ───────────────────────────────────────────────────────
export function isPositiveNumber(val: string): boolean {
  const n = Number(val);
  return !isNaN(n) && n > 0;
}

export function isNonNegativeNumber(val: string): boolean {
  const n = Number(val);
  return !isNaN(n) && n >= 0;
}

// ─── CSV export helper ────────────────────────────────────────────────────────
/**
 * Build CSV content from headers + rows and trigger a browser download.
 * Replaces the copy-pasted Blob → createObjectURL → anchor pattern
 * that appeared in kebun, ternak, and keuangan pages.
 */
export function downloadCsv(
  filename: string,
  headers: string[],
  rows: (string | number)[],
): void {
  const csv = [headers, ...rows].join("\n");
  const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
