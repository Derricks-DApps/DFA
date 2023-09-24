import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { WagmiConfig, createConfig, mainnet } from 'wagmi'
import { createPublicClient, http } from 'viem'

import Layout from "./layout/Layout"
import Routes from "./layout/Routes";

const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: mainnet,
    transport: http()
  }),
})

const App = () => {
  return (
    <WagmiConfig config={config}>
  <Router>
    <Layout>
      <Routes />
    </Layout>
  </Router>
  </WagmiConfig>
  );
}

export default App;