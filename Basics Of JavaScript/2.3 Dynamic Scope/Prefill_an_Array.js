function prefill(n, v) {
    if (typeof n === 'boolean' || !isFinite(n) || !Number.isInteger(Number(n)) || Number(n) < 0)
        throw new TypeError(n + " is invalid")
    array = []
    array.length = n
    array.fill(v)
    return array
}

console.log(prefill(3, 1), [1, 1, 1]);
console.log(prefill(2, 'abc'), ['abc', 'abc']);
console.log(prefill(3, prefill(2, '2d')), [['2d', '2d'], ['2d', '2d'], ['2d', '2d']]);

// Link: https://www.codewars.com/kata/prefill-an-array/train/javascript