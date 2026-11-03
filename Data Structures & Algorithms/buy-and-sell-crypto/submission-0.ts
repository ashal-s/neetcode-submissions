class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
    let min = 0;
    let profit = 0

    for (let day = 0; day < prices.length; day++) {
        if (prices[day] < prices[min]) {
            min = day;
        }
        else{
            profit = Math.max(profit, prices[day] - prices[min]);
        }
    }

    return profit;
    }
}
