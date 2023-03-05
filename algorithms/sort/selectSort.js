function selectSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++){
      if (arr[min] > arr[j]) {
        min=j
      }
    }
    [arr[i],arr[min]]=[arr[min],arr[i]]
  }
  return arr
}
console.log(selectSort([2,66,8,7,34,65]))
