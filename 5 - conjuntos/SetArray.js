
class SetArray {

    constructor(){
        this.items = [];
    }

    has(element){
        return this.items.includes(element);
    }

    add(element){
        if (!this.has(element))
            this.items.push(element);
    }

    toList(){
        return this.items;
    }

    union(set){
        let newSet = new SetArray(); 
        for (let element of this.items){
            newSet.add(element);            
        }
        for (let element of set.toList()){
            if (!newSet.has(element)){
                newSet.add(element);
            }
        }
        return newSet;
    }

    intersection(set){
        let newSet = new SetArray();
        for (let element of this.toList()){
            if (set.has(element)){
                newSet.add(element);
            }
        }
        return newSet;
    }

    isSubSetOf(set){        
        for (let element of this.toList()){
            if (!set.has(element))
                return false;
        }
        return true;
    }
}