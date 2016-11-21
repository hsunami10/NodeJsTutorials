/*
    PASS BY VALUE:
        pass a primitive type into a function
        when there's a copy of the primitive value, but different memory slot
    PASS BY REFERENCE:
        pass an object into a function
        not a copy, points to the same memory slot, so if one changes, the other changes
*/


// Pass by value
// b is copy of a (bc primitive type)
function change(b) {
    b = 2;
}

var a = 1;
change(a);
console.log(a);

// Pass by reference
// d is an object
function changeObj(d) {
    d.prop1 = function() {};
    d.prop2 = {};
}

// c is an empty object
var c = {};
c.prop1 = {};
changeObj(c); // changes all properties of c to the properties defined in changeObj
console.log(c):