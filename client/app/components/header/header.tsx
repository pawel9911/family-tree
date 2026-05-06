import { type ReactNode } from "react";
import { Link } from "react-router";
import { useAuthContext } from "~/providers";
import Logo from "../../assets/logo.png";
import { cn } from "~/utils";

interface HeaderProps {
  children?: ReactNode;
  className?: string;
}

export const Header = ({ children, className }: HeaderProps) => {
  const { user } = useAuthContext();

  return (
    <header
      className={cn(
        "flex items-center justify-between px-3 rounded-xl bg-secondary/10 backdrop-blur-md",
        className,
      )}
    >
      <Link to={user ? "/dashboard" : "/"}>
        <img src={Logo} className="max-h-16 aspect-auto py-1.5" alt="logo" />
      </Link>
      {children}
    </header>
  );
};
