const Stack = require('./stack');
const Queue = require('./queue');

// Example usage
const stack = new Stack();
stack.push('A');
console.log(stack.peek()); // Output: 'A'

const queue = new Queue();
queue.enqueue(1);
console.log(queue.peek()); // Output: 1
