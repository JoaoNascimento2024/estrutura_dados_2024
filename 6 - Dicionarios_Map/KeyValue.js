export default class KeyValue {
    constructor(key, value){
        this.key = key;
        this.value = value;
    }

    value(){
        return this.value;
    }

    key(){
        return this.key;
    }

    toString(){
        return `${this.key} : ${this.value}`;
    }
}