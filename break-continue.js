
const num = [4, 5, 6, 7, 8, 9, 10];

for(let i = 0; i < num.length; i++){
    
    if(num[i] > 8){  //this is index value
        break;
    }

    // console.log(num[i]);
}


const newNumber = [-3, -7, -10, 0 , 1, 4, 6, 9, 10];

for(let n = 0; n < newNumber.length; n++){
   
    if(newNumber[n] < 0){
        continue;
    }

    console.log(newNumber[n]);
}