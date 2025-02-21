
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var rotateRight = function(head, k) {
    if (!head || !head.next || k === 0) return head;

    let length = 1, tail = head;
    while (tail.next) {
        tail = tail.next;
        length++;
    }

    k = k % length;
    if (k === 0) return head;

    tail.next = head;
    let stepsToNewHead = length - k;
    let newTail = head;

    for (let i = 1; i < stepsToNewHead; i++) {
        newTail = newTail.next;
    }
    let newHead = newTail.next;
    newTail.next = null;

    return newHead;
};

