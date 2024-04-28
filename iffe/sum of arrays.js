(function(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log("Sum of all numbers in the array:", sum);
})([1, 2, 3, 4, 5]);