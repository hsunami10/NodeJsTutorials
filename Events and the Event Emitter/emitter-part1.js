function Emitter() {
    this.events = {};
}

// on creates a new property on the object this.events, make sure the property is an array, then add listener functions
Emitter.prototype.on = function(type, listener) {

    // If the property does not exist, make an empty array -> accessing properties of this.events object
    this.events[type] = this.events[type] || [];

    // Push the listener into the array
    this.events[type].push(listener);
}

// emit is a common term for saying: "something happened, let's respond"
Emitter.prototype.emit = function(type) {
    // if property exists and is found, then run every element of the array
    if(this.events[type]) {
        this.events[type].forEach(function(listener) {
            listener();
        });
    }
}

module.exports = Emitter;