const insertSort=require('../sort/insertSort').insertSort
function insertSearch(arr,value) {
  let sortArr = insertSort(arr)
  let low = 0, high = sortArr.length - 1
  while (low <= high) {
    let delta=(value-sortArr[low])/(sortArr[high]-sortArr[low])
    let position=low+Math.floor((high-low)*delta)
    if (value < sortArr[position]) {
      high=position-1
    }
    else if (value > sortArr[position]) {
      low=position+1
    }
    else{
      return position
    }
  }
  return -1
}
console.log(insertSearch([2, 66, 8, 7, 34, 65],8))