// Since exports is set equal to another value, the reference is broken
exports = function() {
    console.log("Hello");
}

// Can mutate/change exports, but cannot override module.exports
console.log(exports);

// Still an empty object = doesn't change
console.log(module.exports);