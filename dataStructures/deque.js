//双端队列
class Deque{
  constructor() {
    this.item = {}
    this.left = 0;
    this.right = 0;
  }
  addBack(el) {
    this.item[this.right] = el
    this.right++
  }
  addFront(el) {
    if (this.size() === 0) {
      this.addBack(el)
    } else if (this.left > 0) {
      this.left--
      this.item[this.left] = el
    } else {
      for (let i = this.right; i > 0; i--){
        this.item[i] = this.item[i - 1];
      }
      this.item[0] = el;
      this.right++;
    }
  }
  removeBack() {
    delete this.item[this.right]
    this.right--
  }
  removeFront() {
    delete this.item[this.left]
    this.left++
  }
  peekFront() {
    return this.item[this.left]
  }
  peekBack() {
    return this.item[this.right]
  }
  size() {
    return this.right-this.left
  }
}