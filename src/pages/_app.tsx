import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "@pangeacyber/react-auth";

export default function App({ Component, pageProps }: AppProps) {
  const hostedLoginURL = process?.env?.NEXT_PUBLIC_AUTHN_HOSTED_LOGIN_URL || "";
  const authConfig = {
    clientToken: process?.env?.NEXT_PUBLIC_AUTHN_CLIENT_TOKEN || "",
    domain: process?.env?.NEXT_PUBLIC_PANGEA_DOMAIN || "",
  };

  // Redirect back to path that login was started from on successful login attempt
  const handleLogin = (appData: AppState) => {
    router.push(appData.returnPath);
  }
  
  return (
    <AuthProvider loginUrl={hostedLoginURL} onLogin={handleLogin} config={authConfig}>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
