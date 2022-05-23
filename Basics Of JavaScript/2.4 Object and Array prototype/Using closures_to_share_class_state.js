var Cat = (function () {
    const cats = []
    const constructor = function (name, weight) {
        if (!name || !weight) throw Error('invalid parameters')
        Object.defineProperty(this, 'name', { get: () => name })
        Object.defineProperty(this, 'weight', { get: () => weight, set: value => weight = value })
        cats.push(this)
    }
    constructor.averageWeight = () => cats.reduce((acc, cat) => (acc + cat.weight), 0) / cats.length
    return constructor
}())

fluffy = new Cat('fluffy', 15);
garfield = new Cat('garfield', 25);

console.log(fluffy.weight, 15);
console.log(fluffy instanceof Cat, true);
console.log(fluffy.averageWeight, undefined);
console.log(typeof Cat.averageWeight, "function");
console.log(Cat.averageWeight(), 20);

// Link: https://www.codewars.com/kata/53583765d5493bfdf5001b35/train/javascript