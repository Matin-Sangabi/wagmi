import "@/styles/globals.css";
import { WalletProvider } from "../provider/walletProvider";

export default function App({ Component, pageProps }) {
  return (
    <WalletProvider>
      <Component {...pageProps} />
    </WalletProvider>
  );
}
