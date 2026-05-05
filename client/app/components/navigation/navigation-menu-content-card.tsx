import type { ContentCard } from "~/shared/types";
import { Button } from "~/shared/ui";
import { cn } from "~/utils";

interface NavigationMenuContentCardProps extends ContentCard {
  className?: string;
}

export const NavigationMenuContentCard = ({
  title,
  description,
  buttonText,
  icon: Icon,
  onClick,
  className,
}: NavigationMenuContentCardProps) => {
  return (
    <div
      className={cn(
        "col-span-2 relative flex flex-col justify-between overflow-hidden rounded-xl",
        "bg-linear-to-b from-secondary/20 to-secondary/5 p-4",
        "border border-secondary/10",
        className,
      )}
    >
      <Icon
        className="absolute -right-2 -top-2 size-16 text-primary/5 rotate-12"
        aria-hidden="true"
      />

      <div className="relative z-10">
        <div className="mb-3 inline-flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon size={18} />
        </div>
        <h4 className="text-sm font-semibold tracking-tight text-foreground">
          {title}
        </h4>
        <p className="mt-1.5 text-[11px] leading-normal text-muted-foreground">
          {description}
        </p>
      </div>

      <Button
        size="sm"
        onClick={onClick}
        className="relative z-10 mt-4 h-8 w-full rounded-lg text-[11px] font-medium transition-transform active:scale-95"
      >
        {buttonText}
      </Button>
    </div>
  );
};
