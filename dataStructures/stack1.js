class Stack {
  constructor() {
    this.items = [];
  }
  push(el) {
    this.items.push(el);
  }
  pop() {
    this.items.pop();
  }
  size() {
    return this.items.length
  }
  peek() {
    return this.items[this.size()-1]
  }
  isEmpty() {
    return this.size()===0
  }
  clear() {
    this.items=[]
  }
}

const stack = new Stack()
stack.push(1)
stack.push(7)
stack.push(9)
console.log(stack)
console.log(stack.size())
console.log(stack.isEmpty())
stack.pop()
console.log(stack)
console.log(stack.peek())
stack.clear()
console.log(stack.size())

