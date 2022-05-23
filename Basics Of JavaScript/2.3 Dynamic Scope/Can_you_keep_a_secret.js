function createSecretHolder(secret) {
    return {
        getSecret: function () {
            return secret
        },
        setSecret: function (newValue) {
            secret = newValue
        }
    }
}

console.log(createSecretHolder(42).getSecret(), 42);
console.log(createSecretHolder('foo').getSecret(), 'foo');

// Link: https://www.codewars.com/kata/5351b35ebaeb67f9110012d2/train/javascript