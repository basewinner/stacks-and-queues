/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    const node = new Node(val);
    const temp = this.first;
    this.first = node;

    // stack is empty
    if (this.size === 0) {
      this.first = node;
      this.last = node;
    // non-empty stack
    } else {
      this.first.next = temp;
    }

    this.size += 1;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
       // stack is empty
       if (this.size === 0) {
        throw new Error("Stack is empty -- pop method is Prohibited");
      }
    
      const node = this.first;
      const aft = this.first.next;
  
      // stack contains only one item
      if (this.size === 1) {
        this.last = null;
      }
  
      this.first = aft;
      this.size -= 1;
      return node.val;
    }
  
    /** peek(): return the value of the first node in the stack. */
  
    peek() {
      return this.first.val;
    }
  
    /** isEmpty(): return true if the stack is empty, otherwise false */
  
    isEmpty() {
      return this.size === 0;
    }
  }


module.exports = Stack;
