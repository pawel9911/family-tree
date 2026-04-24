import { User, Key, Folder, CreditCard, ShieldCheck } from "lucide-react";
import { TabsList, TabsTrigger } from "~/shared/ui/tabs";

export const UserPanelTabsList = () => {
  return (
    <TabsList variant="custom">
      <TabsTrigger variant="custom" value="dane">
        <User size={20} /> Profil użytkownika
      </TabsTrigger>
      <TabsTrigger variant="custom" value="projekty">
        <Folder size={20} /> Twoje projekty
      </TabsTrigger>
      <TabsTrigger variant="custom" value="dostepy">
        <Key size={20} /> Klucze dostępu API
      </TabsTrigger>
      <TabsTrigger variant="custom" value="platnosci">
        <CreditCard size={20} /> Historia i faktury
      </TabsTrigger>

      <div className="h-px bg-gray-100 my-4 hidden lg:block" />

      <TabsTrigger
        variant="custom"
        value="bezpieczenstwo"
        className="text-orange-600 data-[state=active]:bg-orange-600"
      >
        <ShieldCheck size={20} /> Bezpieczeństwo
      </TabsTrigger>
    </TabsList>
  );
};
