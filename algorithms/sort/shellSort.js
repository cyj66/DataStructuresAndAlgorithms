/*
 * @Description: 
 * @Autor: chenyongjia
 * @Date: 2021-12-17 15:46:10
 * @LastEditors: chenyongjia
 * @LastEditTime: 2022-03-23 09:47:51
 */
function shellSort(arr) {
  let gap = Math.floor(arr.length / 2)    //增量
  while (gap >= 1) {
    for (let i = gap; i < arr.length; i++){
      let current=arr[i],j
      for (j = i - gap; j >= 0 && arr[j] > current; j -= gap){
        arr[j+gap]=arr[j]
      }
      arr[j+gap]=current
    }
    gap = Math.floor(gap / 2)
  }
  return arr
}
console.log(shellSort([2,66,8,7,34,65]))