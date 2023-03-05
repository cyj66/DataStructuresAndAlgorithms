function minCoinChange(coins, amount) {
  let total=0,change=[]
  for (let i = coins.length-1; i >=0; i--){
    while (total + coins[i] <= amount) {
      total += coins[i]
      change.push(coins[i])
    }
  }
  return change
}
console.log(minCoinChange([1, 5, 10, 25], 36)); 
console.log(minCoinChange([1, 3,4], 6));  //不是最优解，精确还得看dp
