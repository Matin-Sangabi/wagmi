import PropTypes from "prop-types";
import { createWeb3Modal } from "@web3modal/wagmi/react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { WagmiProvider } from "wagmi";
import { config } from "../config/wagmiConfig";
import constants from "../constants/constants";


const queryClient = new QueryClient();

createWeb3Modal({
  wagmiConfig: config,
  projectId: constants.PROJECT_ID,
  enableAnalytics: true,
  enableOnramp: true,
});

WalletProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function WalletProvider({ children }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
