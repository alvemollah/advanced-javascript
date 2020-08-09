const students = [
    {name : "Alve", id : 74},
    {name : "Abid", id : 75},
    {name : "Jadeed", id : 76},
    {name : "Sojun", id : 77}
];

let output = [];
for(let i = 0; i < students.length; i++){
    const element = students[i].name;
    output.push(element);  
}
// console.log(output);

//shortcut way

const names = students.map(n => n.name);
console.log(names)

const ids = students.map(i => i.id);
console.log(ids);

const bigger = students.filter(s => s.id > 74);
console.log(bigger);

const biggerOne = students.find(s => s.id > 75);
console.log(biggerOne);