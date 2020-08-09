

//Scope 

function sum(first, second){
    let result = first + second;
    // console.log(result);
    return result;
}
const total = sum(20, 30);
// console.log(result);             // You cannot access the local scope on the outside
// console.log(total);
 
//scope block

function add(num1, num2){
    let result = num1 + num2;

    if(result > 30){
        let string = "One";
        string = 'two';
        // console.log(string)        //you cannot call let, const outside of if,else block

        var happy = "I am happy now";
        console.log(happy);
    }
    // console.log(happy);             //you can call var outside of if, else block 
    return result;
}

const getResult = add(34, 34);
// console.log(getResult);


//global scope 

let money = 300;

function evenNumber(sym1, sym2){
    return sym1 + sym2 + money;     //you can call money from anywhere because of this is global variable
}

console.log(money);

const number = evenNumber(29, 39);
console.log(number);