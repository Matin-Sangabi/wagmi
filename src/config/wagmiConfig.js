import constants from "../constants/constants";
import { mainnet, sepolia } from "viem/chains";
import { metadata } from "./metaData";
import { createConfig, http } from "wagmi";
import { walletConnect, injected, coinbaseWallet } from "wagmi/connectors";

export const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
  ssr: true,
  connectors: [
    walletConnect({
      projectId: constants.PROJECT_ID,
      metadata,
      showQrModal: false,
    }),
    injected({ shimDisconnect: true }),
    coinbaseWallet({
      appName: metadata.name,
      appLogoUrl: metadata.icons[0],
    }),
  ],
});
