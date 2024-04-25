// Import the EventEmitter class
const EventEmitter = require('events');
// Create a new instance of EventEmitter
const myEmitter = new EventEmitter();

myEmitter.on('myEvent', () => {
    console.log('My event occurred');
});
myEmitter.emit('myEvent');

myEmitter.on('message', (msg) => {
    console.log(`Received message: ${msg}`);
});

myEmitter.emit('message', 'Hello, world!');

myEmitter.on('error', (err) => {
    console.error('Error occurred:', err);
});
