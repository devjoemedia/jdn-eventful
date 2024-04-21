import { SessionContext } from "@/components/providers/SessionProvider";
import { useContext } from "react";

const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default useSession;
