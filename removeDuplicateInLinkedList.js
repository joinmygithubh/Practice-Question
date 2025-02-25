const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
var deleteDuplicates = function(head) {
     let current = head;

    while (current !== null && current.next !== null) {
        if (current.data === current.next.data) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return head;
};

