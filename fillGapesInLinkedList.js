const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};


var fillGaps = function (head) {
    if (!head) return null; 
    let current = head;
    while (current && current.next) {
        if (current.next.data - current.data > 1) {
        
            let newNode = new LinkedListNode(current.data + 1);
            newNode.next = current.next;
            current.next = newNode;
        } else {
            current = current.next;
        }   

        
    }
    return head;
};
