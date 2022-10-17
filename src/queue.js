const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor(){
    this.q = null;
  }
  getUnderlyingList() {
    return this.q;
  }

  enqueue(value) {
    if(this.q ==null)
    {
      this.q = new ListNode(value);
    }
    else{
     let down_ellement = new ListNode(value);
     let last_ellement = this.q;
     while(last_ellement.next)
     {
      last_ellement = last_ellement.next;
     }
     last_ellement.next = down_ellement;
    }
  }

  dequeue() {
    let value = this.q.value;
    this.q = this.q.next;
    return value;
  }
}
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(3);
queue.enqueue(3);
module.exports = {
  Queue
};
