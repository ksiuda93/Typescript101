"use strict";
function sum(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else {
        throw new Error('Invalid argument(s)');
    }
}
console.log(sum("1", 2));
