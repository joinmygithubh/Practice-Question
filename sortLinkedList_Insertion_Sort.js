
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var sortList = function(head) {
    if (!head || !head.next) return head;

    let sorted = null; 
    let current = head; 
    while (current) {
        let nextNode = current.next; 
        sorted = sortedInsert(sorted, current); 
        current = nextNode; 
    }

    return sorted;
};

function sortedInsert(sortedHead, newNode) {
    if (!sortedHead || newNode.data < sortedHead.data) {
        newNode.next = sortedHead;
        return newNode;
    }

    let current = sortedHead;
    while (current.next && current.next.data < newNode.data) {
        current = current.next;
    }

    newNode.next = current.next;
    current.next = newNode;
    return sortedHead;
}
