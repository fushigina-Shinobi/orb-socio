import Layout from '@/components/Common/Layout';
import '@/styles/globals.css';
import { bindings as wagmiBindings } from '../domain/wallet';
import { polygonMumbai, polygon } from 'wagmi/chains';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { LensProvider, production } from '@lens-protocol/react-web';

const { publicClient, webSocketPublicClient } = configureChains(
  [polygonMumbai, polygon],
  [publicProvider()]
);

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
  connectors: [
    new InjectedConnector({
      options: {
        shimDisconnect: false,
      },
    }),
  ],
});

const lensConfig = {
  bindings: wagmiBindings(),
  environment: production,
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <WagmiConfig config={config}>
        <LensProvider config={lensConfig}>
          <Layout hideLayout={Component.hideLayout}>
            <Component {...pageProps} />
          </Layout>
        </LensProvider>
      </WagmiConfig>
    </>
  );
}
