class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor() {
    this.root = null;
  }
  insert(key) {
    const node = new Node(key);
    if (this.root == null) this.root = node;
    else {
      this.insertNode(this.root, key);
    }
  }
  insertNode(node, key) {
    const node2 = new Node(key);
    if (key < node.key) {
      if (node.left === null) {
        node.left = node2;
      } else this.insertNode(node.left, key);
    } else {
      if (node.right === null) {
        node.right = node2;
      } else this.insertNode(node.right, key);
    }
  }
  //中序遍历
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback);
  }
  inOrderTraverseNode(node, callback) {
    if (node !== null) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node.key);
      this.inOrderTraverseNode(node.right, callback);
    }
  }
  //先序遍历
  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback);
  }
  preOrderTraverseNode(node, callback) {
    if (node !== null) {
      callback(node.key);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }
  //寻找最小值
  min() {
    return this.minNode(this.root)
  }
  minNode(node) {
    //迭代
    // while (node !== null && node.left !== null) {
    //   node=node.left
    // }
    //递归
    if (node.left === null) return node
    return this.minNode(node.left)
  }
  //根据key搜寻特定结点
  search(key) {
    return this.searchNode(this.root,key)
  }
  searchNode(node, key) {
    if(node===null) return null
    if (node.key === key) return node   
    else if (node.key < key) {
      return this.searchNode(node.right,key)
    }
    else {
      return this.searchNode(node.left,key)
    }
  }
  //根据key移除特定结点
  remove(key) {
    return this.removeNode(this.root,key)
  }
  removeNode(node, key) {
    if (node === null) return null
    if (node.key < key) {
      node.right = this.removeNode(node.right, key)
      return node
    }
    else if (node.key > key) {
      node.left = this.removeNode(node.left, key)
      return node
    }
    //找到key了
    else {
      //移除一个叶子结点
      if (node.left === null && node.right === null) {
        node = null;
        return node
      }
      //移除有一个子结点的结点
      if (node.left === null) {
        node = node.right
        return node
      } else if(node.right===null){
        node = node.left
        return node
      }
      //移除有两个子结点的结点
      const aux = this.minNode(node.right)
      node.key = aux.key
      node.right = this.removeNode(node.right, aux.key)
      return node
    }
  }
}

const tree = new BST();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.inOrderTraverse((x) => {
  console.log(x);
});
console.log("-----------")
tree.preOrderTraverse((x) => {
  console.log(x);
});
console.log(tree.min())
console.log(tree.search(20))
console.log(tree.search(50))

