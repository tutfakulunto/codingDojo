function runningLogger() {
    console.log("I am running");
}

function multiplyByTen(num) {
    if (typeOf(num) == "number") {
        return num + 10;
    }
}

function stringReturnOne() {
    return "This is the first string.";
}

function stringReturnTwo() {
    return "This is the second string.";
}

function caller(arg) {
    if (typeOf(arg) == 'function') { arg(); } 
}

function myDoubleConsoleLog(par1, par2) {
    if (typeOf(par1) == 'function' && typeOf(par2) == 'function') { console.log(par1(), par2()); }
}
myDoubleConsoleLog(stringReturnOne, stringReturnTwo);

function caller2(par) {
    console.log("Starting");
    var x = setTimeout(function(){
        if (typeOf(par) == 'function') {
            par(stringReturnOne, stringReturnTwo);
        }
    }, 2000);
    console.log("Ending?");
    return "interesting";
}
caller2(myDoubleConsoleLog);