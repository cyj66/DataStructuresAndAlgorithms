//结点
class Node{
  constructor(element) {
    this.element = element
    this.next=null
  }
}

class LinkedList{
  constructor() {
    this.count = 0;
    this.head = null;
  }
  push(el) {
    const node = new Node(el)
    let current
    if (!this.head) {
      this.head=node
    } else {
      current = this.head
      while (current.next) {
        current=current.next
      }
      current.next=node
    }
    this.count++
  }
  removeAt(index) {
    if (index < 0 || index >= this.count) return null
    else {
      let current=this.head
      if (index === 0) {
        this.head=current.next
      } else {
        let previous
        for (let i = 0; i < index; i++){
          previous = current;
          current=current.next
        }
        previous.next=current.next
      }
      this.count--
    }
  }
  getAt(index) {
    if (index < 0 || index >= this.count) return null
    else {
      let node=this.head
      for (let i = 0; i < index; i++){
        node=node.next
      }
      return node
    }
  }
  remove(el) {
    for (let i = 0; i < this.count; i++){
      if (this.getAt(i).element == el) {
        this.removeAt(i)
        return el
      }
    }
    return 'error'
  }
  insert(el, index) {
    const node = new Node(el)
    if (index === 0) {
      let current=this.head
      this.head = node
      node.next=current
    } else {
      const previous = this.getAt(index - 1)
      let current=previous.next
      previous.next = node
      node.next=current
    }
    this.count++
  }
  indexOf(el) {
    for (let i = 0; i < this.count; i++){
      if (this.getAt(i).element === el) {
        return i
      }
    }
    return -1
  }
}

const list = new LinkedList()
list.push(3)
list.push(7)
list.push(10)
list.push(6)
list.removeAt(2)
list.remove(3)
console.log(list.getAt(0))
console.log(list.indexOf(6))
console.log(list)