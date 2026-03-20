import Logo from "../../assets/logo.png";
import { Link } from "react-router";
import { Button } from "~/shared/ui";

export const Header = () => {
  return (
    <header className="flex justify-between p-3 rounded-b-2xl bg-pink-400/10">
      <Link to="/">
        <img src={Logo} className="max-h-16 aspect-auto" alt="logo" />
      </Link>
      <div className="flex items-center">
        <Button size="lg" asChild>
          <a href="/auth/google">Dołącz do nas</a>
        </Button>
      </div>
    </header>
  );
};
