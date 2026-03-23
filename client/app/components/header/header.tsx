import { type ReactNode } from "react";
import { Link } from "react-router";
import { useAuthContext } from "~/providers";
import Logo from "../../assets/logo.png";

interface HeaderProps {
  children?: ReactNode;
}

export const Header = ({ children }: HeaderProps) => {
  const { user } = useAuthContext();

  return (
    <header className="flex justify-between p-3 rounded-b-2xl bg-pink-400/10">
      <Link to={user ? "/dashboard" : "/"}>
        <img src={Logo} className="max-h-16 aspect-auto" alt="logo" />
      </Link>
      <div className="flex items-center">{children}</div>
    </header>
  );
};
