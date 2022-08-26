// import LinkedList from "./Linked-list-part2.js"


/*
MergeSort(headRef)
1. If the head is NULL or there is only one element in the linked List
then return.
2. Else divide the linked list into two halves.
    FrontBackSplit(head, &a, &b); / a and b are two halves /
3. Sort the two halves a and b.
    MergeSort(a)
    MergeSort(b)
4. Merge the sorted a and b (using SortedMerge() discussed) and update the 
head pointer using headref.
    headRef = SortedMerge(a, b);

*/

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// Linked list class
class SinglyLinkedList{
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

function sortedMerge( a,  b) 
{
    var result = null;
    /* Base cases */
    if (a == null)
        return b;
    if (b == null)
        return a;

    /* Pick either a or b, and recur */
    if (a.val <= b.val) {
        result = a;
        result.next = sortedMerge(a.next, b);
    } else {
        result = b;
        result.next = sortedMerge(a, b.next);
    }
    return result;
}

function mergeSort( h) {
    // Base case : if head is null
    if (h == null || h.next == null) {
        return h;
    }

    // get the middle of the list
    var middle = getMiddle(h);
    var nextofmiddle = middle.next;

    // set the next of middle node to null
    middle.next = null;

    // Apply mergeSort on left list
    var left = mergeSort(h);

    // Apply mergeSort on right list
    var right = mergeSort(nextofmiddle);

    // Merge the left and right lists
    var sortedlist = sortedMerge(left, right);
    return sortedlist;
}

// Utility function to get the middle 
// of the linked list
function getMiddle( head) {
    if (head == null)
        return head;

    var slow = head, fast = head;

    while (fast.next != null && fast.next.next != null) 
    {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}


// Utility function to print the linked list
function printList( headref) {
    while (headref != null) {
        console.log(headref.val + " ");
        headref = headref.next;
    }
}

let list = new SinglyLinkedList()
list.push(20)
list.push(100)
list.push(1)
list.push(2)

list.printList()

let listhead = mergeSort(list.head)

console.log(listhead)