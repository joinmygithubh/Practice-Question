/*
Stack {
  push()
  top()
  pop()
  isEmpty()
}
*/
class Queue {
    constructor() {
      this.S1 = []; // Stack 1
      this.S2 = []; // Stack 2
    }
    // Push element into the queue
    push(value) {
      // Move all elements from S1 to S2
      while (this.S1.length > 0) {
        this.S2.push(this.S1.pop());
      }
      // Add the new element to S1
      this.S1.push(value);
  
      // Move all elements back from S2 to S1
      while (this.S2.length > 0) {
        this.S1.push(this.S2.pop());
      }
    }
    // Remove an element from the queue
    pop() {
      if (this.S1.length === 0) {
        console.log("Queue is empty");
        return;
      }
      return this.S1.pop();
    }
    // Get the front element of the queue
    front() {
      if (this.S1.length === 0) {
        console.log("Queue is empty");
        return;
      }
      return this.S1[this.S1.length - 1];
    }
    // Check if the queue is empty
    isEmpty() {
      return this.S1.length === 0;
    }
  }
  // Example usage:
  const queue = new Queue();
  queue.push(1);
  queue.push(2);
  queue.push(3);
  
  