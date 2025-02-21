const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var isPalindrome = function (head) {
    let slow = head, fast = head, prev = null, temp;

    while (fast && fast.next) {
        fast = fast.next.next;
        temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }

    if (fast) slow = slow.next;

    while (slow) {
        if (slow.data !== prev.data) return false;
        slow = slow.next;
        prev = prev.next;
    }
    return true;
};
