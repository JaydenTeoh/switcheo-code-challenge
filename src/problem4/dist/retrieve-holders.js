"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const provider = new ethers_1.ethers.providers.JsonRpcProvider("https://bsc-dataseed1.binance.org/");
const addresses = [
    "0xb5d4f343412dc8efb6ff599d790074d0f1e8d430",
    "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
    "0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392",
];
// Set the SWTH balanceOf() and decimals() ABI
const balanceAndDecimalsABI = [
    {
        constant: true,
        inputs: [
            {
                name: "_owner",
                type: "address",
            },
        ],
        name: "balanceOf",
        outputs: [
            {
                name: "balance",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "decimals",
        outputs: [
            {
                name: "",
                type: "uint8",
            },
        ],
        payable: false,
        type: "function",
    },
];
const tokenContract = "0xc0ecb8499d8da2771abcbf4091db7f65158f1468";
async function main() {
    // Define the ERC-20 token contract
    const contract = new ethers_1.ethers.Contract(tokenContract, balanceAndDecimalsABI, provider);
    const decimals = await contract.decimals();
    //Loop through each wallet address and log the token amount
    for (let i = 0; i < addresses.length; i++) {
        let result = (await contract.balanceOf(addresses[i])).toNumber();
        //Commify to return result group by 3 digits separated by a comma
        //FormatUnits to specify the number of decimal places (8) that the token amlunt should have
        result = ethers_1.ethers.utils.commify(ethers_1.ethers.utils.formatUnits(result.toString(), decimals));
        result = console.log(addresses[i] + " " + result);
    }
}
main()
    .then(() => process.exit(0))
    .catch((error) => {
    console.log(error);
    process.exit(1);
});
