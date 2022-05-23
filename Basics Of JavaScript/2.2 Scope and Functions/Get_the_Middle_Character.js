function getMiddle(s) {
    return s.length % 2 == 0 ? s.charAt(s.length / 2 - 1) + s.charAt(s.length / 2) : s.charAt(Math.floor(s.length / 2))
}
console.log(getMiddle('test'))
console.log(getMiddle('testing'))
console.log(getMiddle('middle'))

// link: https://www.codewars.com/kata/get-the-middle-character/train/javascript