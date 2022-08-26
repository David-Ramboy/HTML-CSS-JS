//https://betterprogramming.pub/singly-and-doubly-linked-lists-in-javascript-7515f47c9f60
//linkedlist literals
// const n1 = {
//     data:100
// };
// const n2 = {
//     data:200
// };

// n1.next = n2;   

// console.log(n1)

// Node Class

class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next
    }
}

// const n1 = new Node(199, 10);
// console.log(n1)

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
        
    }
    // Insert first Node
    insertFirst(data){
        this.head = new Node(data, this.head);
        this.size++;
    }

    // Insert last Node
    insertLast(data){
        let node = new Node(data);
        let current;

        // if empty, make head
        if(!this.head){
            this.head = node;
        }else{
            current = this.head;

            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    // Insert at index
    insertAt(data, index){
        // If index is out of range
        if(index > 0 && index > this.size){
            return;
        }

        // If first index
        if(index === 0){
            this.head = new Node(data, this.head);
            return;
        }

        const node = new Node(data);
        let current, previous; 

        // Set current to first
        current = this.head;
        let count = 0;
                        //2
        while(count < index){
            previous = current; // Node before index

            count++;
            current = current.next; // Node after index
        }

        node.next = current;
        previous.next = node;

        this.size++;
    }
    // Get at index
    getAt(index){
        let current = this.head;
        let count = 0;

        while(current){
            if(count == index){
                console.log(current.data);
            }
            count++;
            current = current.next;
        }
        return null
    }
    // Remove at index
    removeAt(index){
        if(index > 0 && index > this.size){
            return;
        }
        let current = this.head;
        let previous;
        let count = 0;
        //Remove first
        if(index === 0){
            this.head = current.next;
        }else{
            while(count < index){
                count++;
                previous = current;
                current = current.next;
            }

            previous.next = current.next;
        }

        this.size--;
    }
    //Clear list
    clearList(){
        this.head = null;
        this.size = 0;
    }
    //Print list data
        // insert first - this means that the first you insert the data is the last to show in the data
    printListdata(){
        let current = this.head;

        while(current){
            console.log(current.data)
            current = current.next;
        }
    }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
// ll.insertAt(500, 2);
// ll.removeAt(2);
// ll.getAt(0);
// ll.clearList()
ll.printListdata();
// console.log(ll)



//Singly list
// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

    //linkedlist class
// class SinglyLinkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }
// }
