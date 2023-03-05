function insertSort(arr) {
  for (let i = 1; i < arr.length; i++){
    let current=arr[i],j
    for (j = i - 1; j>=0&&arr[j] >current; j--){
      arr[j+1]=arr[j]
    }
    arr[j+1]=current
  }
  return arr
}
console.log(insertSort([2, 66, 8, 7, 34, 65]))
//由于是用node运行，故用commonJS导入导出，此处导出到桶排序
module.exports = { insertSort }

