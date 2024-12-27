import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  useAccount,
  useConnect,
  useConnectors,
  useDisconnect,
  WagmiProvider,
} from 'wagmi';
import './App.css';
import { config } from './config';
import TotalSupply from './contracts/TotalSupply';
import BalanceOf from './contracts/BalanceOf';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          just an app
          <ConnectWallet />
        </QueryClientProvider>
      </WagmiProvider>
    </>
  );
}

const ConnectWallet = () => {
  const { address } = useAccount();
  const { connect } = useConnect();
  const connectors = useConnectors();
  const { disconnect } = useDisconnect();
  if (address) {
    return (
      <div>
        You are connected {address}
        <br />
        <TotalSupply />
        <BalanceOf />
        <button
          onClick={() => {
            disconnect();
          }}
        >
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <div>
      {connectors.map((connector) => (
        <button key={connector.uid} onClick={() => connect({ connector })}>
          {connector.name}
        </button>
      ))}
    </div>
  );
};
export default App;
