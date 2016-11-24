function print512to4096by5() {
    var sum = 0; 
    for (var i = 512; i < 4097; i++) {
        if (i % 5 == 0) {
            sum += 1;
            console.log(i);
        }
    }
    return "There are " + sum + " multiples of 5 between 512 and 4097."; 
}