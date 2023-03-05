function backpack(capacity, weights, values, n) {
  const kS = [];
  for (let i = 0; i <= n; i++) {
    // {1}
    kS[i] = [];
  }
  for (let i = 0; i <= n; i++) {
    for (let w = 0; w <= capacity; w++) {
      if (i === 0 || w === 0) {
        // {2}
        kS[i][w] = 0;
      } else if (weights[i - 1] <= w) {
        // {3}
        const a = values[i - 1] + kS[i - 1][w - weights[i - 1]];
        const b = kS[i - 1][w];
        kS[i][w] = a > b ? a : b; // {4} max(a,b)
      } else {
        kS[i][w] = kS[i - 1][w]; // {5}
      }
    }
  }
  findValues(n, capacity, kS, weights, values); // {6} 增加的代码
  return kS[n][capacity]; // {7}
}

function findValues(n, capacity, kS, weights, values) {
  let i = n;
  let k = capacity;
  console.log("构成解的物品：");
  while (i > 0 && k > 0) {
    if (kS[i][k] !== kS[i - 1][k]) {
      console.log(
        `物品 ${i} 可以是解的一部分 w,v: ${weights[i - 1]}, ${values[i - 1]}`
      );
      i--;
      k -= kS[i][k];
    } else {
      i--;
    }
  }
}
const values = [3, 4, 5],
  weights = [2, 3, 4],
  capacity = 5,
  n = values.length;
console.log(backpack(capacity, weights, values, n));
