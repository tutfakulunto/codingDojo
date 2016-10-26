function oddNumbers() {
    var arr = []; 
    for (var i = 0; i < 51; i++) {
        if (i % 2 == 1) {
            arr.push(i);
        }
    }
    return arr; 
}