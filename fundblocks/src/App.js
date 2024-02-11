import React from 'react';
import AllRoutes from './config/AllRoutes';
import '@rainbow-me/rainbowkit/styles.css';
import { darkTheme, getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

const ottochain = {
  id: 8900, // You can assign a unique identifier as needed
  name: "Otto Chain",
  network: "Ottochain", 
  iconUrl: "https://example.com/icon.svg", // Update the icon URL if necessary
  iconBackground: "#fff", // Update icon background color if needed
  nativeCurrency: {
    decimals: 18, 
    name: "OTTO", // Name of the native currency
    symbol: "OTTO", // Symbol for the native currency
  },
  rpcUrls: {
    public: {
      http: ["https://gateway.mainnet.octopus.network/eth/otto/andk2nmw198f7on2"], 
    },
    default: {
      http: ["https://gateway.mainnet.octopus.network/eth/otto/andk2nmw198f7on2"], 
    },
  },
  blockExplorers: {
    default: {
      name: "OTTO",
      url: "https://otto.blockscout.mainnet.octopus.network/", 
    },
  },
  contracts: {
    // Add contract addresses if needed
  },
  testnet: true, 
};


const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    // mainnet,
    
    ottochain
  ],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'fundblock',
  projectId: 'YOUR_PROJECT_ID',
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

const App = () => {
  return (
    <WagmiConfig config={wagmiConfig}>
    <RainbowKitProvider chains={chains}
      theme={darkTheme({
        accentColor: 'rgb(93,228,247)'
      })}>
    <div>
      <AllRoutes />
    </div>
    </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default App;
