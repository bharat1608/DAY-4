(function(arr) {
    for (var i = 0; i < arr.length; i++) {
        var words = arr[i].split(' ');
        for (var j = 0; j < words.length; j++) {
            words[j] = words[j].charAt(0).toUpperCase() + words[j].slice(1).toLowerCase();
        }
        arr[i] = words.join(' ');
    }
    console.log(arr);
})(["this is javascript", "iam better"]);
