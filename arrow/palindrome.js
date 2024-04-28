((arr) => {
    const isPalindrome = (str) => str === str.split('').reverse().join('');

    const palindromes = arr.filter(str => isPalindrome(str));
    console.log("Palindromes in the array:", palindromes);
})(["level", "hello", "radar", "world", "madam"]);
