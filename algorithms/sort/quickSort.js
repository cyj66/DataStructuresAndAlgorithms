function quickSort(arr) {
  return quick(arr,0,arr.length-1)
}
function quick(arr, left, right) {
  if (arr.length > 1) {
    let index = partition(arr, left, right)
    if (left < index - 1) {
      quick(arr,left,index-1)
    }
    if (index < right) {
      quick(arr,index,right)
    }
  }
  return arr
}
//选择主元进行划分
function partition(arr, left, right) {
  let pivot = arr[Math.floor((left + right) / 2)]
  let i = left, j = right
  while (i <= j) {
    while (arr[i] < pivot) {
      i++
    }
    while (arr[j] > pivot) {
      j--
    }
    if (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]]
      i++;
      j--
    }
  }
  return i
}
console.log(quickSort([2, 66, 8, 7, 34, 65,9]));
