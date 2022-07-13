function compose() {
    let args = Array.from(arguments).reverse()
    return function (x) {
        for (f in args) {
            console.log(x)
            x = args[f](x)
        }
        return x
    }
}
function addOne(x) {
    return x + 1
}
function multTwo(x) {
    return x * 2
}

console.log(compose(addOne, multTwo)(5))
console.log(compose(addOne, multTwo, addOne, addOne)(2))

// Link: https://www.codewars.com/kata/5655c60db4c2ce0c2e000026/train/javascript