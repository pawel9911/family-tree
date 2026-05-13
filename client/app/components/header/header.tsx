import { useEffect, useState, type ReactNode } from "react";
import { Link } from "react-router";
import { useAuthContext } from "~/providers";
import Logo from "../../assets/logo.png";
import { cn } from "~/utils";

interface HeaderProps {
  children?: ReactNode;
  className?: string;
  variant?: "fixed" | "sticky";
  forceVisible?: boolean;
}

export const Header = ({
  children,
  className,
  variant = "fixed",
  forceVisible = false,
}: HeaderProps) => {
  const { user } = useAuthContext();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (forceVisible) return;

    const handleScroll = () =>
      setIsScrolled(window.scrollY > window.innerHeight);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isShown = forceVisible || isScrolled;

  return (
    <header
      className={cn(
        "z-50 w-full transition-all duration-300 ease-in-out bg-card/80 rounded-xl",
        variant === "fixed" ? "fixed top-0 left-0" : "sticky top-0",
        isShown ? "translate-y-6 opacity-100" : "-translate-y-full opacity-0",
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between px-3 rounded-xl bg-secondary/10 backdrop-blur-md",
          className,
        )}
      >
        <Link to={user ? "/dashboard" : "/"}>
          <img src={Logo} className="max-h-16 aspect-auto py-1.5" alt="logo" />
        </Link>
        {children}
      </div>
    </header>
  );
};
