class Stack{
  constructor() {
    this.item = {},
    this.count=0
  }
  push(el) {
    this.count++;
    this.item[this.count]=el
  }
  size() {
    return this.count
  }
  pop() {
    if (this.isEmpty()) {
      return "本来就为空"
    }
    else {
      const pop=this.item[this.size()]
      delete this.item[this.size()]
      this.count--
      return pop
    }   
  }
  peek() {
    return this.item[this.size()]
  }
  isEmpty() {
    return this.count===0
  }
  clear() {
    this.item = {}
    this.count=0
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

//将10进制数转换为n进制
function ten2n(num,base) {
  const numStack = new Stack()
  const str="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let result = ''
  if(base<2||base>36) return ''
  while (num > 0) { 
    let remainder = str[Math.floor(num % base)]
    num=Math.floor(num / base)
    numStack.push(remainder)
  }
  while (!numStack.isEmpty()) {
    result=result+numStack.pop() 
  }
  return Number(result)
}
console.log(ten2n(10, 2))
console.log(ten2n(103,16))
