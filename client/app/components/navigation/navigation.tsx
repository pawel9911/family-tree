import { Link } from "react-router";
import type { NavigationConfig } from "~/shared/types";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "~/shared/ui";
import { NavigationMenuContentCard } from "./navigation-menu-content-card";
import { NavigationMenuContentItem } from "./navigation-menu-content-item";

interface NavigationProps {
  config: NavigationConfig;
}

export const Navigation = ({ config }: NavigationProps) => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-2">
        {config.map((item) => (
          <NavigationMenuItem key={item.title}>
            {item.content ? (
              <>
                <NavigationMenuTrigger className="font-semibold">
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-5 w-140 gap-3 p-4">
                    <NavigationMenuContentCard {...item.content.card} />

                    <div className="grid gap-2 col-span-3">
                      {item.content.links.map((link) => (
                        <NavigationMenuContentItem
                          key={link.title}
                          to={link.href}
                          {...link}
                        />
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </>
            ) : (
              <Link to={item.href}>
                <NavigationMenuLink className="font-semibold">
                  {item.title}
                </NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
