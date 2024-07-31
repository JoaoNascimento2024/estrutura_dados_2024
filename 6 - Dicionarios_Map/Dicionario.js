import KeyValue from "./KeyValue.js";

class Dict {
    constructor(){
        this.items = {}
    }

    keyToString(key){
        if (key === null)
            return "NULL";
        if (key === undefined)
            return "UNDEFINED";
        return key.toString();
    }

    has(key){
        return this.items.hasOwnProperty(this.keyToString(key));
    }

    set(key, value){
        this.items[this.keyToString(key)] = new 
        KeyValue(this.keyToString(key),value);
    }

    get(key){
        return this.has(key) ? this.items[this.keyToString(key)] : undefined;
    }

    delete(key){
        if (has(key)){
            delete this.items[this.keyToString(key)];
            return true;
        }
        return false;
    }

    keys(){
        return Object.keys(this.items);
    }

    values(){
        return Object.values(this.items);
    }
}

const dict = new Dict();
console.log(dict.has("nome"));