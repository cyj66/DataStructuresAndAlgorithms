function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i],array[randomIndex]]=[array[randomIndex],array[i]]
  }
  return array;
}
console.log(shuffle([2, 66, 8, 7, 34, 65]))
