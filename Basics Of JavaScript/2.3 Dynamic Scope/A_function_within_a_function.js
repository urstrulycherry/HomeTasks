function always(n) {
    return function () {
        return n
    }
}

console.log(always(42)(), 42);
console.log(always('foo')(), 'foo');
console.log(always(true)(), true);

// Link: https://www.codewars.com/kata/53844152aa6fc137d8000589/train/javascript