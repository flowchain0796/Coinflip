export const FLOW_CHAIN_ID = "0x221"; // 5000 in decimal
export const FLOW_RPC_URL = "https://testnet.evm.nodes.onflow.org/";

export const FLOW_CHAIN_CONFIG = {
  chainId: FLOW_CHAIN_ID,
  chainName: "EVM on Flow (testnet)",
  nativeCurrency: {
    name: "FLOW",
    symbol: "FLOW",
    decimals: 18,
  },
  rpcUrls: [FLOW_RPC_URL],
  blockExplorerUrls: ["https://evm-testnet.flowscan.io"],
};