const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var checkWavePattern = function (head) {
    if (!head || !head.next || !head.next.next) return "false"; // At least 3 elements are needed

    let current = head;
    let increasing = null; // Will be used to track alternating pattern

    while (current.next && current.next.next) {
        let first = current.data;
        let second = current.next.data;
        let third = current.next.next.data;

        if (!((first < second && second > third) || (first > second && second < third))) {
            return "false"; // Breaks wave pattern
        }

        current = current.next;
    }

    return "true"; // Satisfies wave pattern
}

