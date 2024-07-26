/**
 * QueueOnject class
 */
class QueueObject {
    constructor(){
        this.items = {};
        this.front = 0;
        this.end = 0;
    }

    /**
     * Enqueue element
     * @param {*} element 
     */
    enqueue(element){
        this.items[this.end] = element;
        this.end++;
    }

    /**
     * 
     */
    dequeue(){  
        if (this.size() === 0){
            throw new Error("No elements");
        }
        
        let element = this.items[this.front];
        delete this.items[this.front];
        this.front++;

    }

    size(){
        return this.end - this.front;
    }

}