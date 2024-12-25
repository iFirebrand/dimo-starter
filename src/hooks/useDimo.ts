import { useDimoAuthState } from "@dimo-network/login-with-dimo";

export function useDimo() {
  const { isAuthenticated, getValidJWT, email, walletAddress, getEmail } =
    useDimoAuthState();
  return { isAuthenticated, getValidJWT, email, walletAddress, getEmail };
}
