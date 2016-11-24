function set_and_swap(name, num) {
var name = "Scott", num = 36, temp;
console.log(name, num);
temp = name;
name = num;
num = temp;
console.log(name, num);
}