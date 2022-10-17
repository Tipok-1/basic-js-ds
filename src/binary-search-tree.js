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
  /*constructor(){
    this.tree = null;
    this.tree_deep = 0;
    this.ro = null;
    this.dat = [];
  }

  root() {
    return this.ro;
  }

  add(data) {
    if(this.tree == null)
    {
      this.tree = new Node(data);
      this.ro = this.tree;
      this.dat.push(this.tree.data);
    }
    else{
      let deep = this.tree_deep;
      let pred = this.tree;
      while(this.tree != null)
      {
        /*if(deep == 1)
        {
          break;
        }
        if(data > this.tree.data)
        {
          pred = this.tree;
          this.tree = this.tree.right;
        }
        else{
          pred = this.tree;
          this.tree = this.tree.left;
        }
        deep--;
      }
      if(data > pred.data){
        pred.right = new Node(data);
        this.dat.push(data);
        this.tree_deep++;
      }
      else{
        pred.left = new Node(data);
        this.dat.push(data);
        this.tree_deep++;
      }
    }
    this.tree = this.ro;
  }

  has(data) {
    return this.dat.includes(data);
  }

  find(data) {
    if(this.has(data))
    {
      let deep = this.tree_deep;
      let tree = this.tree;
      let pred = tree;
      console.log(this.tree);
      /*while(tree != null)
      {
        if(pred.data == data)
        {
          return pred;
        }
        console.log(tree);
        
        if(data > tree.data)
        {
          pred = tree;
          tree = tree.right;
        }
        else{
          pred = tree;
          tree = tree.left;
        }
        
        deep--;
      }
      return null;
    }
    else{
      return null;
    }
  
}


  remove(data) {
    if(this.find(data) != null)
    {
      let remove = this.find(data);
      let deep = this.tree_deep;
      let pred = null;
      let r_l = '';
      while(deep != 0)
      {
        if(this.tree.data == remove.data)
        {
          this.dat.splice(this.dat.indexOf(data),1);
          if(r_l !='')
          {
            if(r_l == 'right'){
              pred.right = this.tree.right;
            }
            if(r_l == 'left'){
              pred.left = this.tree.left;
            }
          }
          this.tree = null;
          this.tree = this.ro;
          return;
        }
        if(data > this.tree.data)
        {
          pred = this.tree;
          r_l = 'right';
          this.tree = this.tree.right;
        }
        else{
          pred = this.tree;
          r_l = 'left';
          this.tree = this.tree.left;
        }
        deep--;
      }
    }
    //this.tree = this.ro;
  }

  min() {
    if(this.ro == null)
    {
      return null;
    }
    else{
      return Math.min(...this.dat);
    }
  }

  max() {
    if(this.ro == null)
    {
      return null;
    }
    else{
      return Math.max(...this.dat);
    }
  }*/
}
module.exports = {
  BinarySearchTree
};