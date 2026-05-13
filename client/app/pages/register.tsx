import { Link } from "react-router";
import { useAuthContext } from "~/providers";
import { GoogleIcon } from "~/shared/icons";
import type { UnauthRouteHandle } from "~/shared/types";
import { Button } from "~/shared/ui";

export const handle: UnauthRouteHandle = {
  title: (
    <>
      Dołącz do <br /> rewolucji.
    </>
  ),
  description:
    "Odbierz darmowe kredyty na start i zacznij zarządzać swoimi plikami z poziomu najszybszego panelu na rynku.",
};

const RegisterPage = () => {
  const { loginWithGoogle } = useAuthContext();

  return (
    <div className="w-full flex items-center justify-center p-8">
      <div className="w-full max-w-sm space-y-8">
        <div className="text-center lg:text-left">
          <h2 className="text-4xl font-black italic uppercase tracking-tight text-primary leading-none">
            Nowe konto
          </h2>
          <p className="mt-3 text-sm font-semibold text-gray-400 uppercase tracking-widest">
            Zajmie to tylko 30 sekund.
          </p>
        </div>

        <Button
          variant="outline"
          className="w-full h-14 border-2 gap-3"
          onClick={loginWithGoogle}
        >
          <GoogleIcon />
          <span className="font-bold italic uppercase tracking-tight">
            Rejestracja przez Google
          </span>
        </Button>

        <p className="text-center text-sm font-semibold text-gray-400">
          Masz już konto?{" "}
          <Button asChild variant="link" className="font-black">
            <Link to="/login">Zaloguj się</Link>
          </Button>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
