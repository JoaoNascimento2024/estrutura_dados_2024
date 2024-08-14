
import Node from "Node.js";

class BinarySearchTree {
    
    constructor(){
        this.root = null;
    }

    insert(value){
        if (this.root === null){
            this.root = new Node(value);
        }else{
            let node = this.root;
            while(true){
                if (value < node.value){
                    if (node.left === null){
                        node.left = new Node(value);
                        break;
                    }else{
                        node = node.left;
                    }
                }else{
                    if (node.right === null){
                        node.right = new Node(value);
                        break;
                    }
                    else{
                        node = node.right;
                    }
                }
            }
        }
    }

    insertRecursive(value){
        if (this.root === null){
            this.root = new Node(value);
        }else{
            this.insertNode(this.root, value);
        }
    }

    insertNode(node, value){
        if (value < node.value){
            if (node.left === null){
                node.left = new Node(value);
            }else{
                this.insertNode(node.left, value);
            }
        }else{
            if (node.right === null){
                node.right = new Node(value);
            }else{
                this.insertNode(node.right, value);
            }
        }
    }

    //Insert(value)
    //search(value)
    //inOrder()
    //preOrder()
    //postOrder()
    //min()
    //max()
    //remove()
}