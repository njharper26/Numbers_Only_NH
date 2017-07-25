function numbersOnly(arr) {
    
    var arrNew = [];

    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            arrNew.push(arr[i]);
        }
    } 
}

var arr = [1, "apple", -3, "orange", 0.5]

console.log(numbersOnly(arr));