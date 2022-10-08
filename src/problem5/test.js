const { ethers } = require("hardhat");

const ADDR = "0xDedcc4e2AF6C02C84927BA648a41dCeD8c990619"; // your contract address
const ABI = [
  {
    inputs: [
      { internalType: "address", name: "wallet", type: "address" },
      { internalType: "address[]", name: "tokens", type: "address[]" },
    ],
    name: "getBalances",
    outputs: [
      {
        components: [
          { internalType: "address", name: "token", type: "address" },
          { internalType: "uint256", name: "balance", type: "uint256" },
        ],
        internalType: "struct GetTokenBalances.TokenBalance[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const ADDRESS = "0xB5b334Ee8BC3252C6e8aDB3a78aB66331dF079D1"; // some wallet address with token balance
const TOKENS = [
  // token contract addresses
  "0x7544CD170C004e08DEE28d9636AC12D1D02b6F6E",
  "0x2336D0C404E10ad344E64cf0cF6819A0276d9E56",
  "0x7343B4691645Fc475A6013148bcc7fe79510B62F",
];

// you can use your own RPC provider url (no need to deploy to mainnet)
const provider = new ethers.providers.JsonRpcProvider(
  "https://eth-goerli.g.alchemy.com/v2/d1nd4bP5oI684ocOpXLjERxBCDql-Y7j"
);

const test = async () => {
  const contract = new ethers.Contract(ADDR, ABI, provider);

  const balances = await contract.getBalances(ADDRESS, TOKENS);

  return balances;
};

test().then(console.log);
