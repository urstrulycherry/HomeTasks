function rentalCarCost(d) {
    let p = d * 40
    return (d >= 7) ? p - 50 : (d >= 3) ? p - 20 : p
}
console.log(rentalCarCost(3))
console.log(rentalCarCost(9))
console.log(rentalCarCost(1))

// Link: https://www.codewars.com/kata/transportation-on-vacation/train/javascript