class Stack extends Array{
    // default value allows stack to initialize without an argument
    constructor() {
        super();
    }


    slice() {
        console.log('no slice, only pop');
    }
  }

let stack = new Stack();
stack.push(10);
stack.slice(10);
stack.push(20)
stack.push(40)
console.log(stack);