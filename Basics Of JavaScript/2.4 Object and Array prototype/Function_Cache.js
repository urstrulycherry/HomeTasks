const cache = func => {
    const mem = {};
    return (...a) => {
        let args = JSON.stringify(...a);
        return mem.hasOwnProperty(args) ? mem[args] : mem[args] = func(...a);
    }
};

// Link: https://www.codewars.com/kata/525481903700c1a1ff0000e1/train/javascript