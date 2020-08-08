
//Here I am gonna show you undefined values

//1

let boss;
// console.log(boss);

//2

let fun = undefined;
// console.log(fun);

//3

let object = {name: "Alve Mollah", number: 12322};
// console.log(object.age);

//4

let arr = [2, 4, 5, 10];
// console.log(arr[20]);

//5

function add(num1, num2){
    console.log(num1 + num2);
    return // if you just return singale value of the two parameter then you will get surely error
}
const total = add(3,5);
// console.log(total);

//6

function symbol(sym1, sym2){
    console.log(sym1,sym2);
}

const result = symbol(300);
console.log(result);

// Here I am gonna describe about null

//null represents the intentional absence of any object value. It is one of JavaScript's primitive values
// and is treated as falsy for boolean operations.

