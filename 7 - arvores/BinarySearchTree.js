import Node from "./Node.js";

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

    printNodeByLevel(){
        let node = this.root;
        let nodes = [node];
        while (true){
            let newNodes = [];
            let values = "";
            for (let no of nodes) {
                values = values + no.value + " ";
                if (no.left !== null)
                    newNodes.push(no.left);
                if (no.right !== null)
                    newNodes.push(no.right);
            }   
            console.log(values);
            console.log("==================================")
            nodes = newNodes;
            if (nodes.length === 0)
                break;         
        }
    }  
    
  }

const arvore = new BinarySearchTree();
arvore.insert(30);
arvore.insert(20);
arvore.insert(40);
arvore.insert(5);
arvore.insert(2);
arvore.insert(8);
arvore.insert(25);
arvore.insert(32);
arvore.insert(45);
arvore.insert(42);

arvore.printNodeByLevel()
//console.log("Max:", arvore.max())
//console.log("Min:", arvore.min())
//console.log(arvore.search(47))

//arvore.inOrderTraverse(value=>console.log(value));
