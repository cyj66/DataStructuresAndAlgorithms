function radixSort(arr,radix=10) {
  if (arr.length < 2) return arr
  let min = arr[0], max = arr[0],buckets=[],aux=[]
  arr.forEach(value => {
    if (min > value) min = value
    if(max<value) max=value
  })
  let significantDigit=1  //有效数字，1,10,100...
  while ((max - min) / significantDigit >= 1) {
    //初始化桶
    for (let i = 0; i < radix; i++){
      buckets[i]=0
    }
    //得到某位上的数放入对应桶
    for (let i = 0; i < arr.length; i++){
      buckets[Math.floor(((arr[i] - min) / significantDigit) %radix)]++
    }
    //累加桶中个数，得到每个数的顺序
    for (let i = 1; i < radix; i++) { 
      buckets[i] += buckets[i - 1]; 
    } 
   //每个数的下标为其顺序值减1
    //从后往前放的原因：同一个桶里 如果有两个数字 那么下面的一个数字在原序列中 一定排在上面那个数字的后面 收集的时候 如果从前往后收集 
    //就是先收集上面的数字 存放的位置下标不好计算 并不知道桶里有几个数字
    for (let i = arr.length - 1; i >= 0; i--) { 
      //--是因为一个桶中可能有多个数字
      aux[--buckets[Math.floor(((arr[i] - min) / significantDigit) % radix) ]] = arr[i]; 
    } 
    for (let i = 0; i < arr.length; i++) { // {13} 
      arr[i] = aux[i]; 
    } 
    significantDigit*=radix
  }
  return arr
}
console.log(radixSort([96, 98, 94, 93, 91, 97]));
console.log(radixSort([2, 66, 8, 7, 34, 65,9]));


