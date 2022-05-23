function partitionOn(pred, items) {
    var i = 0;
    for (var item in items) {
        if (!pred(items[item])) {
            items.splice((i++), 0, items.splice(item, 1)[0]);
        }
    }
    return i;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(partitionOn(function (x) { return x < 5; }, arr), arr);

// Link: https://www.codewars.com/kata/partition-on/train/javascript