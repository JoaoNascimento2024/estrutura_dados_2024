
class Pair{
    constructor(key,value){
        this.key = key;
        this.value = value;
    }

    has(key){
        return this.key === key;
    }
}


class HashTable {

    constructor(size){
        this.size = size;
        this.items = new Array(size);        
    }

    put(key, value){
        let hash = this.hashing(key);
        if (this.items[hash] === null)
            this.items[hash] = [];
        this.items[hash].push(new Pair(key,value));
    }

    //Hash lose lose
    hashing(key){
        let hash = 0;
        for (let digit of key){
            hash += digit.charCodeAt(0);
        }
        return hash % this.size;
    }

}


