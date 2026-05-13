import type { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  icon?: LucideIcon;
  title: string;
  variant?: "primary" | "secondary";
}

export const SectionHeader = ({
  icon: Icon,
  title,
  variant = "primary",
}: SectionHeaderProps) => {
  const colorMap = {
    primary: "bg-secondary/10 text-primary",
    secondary: "bg-white shadow-sm border border-gray-100 text-primary",
  };

  return (
    <div className="flex items-center gap-4 mb-4">
      {Icon && (
        <div className={`p-3 rounded-xl ${colorMap[variant]}`}>
          <Icon size={20} />
        </div>
      )}
      <h2 className="text-2xl font-bold text-primary tracking-tight">
        {title}
      </h2>
    </div>
  );
};
