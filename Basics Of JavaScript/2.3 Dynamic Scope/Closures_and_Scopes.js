function createFunctions(n) {
    var callbacks = [];
    for (let i = 0; i < n; i++) {
        callbacks.push(function () {
            return i;
        });
    }
    return callbacks;
}


(() => {
    var callbacks = createFunctions(5);

    for (var i = 0; i < callbacks.length; i++) {
        console.log(callbacks[i](), i, 'Function with index ' + i);
    }
})()

// Link: https://www.codewars.com/kata/closures-and-scopes/train/javascript