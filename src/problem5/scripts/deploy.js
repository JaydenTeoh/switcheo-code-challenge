const { ethers, network } = require("hardhat");
const { verify } = require("../utils/verify");
require("dotenv").config();

async function main() {
  const getTokenBalancesFactory = await ethers.getContractFactory(
    "GetTokenBalances"
  );
  console.log("Deploying contract...");
  const getTokenBalances = await getTokenBalancesFactory.deploy();
  await getTokenBalances.deployed();
  console.log(`Deployed contract to: ${getTokenBalances.address}`);
  if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
    console.log("Verifying...");
    await getTokenBalances.deployTransaction.wait(3);
    await verify(getTokenBalances.address, []);
  }
  console.log("----------------------------------------------------");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
