function bubbleSort(arr) {
  //每一轮外循环会把一个最大的数放到最后，n-1次循环即可
  for (let i = 0; i < arr.length - 1; i++){
    //除去已排序好放到最后的数，对前面的进行比较
    for (let j = 0; j < arr.length-1-i; j++){
      if (arr[j] > arr[j + 1]) {
        [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
      }
    }
  }
  return arr
}
console.log(bubbleSort([2,66,8,7,34,65]))