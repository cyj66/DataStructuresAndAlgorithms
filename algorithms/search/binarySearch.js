const insertSort=require('../sort/insertSort').insertSort
function binarySearch(arr,value) {
  let sortArr = insertSort(arr)
  let low = 0, high = sortArr.length - 1
  while (low <= high) {
    let middle=Math.floor((low+high)/2)
    if (value < sortArr[middle]) {
      high=middle-1
    }
    else if (value > sortArr[middle]) {
      low=middle+1
    }
    else{
      return middle
    }
  }
  return -1
}
console.log(binarySearch([2, 66, 8, 7, 34, 65],8))