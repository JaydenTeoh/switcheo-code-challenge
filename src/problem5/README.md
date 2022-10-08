## Task 5

Deploy a utility EVM contract with a function to retrieve all token balances given a wallet address and the token contract addresses.

How your contract will be tested:
`./test.js`
```js
const { ethers } = require("ethers");

const ADDR = "…";   // your contract address
const ABI = […];    // your contract ABI

const ADDRESS = "…"; // some wallet address with token balance
const TOKENS = [    // token contract addresses
	"…",
	"…",
];

// you can use your own RPC provider url (no need to deploy to mainnet)
const provider = ethers.providers.getDefaultProvider();

const test = async () => {
	const contract = new ethers.Contract(ADDR, ABI, provider);

  const balances = await contract.getBalances(ADDRESS, tokens);
	
	return balances;
};

test().then(console.log);
```

## Expected Output:
The output should be organized as one `token amount` per object.
```js
[
  {
    token: "0x123d475e13aa54a43a7421d94caa4459da021c77",
    balance: "9988887462734227" // its okay if this is typed ethers.BigNumber
  },
  {
    token: "0x55f6823de9642f47e80ed4845a55aa8430cb4ec6",
    balance: "899998285714286"
  },
  …
]
```

## My Solution

1. Use the IERC20 interface to implement `balanceOf(account)` function so that we can return the token balances of the wallet address
2. Create a new contract `GetTokenBalance.sol` that:
	- Defines a struct TokenBalance which takes in an address (token address) and an uint256 (token balance)
	- Defines a function `getBalance(address, address[])` which takes in the wallet address and array of tokens as parameters and returns a struct array TokenBalance[]
	- Loop through the array of address and use the IERC20 `balanceOf(account)` function to get the token balances of the wallet
	- Create a new TokenBalance datatype for each token address and the balance of the token in the wallet, then add it in the TokenBalance array
	- Return TokenBalance[]
3. Create deploy script that uses `ethers.deploy()` to deploy the GetTokenBalance contract onto the Mainnet/Testnet
4. Test the contract by deploying to Goerli Testnet and calling `getBalance()` on wallet address and token addresses from Goerli Etherscan
5. Check if the returned values matches the expected output.

