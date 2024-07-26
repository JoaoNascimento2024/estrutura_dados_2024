/**
 * Definition - FilaArray Class
 */
class QueueArray {
    constructor(){
        this.items = [];
    }

    /**
     * Insert element
     * @param {*} element 
     */
    enqueue(element){
        this.element.push(element);
    }

    /**
     * Remove element
     */
    dequeue(){
        if (this.items.length === 0){
            throw new Error("No element in queue");
        }

        return this.items.shift();
    }

    /**
     * Empty test
     */
    isEmpty(){
        return this.items.length === 0;
    }

    /**
     * Size of queue
     * @returns size
     */
    size(){
        return this.items.length;
    }

    /**
     * Print elements of queue
     */
    printQueue(){
        this.items.forEach(element => console.log(element));
    }
}

export default QueueArray;
