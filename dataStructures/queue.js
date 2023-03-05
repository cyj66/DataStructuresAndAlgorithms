class Queue{
  constructor() {
    this.item = {},
    this.rightCount = 0,
    this.leftCount=0
  }
  enqueue(el) {
    this.item[this.rightCount] = el
    this.rightCount++  
  }
  dequeue() {
    if (this.isEmpty()) return ''
    delete this.item[this.leftCount]
    this.leftCount++
  }
  size() {
    return this.rightCount-this.leftCount
  }
  isEmpty() {
    return this.size()===0
  }
  peek() {
    return this.item[this.leftCount]
  }
  clear() {
    this.item = {},
    this.rightCount = 0,
    this.leftCount=0
  }
}
const queue = new Queue()
queue.enqueue(2)
queue.enqueue(5)
queue.enqueue(8)
console.log(queue)
console.log(queue.isEmpty())
console.log(queue.size())
queue.dequeue()
queue.dequeue()
console.log(queue)
console.log(queue.peek())


