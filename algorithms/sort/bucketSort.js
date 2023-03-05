let insertSort=require("./insertSort").insertSort
// 自定义桶容量（能装的数据范围）
function bucketSort(arr,bucketSize=5) {
  let min = arr[0], max = arr[0]
  arr.forEach(value => {
    if (min > value) min = value
    if(max<value) max=value
  })
  let bucketCount = Math.ceil((max - min) / 5)
  let buckets=new Array(bucketCount)
  for (let i = 0; i < buckets.length; i++){
    buckets[i]=[]
  }
  //映射函数，将各个元素映射到对应桶中
  for (let i = 0; i < arr.length; i++) { 
    buckets[Math.floor((arr[i]-min)/bucketSize)].push(arr[i])
  }
  arr.length=0
  for (let i = 0; i < buckets.length; i++){
    insertSort(buckets[i])
    arr.push(...buckets[i])
  }
  return arr
}
console.log(bucketSort([2, 66, 8, 7, 34, 65,9]));
