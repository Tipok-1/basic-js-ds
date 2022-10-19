const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }  
root() {
    return this.rootNode;
  }

  add(data) {
    let newNode = new Node(data);
    if (!this.rootNode) {
      this.rootNode = newNode;
    } else {
      addNode(this.rootNode, newNode);
    }

    function addNode(node, newNode) {
      if (newNode.data > node.data) {
        if (node.right === null) {
          node.right = newNode;
        } else {
          addNode(node.right, newNode);
        }
      } else {
        if (node.left === null) {
          node.left = newNode;
        } else {
          addNode(node.left, newNode);
        }
      }
    }
  }

  has(data) {
    function findNode(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      if (data < node.data) {
        return findNode(node.left, data);
      } else {
        return findNode(node.right, data);
      }
    }
    return findNode(this.rootNode, data);
  }

  find(data) {
    function returnNode(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        return returnNode(node.left, data);
      } else {
        return returnNode(node.right, data);
      }
    }
    return returnNode(this.rootNode, data);
  }

  remove(data) {
    function minNode(node) {
      if (node.left === null) return node;
      else return minNode(node.left);
    }
    this.rootNode = remooveNode(this.rootNode, data);

    function remooveNode(node, data) {
      if (!node) {
        return null;
      } else if (data < node.data) {
        node.left = remooveNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = remooveNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          node = null;
          return node;
        }

        if (!node.left) {
          node = node.right;
          return node;
        } else if (!node.right) {
          node = node.left;
          return node;
        }

        let copyNode = minNode(node.right);
        node.data = copyNode.data;
        node.right = remooveNode(node.right, copyNode.data);
        return node;
      }
    }
  }

  min() {
    let minNode = this.rootNode;
    while (minNode.left) {
      minNode = minNode.left;
    }
    return minNode.data;
  }

  max() {
    let maxNode = this.rootNode;
    while (maxNode.right) {
      maxNode = maxNode.right;
    }
    return maxNode.data;
  }

view(current = this.rootNode){
  if(current != null)
    {
      this.view(current.right);
      console.log(current);
      this.view(current.left);
    }
  }
}
module.exports = {
  BinarySearchTree
};

  /*=================*/
  /* constructor(){
  this.tree = null;
  this.tree_root = null;
  this.tree_value = [];
 }
 root() {
  return this.tree_root;
}
add(data, current = this.tree) {
  if(this.tree  == null)
  {
    current = new Node(data);
    this.tree = current;
    if(data)
      this.tree_value.push(data);
    if(this.tree_root == null)
      this.tree_root = current;
  }
  else if(current == null && current != this.tree){
    current = new Node(data);
    this.tree_value.push(data);
  }
  else if(data > current.data){
    current.right = this.add(data,current.right);
  } 
  else if(data < current.data){
    current.left = this.add(data,current.left);
  }
  return current;
}

has(data){
  if(this.tree_value.length != 0)
  {
    return this.tree_value.includes(data);
  }
  return null;
}
find(data){
  while(this.tree != null)
  {
    if(this.tree.data == data)
    {
      let value = this.tree;
      this.tree = this.tree_root;
      return value;
    }
    else if(data > this.tree.data){
      this.tree = this.tree.right;
    }
    else if(data < this.tree.data){
      this.tree = this.tree.left;
    }
  }
  this.tree = this.tree_root;
  return null;
}


delete_full_branch(node, arr){
  //let node = this.find(data);
  if(node != null){
    if(node.left != null)
    {
      arr.push(node.left.data);
      this.tree_value.splice(this.tree_value.indexOf(node.left.data),1);
      this.delete_full_branch(node.left,arr);
      node.left = null;
    }
    if(node.right != null)
    {
      arr.push(node.right.data);
      this.tree_value.splice(this.tree_value.indexOf(node.right.data),1);
      this.delete_full_branch(node.right,arr);
      node.right = null;
    }
  }
  return arr;
}
remove(data){
  if(this.has(data))
  {
    let previous = null;
    let right = '';
    while(this.tree != null){
      if(this.tree.data == data)
      {
        if(this.tree.data  == this.tree_root.data)
        {
          this.tree_root = null;
          this.tree_value = [];
          let arr = this.delete_full_branch(this.tree,[]);
          this.tree = null;
          for(let i =0; i < arr.length; i++){
            this.add(arr[i]);
          }
          break;
        }
        if(right = 'right')
        {
          previous.right = null;
        }
        else if(right = 'left')
        {
          previous.left = null;
        }
        this.tree_value.splice(this.tree_value.indexOf(this.tree.data),1);
        let arr = this.delete_full_branch(this.tree,[]);
        this.tree = this.tree_root;
        for(let i =0; i < arr.length; i++){
          this.add(arr[i]);
        }
        break;
      }
      else if(data > this.tree.data)
      {
        previous = this.tree;
        right = 'right';
        this.tree = this.tree.right;
      }
      else if(data < this.tree.data)
      {
        previous = this.tree;
        right = 'left';
        this.tree = this.tree.left;
      }
    }
    this.tree = this.tree_root;
  }
  else{
    return null;
  }
}
min(){
  return Math.min(...this.tree_value);
}
max(){
  return Math.max(...this.tree_value);
}
view(current = this.tree){
  if(current != null)
    {
      this.view(current.right);
      console.log(current);
      this.view(current.left);
    }
  } */