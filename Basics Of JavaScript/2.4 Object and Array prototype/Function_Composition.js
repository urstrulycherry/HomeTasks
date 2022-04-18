function compose(f, g) {
    return function (...x) {
        return f(g(...x))
    }
}
const add1 = function (a) { return a + 1 }
const id = function (a) { return a }

console.log(compose(add1, id)(0))

// Link: https://www.codewars.com/kata/5421c6a2dda52688f6000af8/train/javascript