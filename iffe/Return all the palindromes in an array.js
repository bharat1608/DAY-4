(function(arr) {
    var isPalindrome = function(str) {
        var reversed = str.split('').reverse().join('');
        return str === reversed;
    };

    var palindromes = arr.filter(function(str) {
        return isPalindrome(str);
    });

    console.log("Palindromes in the array:", palindromes);
})(["level", "hello", "radar", "world", "madam","civic"]);