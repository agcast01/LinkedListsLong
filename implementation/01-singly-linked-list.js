// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list
        if (!this.head) {
            let head = new SinglyLinkedNode(val);
            this.head = {
                'value': head.value,
                'next': head.next
            };
            this.length++;
        } else {
            let next = this.head;
            let head = new SinglyLinkedNode(val);
            head.next = next;
            this.head = {
                'value': head.value,
                'next': head.next
            };
            this.length++;
        }
        return {
            'head': {
                'value': this.head.value,
                'next': this.head.next
            },
            'length': this.length
        };
        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.length++
            return {
                'head': this.head,
                'length': this.length
            };
        }
        else if (!this.head.next) {
            this.head.next = newNode;
            this.length++
            return {
                'head': this.head,
                'length': this.length
            };
        } else {
            let curr = this.head.next;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = newNode;
            this.length++
            return {
                'head': this.head,
                'length': this.length
            };
        }
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        // Remove node at head
        if (!this.length) return;
        let removed = this.head;
        this.head = this.head.next;
        this.length--;
        return removed;
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail
        if (!this.length) return;
        let current = this.head;
        if (this.length == 1) {
            let removed = this.head;
            this.head = null;
            this.length--;
            return removed;
        }
        while (current.next.next) {
            current = current.next;
        }
        let removed = current.next;
        current.next = null;
        this.length--;
        if (this.length == 0) this.head == null;
        return removed;

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return value of head node
        if (this.head == null) return;
        return this.head.value;

        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list
        if (this.length == 0) return;
        console.log(this.head.value)

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}