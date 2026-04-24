import { User } from "lucide-react";
import { Tabs } from "~/shared/ui";
import { UserPanelTabsList } from "../user-panel-tabs-list";

export const UserPanel = () => {
  return (
    <div className="container my-12">
      <div className="flex items-center gap-4 mb-10 ml-2">
        <div className="p-4 rounded-2xl bg-primary shadow-lg shadow-primary/20">
          <User className="text-white" size={32} />
        </div>
        <div>
          <h1 className="text-3xl font-black italic uppercase tracking-tighter text-primary leading-none">
            Panel Sterowania
          </h1>
          <p className="text-sm font-semibold opacity-60 uppercase tracking-widest mt-1">
            Zarządzanie kontem i zasobami
          </p>
        </div>
      </div>
      <Tabs orientation="vertical" defaultValue="dane">
        <UserPanelTabsList />
      </Tabs>
    </div>
  );
};
