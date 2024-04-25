// Function that takes a callback
function greet(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
}

// Callback function
function sayGoodbye() {
    console.log("Goodbye!");
}

// Calling the function with a callback
greet("Alice", sayGoodbye);