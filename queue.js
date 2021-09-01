/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    // create new node
    const node = new Node(val);
    
    // add to empty queue
    if (this.size === 0) {
      this.first = node;
    // add to non-empty queue
    } else {
      this.last.next = node;
    }

    this.last = node;
    this.size += 1;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    // queue is empty
    if (this.size === 0) {
      throw new Error("The queue is empty -- dequeuing is prohibited");
    }
  
    const node = this.first;
    const aft = this.first.next;
    console.log("AFT: ", aft);

    // queue contains only one item
    if (this.size === 1) {
      this.last = null;
    }

    this.first = aft;
    this.size -= 1;
    return node.val;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}


module.exports = Queue;
