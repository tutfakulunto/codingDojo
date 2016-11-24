function print_1_100() {
    var num = 1;
    var message = "";
    while (num < 101) {
        if (num % 5 == 0) {
            message += "Coding";
            console.log(message)
        }
        if (num % 10 == 0) {
            message += " Dojo";
            console.log(message);
        }
        console.log(num);
        num += 1;
    }
}
