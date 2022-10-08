/*Completed using MySQL as I am not familiar with PostgreSQL, 
will look into PostgresSQL and its implementations in the near future*/

WITH filteredAddress AS /*Filter balances table to just address and totalAmount (in USD) for each address*/
    (SELECT 
        address, 
        SUM(
            balances.amount* 
                (CASE
                    WHEN balances.denom='usdc' THEN 0.000001
                    WHEN balances.denom='swth' THEN 0.00000005
                    WHEN balances.denom='tmz' THEN 0.003
                END)
        ) as totalAmount /*Return the sum of the balance of token(in USD) in each address*/
    FROM 
        balances
    GROUP BY 
        address /*Remove duplicates address*/
    )
SELECT 
    filteredAddress.address 
FROM 
    filteredAddress
JOIN 
    trades
ON 
    filteredAddress.address = trades.address /*Conjoin the filtered table and trades table by matching address*/ 
WHERE 
    filteredAddress.totalAmount >= 500 /*Filter address that have at least 500usd in wallet*/
AND 
    trades.block_height > 730000 /*Filter transactions with block height more than 730000*/
GROUP BY
    filteredAddress.address; /*Remove duplicates of addresses*/