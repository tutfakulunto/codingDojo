function multiples_of_3_but_not_all() {
    for (var i = -300; i < 1; i+=3) {
        if (i == -3) {
            continue;
        } else if (i == -6) {
            continue;
        } else {
        console.log(i);
        }
    }
}