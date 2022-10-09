## Task 4

Implement a script to retrieve the specified holders of [$SWTH token](https://bscscan.com/token/0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c) on the [Binance Smart Chain](https://coinmarketcap.com/alexandria/article/what-is-binance-smart-chain) network. <br />
BSC Block Explorer: [https://bscscan.com/](https://bscscan.com/) <br />
$SWTH Token Contract: `0xc0ecb8499d8da2771abcbf4091db7f65158f1468`<br />
Addresses to look up:
```
0xb5d4f343412dc8efb6ff599d790074d0f1e8d430
0x0020c5222a24e4a96b720c06b803fb8d34adc0af
0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392
```
How your script will be tested:
```
ts-node ./retrieve-holders.ts
```
### Expected Output:
The output should be organized as one `address amount` per line.
*Note, as this is live production contract, the amount you retrieve will be different from the sample below.*
```
0xb5d4f343412dc8efb6ff599d790074d0f1e8d430 99,888,874.62734227
0x0020c5222a24e4a96b720c06b803fb8d34adc0af 7,970,573.69197209
0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392 2,894,918.96152958
```

## My Solution

The $SWTH Token is an ERC20 implementation. Hence, it should provide a `balanceOf(account)` getter function in its contract.<br />
By using `new ethers.Contract(address,abi,signerOrProvider)` to create an instance of the token contract, we can call the `balanceOf(account)` function to retrieve the token balance of the wallet addresses.
