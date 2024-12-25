import { ReactNode, useEffect, useState } from "react";
import { initializeDimoSDK } from "@dimo-network/login-with-dimo";

interface DimoProviderProps {
  children: ReactNode;
}

export function DimoProvider({ children }: DimoProviderProps) {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    initializeDimoSDK({
      clientId: import.meta.env.VITE_DIMO_CLIENT_ID || "<default_client_id>",
      redirectUri:
        import.meta.env.VITE_DIMO_REDIRECT_URI || "<default_redirect_uri>",
    });
    setIsInitialized(true);
  }, []);

  if (!isInitialized) {
    return null; // or a loading spinner
  }

  return <>{children}</>;
}
