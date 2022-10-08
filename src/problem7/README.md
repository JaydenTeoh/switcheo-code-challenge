## Task 7

**Tables:**

  <br />**balances**
  id | address | denom | amount | block_height 
  --- | --- | --- | --- |--- 
  1 | 0xabab.. | usdc | 50000000000000 | 733755 
  2 | 0xabab..| swth | -20000000 |733757
  3 | 0xabab.. | usdc | -50000000000 | 733855
  ... | ... | ... | ... | ...
  
  <br />Each row in the balance table records the balance change. e.g. if address `0x99cc..` account is being deducted by `20000000swth`, it will be represented as row id=2. 

  A denom is akin to currency.
  <br />
  
  **trades**
  id | address | denom | amount | block_height 
  --- | --- | --- | --- |--- 
  1 | 0xabab.. | swth | 50000000000000 | 733756 
  2 | 0xabab..| usdc | 50000000000000 |733757
  3 | 0x67f3.. | swth | 72000000000000 | 733758
  ... | ... | ... | ... | ...

  <br />Each row in the trades table records the trade information. e.g. if address `0x99cc..` made a trade of `3500000000000usdc`, it will be represented as row id=2.
 
<br />Write an sql query that returns the the list of addresses which has recently made a trade, and wallet has at least $500 (total balance) in it.
 
<br />Constraints:

  1. Recently made a trade means block_height strictly greater than 730000.
  2. There is a total of 3 denoms. 
      1. usdc is worth $0.000001
      2. swth is worth $0.00000005
      3. tmz is worth $0.003
  3. Note that the usd values of the denoms changes frequently and we want to compute the usd value of the wallet on the fly without storing them into a table.

## My Solution
<br />
MySQL:

  1. Filter balances table to just address and totalAmount (in USD) for each distinct address
  2. Conjoin the filtered table and trades table by matching addresses
  3. Filter addresses that have at least 500usd in wallet
  4. Filter transactions with block height more than 730000
  5. Remove duplicates of addresses
