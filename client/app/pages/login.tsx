import { Button } from "~/shared/ui";
import { Link } from "react-router";
import { GoogleIcon } from "~/shared/icons";
import { useAuthContext } from "~/providers";

export const handle = {
  title: (
    <>
      Zacznij tworzyć <br /> z nami.
    </>
  ),
  description:
    "Zaloguj się, aby uzyskać dostęp do swoich projektów i zarządzać kredytami w jednym miejscu.",
};

const LoginPage = () => {
  const { loginWithGoogle } = useAuthContext();

  return (
    <div className="w-full flex items-center justify-center p-8">
      <div className="w-full max-w-sm space-y-8">
        <div className="text-center lg:text-left">
          <h2 className="text-4xl font-black italic uppercase tracking-tight text-primary leading-none">
            Witaj ponownie
          </h2>
          <p className="mt-3 text-sm font-semibold text-gray-400 uppercase tracking-widest">
            Wybierz metodę logowania
          </p>
        </div>

        <Button
          variant="outline"
          className="w-full h-14 border-2 gap-3"
          onClick={loginWithGoogle}
        >
          <GoogleIcon />
          <span className="font-bold italic uppercase tracking-tight">
            Zaloguj się przez Google
          </span>
        </Button>

        <p className="text-center text-sm font-semibold text-gray-400">
          Nie masz jeszcze konta?{" "}
          <Button asChild variant="link" className="font-black">
            <Link to="/register">Zarejestruj się</Link>
          </Button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
