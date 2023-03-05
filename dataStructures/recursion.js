//阶乘
function recursion(n) {
  if (n === 1 || n === 0) return 1;
  return n * recursion(n - 1);
}
function recursion2(n) {
  for (let i = n - 1; i > 0; i--) {
    n *= i;
  }
  return n;
}
//斐波那契数列
function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(recursion(5));
console.log(recursion2(5));
console.log(fibonacci(5));

