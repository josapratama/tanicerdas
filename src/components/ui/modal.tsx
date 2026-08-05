"use client";

import { X } from "lucide-react";
import type { ReactNode } from "react";

interface ModalProps {
  open: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
  /** Max width class, default "max-w-md" */
  maxWidth?: string;
}

/**
 * Shared modal overlay — replaces the copy-pasted
 * `fixed inset-0 bg-black/50 …` markup across all page files.
 */
export function Modal({
  open,
  title,
  onClose,
  children,
  maxWidth = "max-w-md",
}: ModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div
        className={`bg-card rounded-2xl p-4 sm:p-6 w-full ${maxWidth} shadow-xl max-h-[90vh] overflow-y-auto`}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-foreground">{title}</h3>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
