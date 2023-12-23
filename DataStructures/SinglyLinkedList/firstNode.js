// piece of data - val
//reference to next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        if(this.head===null){
            const headNode = new Node(val);
            this.head=headNode;
            this.tail=headNode;
        }else{
            const appendNewNode = new Node(val);
            this.tail.next=appendNewNode;
            this.tail=appendNewNode;
        }
    }
}


var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
list.push("TEST");
list.push("Test2");

console.log(list.head);