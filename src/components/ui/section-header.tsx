import type { ElementType } from "react";

interface SectionHeaderProps {
  icon: ElementType;
  title: string;
  subtitle: string;
  color: string;
}

/**
 * Shared section header used by panduan/page.tsx and panduan-ternak/page.tsx.
 * Eliminates the identical local SectionHeader component in each file.
 */
export function SectionHeader({
  icon: Icon,
  title,
  subtitle,
  color,
}: SectionHeaderProps) {
  return (
    <div className="flex items-start gap-4 mb-8">
      <div className={`p-3 rounded-2xl ${color} shrink-0`}>
        <Icon className="w-7 h-7" />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
        <p className="text-muted-foreground mt-1">{subtitle}</p>
      </div>
    </div>
  );
}
