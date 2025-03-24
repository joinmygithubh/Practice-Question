class Stack {
  constructor(size) {
    this.stk = [];
    this.size = size;
  }

  Push(element) {
    if (this.isFull()) return "Stack is already full";
    this.stk.push(element);
  }

  Pop() {
    if (this.isEmpty()) {
      return "Stack is already empty";
    }
    return this.stk.pop();
  }
  
  peek() {
    if (this.isEmpty()) return "Stack is empty";

    return this.stk[this.stk.length - 1];
  }

  isEmpty() {
    return this.stk.length === 0;
  }

  isFull() {
    return this.stk.length === this.size;
  }
}

let stack = new Stack(4);

stack.Push(20);
stack.Push(30);
stack.Push(40);
stack.Push(50);
console.log(stack.Pop());
stack.Push(80);
console.log(stack.Push(90));
stack.Push(100);
console.log(stack.Pop());
console.log(stack.Pop());
console.log(stack.Pop());
console.log(stack.Pop());
console.log(stack.Pop());
console.log(stack.Pop());
console.log(stack.Pop());
