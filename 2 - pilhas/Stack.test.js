import Stack from "./Stack"

//Concept of suit of test from jest
describe("Test class Stack of array", () => {

    let stack;

    beforeEach(()=>{
        stack = new Stack();
    });

    test("Test push method", ()=> {
        //Asserts
        stack.push(1);
        expect(stack.size()).toBe(1);
        expect(stack.peek()).toBe(1);
    });

    test("Test pop method", () => {
        stack.push(1);
        stack.push(2);
        expect(stack.pop()).toBe(2);
    });

});

