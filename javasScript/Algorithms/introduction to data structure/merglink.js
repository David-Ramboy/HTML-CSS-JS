var head = null;
  
// node a, b;
 class node {
        constructor(val) {
            this.val = val;
            this.next = null;
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

function push(new_data) {
    /* allocate node */
    var new_node = new node(new_data);

    /* link the old list off the new node */
    new_node.next = head;

    /* move the head to point to the new node */
    head = new_node;
}

// Utility function to print the linked list
function printList( headref) {
    while (headref != null) {
        console.log(headref.val + " ");
        headref = headref.next;
    }
}

  

    /*
     Let us create a unsorted linked 
     list to test the functions
     created. The list shall be 
     a: 2->3->20->5->10->15
     */
    push(15);
    push(10);
    push(5);
    push(20);
    push(3);
    push(2);

    // Apply merge Sort
    head = mergeSort(head);
    // printList(head);