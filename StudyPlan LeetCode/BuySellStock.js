/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let result = 0;
  let buy = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (buy > prices[i]) buy = prices[i];
    else if (prices[i] - buy > result) result = prices[i] - buy;
  }
  return result;
};
