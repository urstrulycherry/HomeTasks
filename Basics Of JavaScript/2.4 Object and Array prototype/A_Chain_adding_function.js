function add(n) {
    sum = function (m) {
        console.log("------", n, m)
        return add(n + m)
    }
    sum.valueOf = function () {
        return n
    }
    return sum
}

console.log(add(1)(2)(3)(4)(5)());

// Link: https://www.codewars.com/kata/539a0e4d85e3425cb0000a88/train/javascript