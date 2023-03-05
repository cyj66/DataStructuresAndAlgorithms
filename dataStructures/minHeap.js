class MinHeap{
  constructor() {
    this.heap=[]
  }
  getLeftIndex(index) {
    return 2*index+1
  }
  getRightIndex(index) {
    return 2*index+2
  }
  getParentIndex(index) {
    if (index === 0) return null
    return Math.floor((index - 1) / 2)
  }
  insert(value) {
    if (value != null) {
      this.heap.push(value)
      this.siftUp(this.heap.length-1)
    }
  }
  siftUp(index) {
    let parent=this.getParentIndex(index)
    while (index > 0 && this.heap[parent] > this.heap[index]) {
      this.swap(this.heap, parent, index)
      index=parent
      parent=this.getParentIndex(index)
    }
  }
  // swap(arr, x, y) {
  //   let temp = arr[x]
  //   arr[x] = arr[y]
  //   arr[y]=temp
  // }
  swap(arr, x, y) {
    [arr[x],arr[y]]=[arr[y],arr[x]]
  }
  findMin() {
    return this.heap[0]
  }
}

const heap = new MinHeap(); 
heap.insert(2); 
heap.insert(3); 
heap.insert(4); 
heap.insert(5); 
heap.insert(1); 
console.log(heap)