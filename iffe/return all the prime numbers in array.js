(function(arr) {
    var isPrime = function(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;

        if (num % 2 === 0 || num % 3 === 0) return false;

        var sqrtNum = Math.sqrt(num);
        for (var i = 5; i <= sqrtNum; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }

        return true;
    };

    var primeNumbers = arr.filter(function(num) {
        return isPrime(num);
    });

    console.log("Prime numbers in the array:", primeNumbers);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);