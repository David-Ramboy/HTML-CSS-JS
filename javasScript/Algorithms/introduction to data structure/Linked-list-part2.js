//Creating singly-Linked List
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// Linked list class
export default class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // ~~~~~~~~~~~ Push and Unshift ~~~~~~~~~~~~

    //Push
    //adds a node at the end of the list

    push(val){
        //Make a new Node
        const newNode = new Node(val);
        //if list is empty, make node head and tail
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }   
        // add 1 to lemgth
        this.length++

        return this;
    }
    // Add value to the first/head in the list
    unshift(val){
        const newNode = new Node(val);
        // if list is empty
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            // add current head pointer to new head(new mode), and make new node new head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        //add 1 to length
        this.length++;
        return this;
    }


    // Shift method is to remove first item in the list and return the shifted

    shift(){
        //if list is empty return false
        if(!this.head) {
            return false;
        }
        // get shifted
        const shiftedNde = this.head;
        //get new head (could be Null if list is length 2)
        const newhead = this.head.next;
        // if newHead is null, reassign tail to newHead(null)
        console.log(newhead)
        if(!newhead){
            this.tail = newhead;
            console.log(true)
        }
        // assign new head
        this.head = newhead;
        //remove 1 from length
        this.length--;
        //return shiftednode
        return shiftedNde;
    }
    // return node at given index
    getNodeAtIndex(index){
        // if index is not within list return null
        if(index >= this.length || index < 0) return null;
        // iterate through node until finding the one at index
        let currentNode = this.head;
        let currentIndex = 0;
        while(currentIndex !== index){
            currentNode = currentNode.next;
            currentIndex++;
        }
        return currentNode; 
    }
    //remove node from end of list
    pop(){
        //if list is empty (has no tail) return false
        if(!this.tail){
            return false;
        }
        //get removed Node
        const poppedNode = this.tail;
        //if list has more than 1 node
        if(this.head !== this.tail){
            //find new tail
            const newTail = this.getNodeAtIndex(this.length - 2);
            // remove newTails reference to poppedNode
            newTail.next = null;
            // make it new tail
            this.tail = newTail;
            //otherwise establish list is empty
        } else {
            this.head = null;
            this.tail = null;
        }
        //subtract 1 from length
        this.length--;
        // return poppedNode;
        return poppedNode;
    }
    //setMethod
        //change the node at the given index
    setNodeaAtIndex(val, index){
        //find the node using already built method
        const foundNode = this.getNodeAtIndex(index);
        //if the node is found update and return
        if(foundNode){
            foundNode.value = val;
            return foundNode
        }
        //else return null
        return null
    }
    //insert a new node at the index with the given value
    InsertAtIndex(index, val){
        //if index is not valid return false
        if(index < 0 || index > this.length){
            return false;
        }
        //if index is zero use already built unshift
        if(index === 0){
            return this.unshift(val);
        }
        //if index is at end of list, use already built push
        if(index === this.length){
            return this.push(val);
        }
        // make a new node, find the nodes before and after it, make before's next the new node, and the newNode's next the after
        const newNode =new Node(val);
        const after = this.getNodeAtIndex(index);
        const before = this.getNodeAtIndex(index - 1);
        newNode.next = after;
        before.next = newNode;

        this.length++;
        return this;
    }
    // remove node from index
    removeFrom(index){
        //if index is invalid return false
        if(index  < 0 || index >= this.length){
            return false;
        }
        // if index is at beginning use already built shift
        if(index === 0) return this.shift();
        //if index is at  end use already built pop;
        if(index === this.length - 1) return this.pop();
        //get before and after, set before's next to after and remove after's reference from remove Node
        const before = this.getNodeAtIndex(index - 1);
        const removedNode = this.getNodeAtIndex(index);
        before.next = removedNode.next;
        removedNode.next = null;

        this.length--;
        return removedNode;
    }

    printList(){
                if(this.head){
                    let current = this.head;
                    while(current.next){
                        console.log(current);
                        current = current.next;
                    }
                    console.log(current);
                }else{
                    console.log("empty list")
                }
            }

}

// let list = new SinglyLinkedList()
// list.push(10)
// list.unshift(21)
// list.push(12)
// list.push(30)
// list.InsertAtIndex(2,99)
// // list.shift()
// console.log(list)
// console.log(list.getNodeAtIndex(2))

// Doubly Linked-list 
// class Node{
//     constructor(value){
//         this.value = value;
//         this.prev = null;
//         this.next = null;
//     }
// }

// class DoublyLinkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }
//     //adds a node at the end of the list
//     push(val){
//         const newNode = new Node(val);
//         if(!this.head){
//             this.head = newNode;
//             this.tail = newNode;
//         }else{
//             this.tail.next = newNode;
//             newNode.prev = this.tail;
//             this.tail = newNode;
//         }
//         this.length++;
//         return this;
//     }
//     //remove node from end of list
//     pop(){
//         //in case of emptylist
//         if(this.length === 0){
//             return false;
//         }
//         //get popped Node
//         const popped = this.tail;
//         //save newTail to a variable (could be null)
//         const newTail = this.tail.prev;
//         //if newTail is not null
//         if(newTail){
//             //sever connection to popped node
//             newTail.next = null;
//             // sever connection from popped node
//             this.tail.prev = null;
//             //in case of 1 length list
//         }else{
//             //make sure to edit head in case newTail is null;
//             this.head = null;
//         }
//         // assign new tail (could be null)
//         this.tail = newTail;
//         //subtract length
//         this.length--;

//         return popped;

//     }

//     // Shift method is to remove first item in the list and return the shifted
//     shift(){
//         //in case list is empty
//         if(!this.head){
//             return false;
//         }
//         //save shifted node to variable
//         const shiftedNode = this.head;
//         //make the new head the next (might be null)
//         const newHead = this.head.next; // might be null
//         //if list is more than 1
//         if(this.head !== this.tail){
//             newHead.prev = null;
//             shiftedNode.next = null;
//         }else {
//             this.tail = null;
//         }

//         this.head = newHead;
//         this.length--;
//         return shiftedNode;
//     }

//     // Add value to the first/head in the lists
//     unshift(val){
//         const newNode = new Node(val);
//         if(!this.head){
//             this.head = newNode;
//             this.tail = newNode;
//         }else{
//             this.head.prev = newNode;
//             newNode.next = this.head;
//             this.head = newNode;
//         }
//         this.length++;
//         return this;
//     }

//     //insert a new node at the index with the given value
//     InsertAtIndex(index, val){
//         //if index doesn't exist
//         if(index > this.length){
//             return false;
//         }
//         if(index === 0){
//             this.unshift(val);
//         } else if (index === this.length){
//             this.push(val);
//         } else {
//             const newNode = new Node(val);
//             const after = this.getNodeAtIndex(index);
//             const before = after.prev;
//             after.prev = newNode;
//             before.next = newNode;
//             newNode.next = after;
//             newNode.prev = before;
//             this.length++;
//         }
//         return this;
//     }

//     // return node at given index
//     getNodeAtIndex(index){
//         if(index >= this.length || index < 0){
//             return false;
//         }
//         let currentIndex = 0;
//         let currentNode = this.head;
//         while (currentIndex !== index){
//             currentNode = currentNode.next;
//             currentIndex++;
//         }
//         return currentNode;
//     }
    
//         //change the node at the given index
//     setNodeaAtIndex(index, val){
//         const foundNode = this.getNodeAtIndex(index)
//         if(foundNode){
//             foundNode.value = val
//             return foundNode;
//         }
//         return null;
//     }

//     printList(){
//         console.log(list)
//         if(this.head){
//             let current = this.head;
//             while(current.next){
//                 console.log(current);
//                 current = current.next;
//             }
//             console.log(current);
//         }else{
//             console.log("empty list")
//         }
//     }

// }
// let list = new DoublyLinkedList();
// list.push(12)
// list.push(23)
// list.push(46)
// list.push(82)
// list.InsertAtIndex(1, 199)
// list.printList()
