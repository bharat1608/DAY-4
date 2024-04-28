((arr) => {
    const titleCapsArray = arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
    console.log(titleCapsArray);
})(["hello", "world", "how", "are", "you"]);
