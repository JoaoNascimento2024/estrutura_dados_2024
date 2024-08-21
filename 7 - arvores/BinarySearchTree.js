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

    min(){
        return this.minNode(this.root);
    }

    minNode(node){
        if (node == null){
            return null;
        }

        while (true){
            if (node.left !== null){
                node = node.left;
            }else{
                return node.value;
            }
        }
    }

    max(){
        return this.maxNode(this.root);
    }

    maxNode(node){
        if (node == null){
            return null;
        }

        while (true){
            if (node.right !== null){
                node = node.right;
            }else{
                return node.value;
            }
        }        
    }

    inOrderTraverse(callBack){
        this.inOrderNode(this.root, callBack);
    }

    inOrderNode(node, callBack){
        if (node != null){
            this.inOrderNode(node.left, callBack);
            callBack(node.value);
            this.inOrderNode(node.right, callBack);
        }
    }

    preOrderTraverse(callBack){
        this.preOrderNode(this.root, callBack);
    }

    preOrderNode(node, callBack){
        if (node != null){
            callBack(node.value);
            this.preOrderNode(node.left,callBack);
            this.preOrderNode(node.right,callBack);
        }
    }

    posOrderTraverse(callBack){
        this.posOrderNode(this.root, callBack);
    }

    posOrderNode(node, callBack){
        if (node != null){            
            this.posOrderNode(node.left,callBack);
            this.posOrderNode(node.right,callBack);
            callBack(node.value);
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
console.log("Min:", arvore.min())
console.log("Max:", arvore.max())

console.log("/////////////////////////////////////");

arvore.inOrderTraverse(value => console.log(value));

console.log("/////////////////////////////////////");

arvore.preOrderTraverse(value => console.log(value));

console.log("/////////////////////////////////////");

arvore.posOrderTraverse(value => console.log(value));



//console.log(arvore.search(47))

//arvore.inOrderTraverse(value=>console.log(value));
