import { Open_Sans } from "next/font/google";
import "./globals.css";

import { headers } from "next/headers";
import WalletContextProvider from "../context/walletProvider";
import Header from "./header/header";
import Bottom from "./bottomNavigation/bottom";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Nft",
  description: "Discover NFT",
};

export default function RootLayout({ children }) {
  const cookies = headers().get("cookie");

  return (
    <html lang="en">
      <body className={` ${openSans.className} antialiased`}>
        <WalletContextProvider cookies={cookies}>
          {" "}
          <div className="w-full h-screen max-h-screen overflow-hidden bg-primary py-4 flex items-center justify-center">
            <div className="max-w-md mx-auto w-full py-8 px-10 h-full bg-white rounded-[40px] shadow-lg flex flex-col">
              <Header />
              {children}
              <Bottom />
            </div>
          </div>
        </WalletContextProvider>
      </body>
    </html>
  );
}
