import { Link, type LinkProps } from "react-router";
import type { ContentLink } from "~/shared/types";
import { NavigationMenuLink } from "~/shared/ui";

interface NavigationMenuContentItemProps extends ContentLink {
  to: LinkProps["to"];
}

export const NavigationMenuContentItem = ({
  title,
  description,
  icon: Icon,
  to,
}: NavigationMenuContentItemProps) => {
  return (
    <NavigationMenuLink asChild className="group">
      <Link to={to}>
        {Icon && (
          <Icon className="mt-1 size-4 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
        )}
        <div className="space-y-1">
          <div className="text-sm font-medium leading-none group-hover:text-primary transition-colors">
            {title}
          </div>
          {description && (
            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
              {description}
            </p>
          )}
        </div>
      </Link>
    </NavigationMenuLink>
  );
};
