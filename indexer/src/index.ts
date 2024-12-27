import { id, JsonRpcProvider } from 'ethers';

const provider = new JsonRpcProvider(
  'https://mainnet.infura.io/v3/819949284a5a42738f3178a37a61acf0'
);

const pollBlock = async (blockNumber: number) => {
  const log = await provider.getLogs({
    address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    fromBlock: blockNumber,
    toBlock: blockNumber,
    topics: [id('Transfer(address,address,uint256)')],
  });

  console.log(log);
};

pollBlock(21495012);
