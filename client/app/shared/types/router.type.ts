import type { HeaderVariant } from "./header.type";

export interface HeaderRouteHandle {
  variant?: HeaderVariant;
}

export interface UnauthRouteHandle {
  title?: React.ReactNode;
  description?: string;
}
