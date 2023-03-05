function backpack(capacity, weights, values) {
  let load = 0;
  let val = 0;
  for (let i = 0; i < values.length && load < capacity; i++) {
    // {1}
    if (weights[i] <= capacity - load) {
      // {2}
      val += values[i];
      load += weights[i];
    } else {
      const r = (capacity - load) / weights[i]; // {3}
      val += r * values[i];
      load=capacity
    }
  }
  return val;
}
console.log(backpack(6, [2, 3, 4], [3, 4, 5]));
