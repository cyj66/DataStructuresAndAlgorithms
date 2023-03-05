function countSort(arr) {
  let max=arr[0]
  arr.forEach(value=> {
    if (value > max) {
      max=value
    }
  });
  let countArr = new Array(max + 1)
  arr.forEach(value => {
    if (!countArr[value])
      countArr[value] = 0
    countArr[value]++
  })
  let index = 0;
  countArr.forEach((value,i)=> {
    arr[index]= i
    index++
  })
  return arr
}
console.log(countSort([2, 66, 8, 7, 34, 65,9]));
