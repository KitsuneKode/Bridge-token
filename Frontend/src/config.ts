import { http, createConfig, injected } from 'wagmi';
import { mainnet } from 'viem/chains';
import { metaMask } from 'wagmi/connectors';

export const config = createConfig({
  chains: [mainnet],
  connectors: [metaMask(), injected()],
  transports: {
    [mainnet.id]: http(
      'https://mainnet.infura.io/v3/819949284a5a42738f3178a37a61acf0'
    ),
  },
});
