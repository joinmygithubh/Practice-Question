const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

var addOneToLinkedList = function (head) {
  function reverse(head) {
    let prev = null;
    let current = head;
    let next = null;

    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    return prev;
  }

  head = reverse(head);
  let current = head;
  let carry = 1;
  let prev = null;


  while (current !== null) {
    let sum = current.data + carry;
    current.data = sum % 10;
    carry = Math.floor(sum / 10);
    prev = current;
    current = current.next;
  }

  
  if (carry > 0) {
    prev.next = new LinkedListNode(carry);
  }
  return reverse(head);
};
