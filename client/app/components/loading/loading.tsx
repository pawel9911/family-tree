import { Loader2 } from "lucide-react";

export const Loading = () => {
  return (
    <div className="grid h-screen place-items-center">
      <Loader2 className="text-primary animate-spin" size={150} />
    </div>
  );
};
