let len
function heapSort(arr) {
  buildMaxHeap(arr);
  for (let i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i);
    //断开最后一个结点
    len--;
    //调整index为0的结点
    heapify(arr, 0);
  }
  return arr;
}
//创建最大堆
function buildMaxHeap(arr) {
  len = arr.length
  //从最后一个结点的父节点开始调整，不一定要精确命中该父节点，在它位置之后开始遍历即可
  for (let i = Math.floor(len / 2); i >= 0; i--) {
    heapify(arr, i);
  }
}
//通过不断与其左右子结点比较调整该结点
function heapify(arr, i) {
  let left = 2 * i + 1,
    right = 2 * i + 2,
    largest = i;
  if (left < len && arr[largest] < arr[left]) {
    largest = left;
  }
  if (right < len && arr[largest] < arr[right]) {
    largest = right;
  }
  if (largest != i) {
    swap(arr, i, largest);
    heapify(arr, largest);
  }
}
function swap(arr, x, y) {
  [arr[x], arr[y]] = [arr[y], arr[x]];
}

console.log(heapSort([5,9,7,8,6,3,4,22,1]))