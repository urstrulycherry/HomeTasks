function countWords(str) {
    return str.split(/\s/g).filter(Boolean).length
}
console.log(countWords('Hello, my name is John'));
console.log(countWords("﻿Hello﻿World "));
console.log(countWords("  Hello     Bart  "));

// Link: https://www.codewars.com/kata/570cc83df616a85944001315/train/javascript