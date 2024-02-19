import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Header from "@/src/components/layout/Header";
import Footer from "@/src/components/layout/Footer";

const activeChain = "mumbai";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      activeChain={activeChain}
    >
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </ThirdwebProvider>
  );
}

export default MyApp;
