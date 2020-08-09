                            // squareing with normal path and map 
//1

const number = [5, 6, 7, 8, 9, 10];
// const output = [];

// for(let i = 0; i < number.length; i++){
//     const element = number[i];
//     const result = element * element;
//     output.push(result);
// }

// console.log(output);

//2

// function square(element){
//     return element * element;
// }

//shortcut

// const square = element => element * element;
// const square = x => x * x;


//map method

// const result = number.map(function(element){
//     return element * element;
// })
// console.log(result);

//4

// const output = number.map(x => x * x);
// console.log(output);

//filter method 

const filtered = number.filter(x => x > 7);
// console.log(filtered);

//find method 

const find = number.find(x => x > 7);
// console.log(find)

//forEach

const info = ['Alve','February', 23, 'Bosco'];

info.forEach(function(value, index){
    console.log(index +  " " + value)
})