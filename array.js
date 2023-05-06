// Given an array of strings, use a function to reverse all the elements in the string 
// in ascending order and the specific elements in descending order

function number(strArr2){
const descArr2 = [...strArr2].sort((a, b) => (a > b ? -1 : 1));
return descArr2
}
console.log(number(['r', 'a', 'r', 'j']));
// Given an array of objects, each object representing a person with 
// a name and age property, write a function that returns the sum
//  of all people who are less than 18 years.
const people = [
  { name: 'Alice', age: 17 },
  { name: 'Eunice', age: 22 },
  { name: 'Charlie', age: 14 },
  { name: 'Max', age: 19 },
];

  function sumlessEighteen(people){
    let sum = 0;
    for(let i = 0; i<people.length; i++){
      if(people[i].age < 18){
            sum += people[i].age;
        }
    }
    return sum;
  }

  const totalAge = sumlessEighteen(people);
  console.log(totalAge);

//   Using JS functions and an array of numbers, return positive 
//   if an element within the array is positive, 
//   negative if an element is negative, else zero
function checkNumbers(array){
    for(let i = 0;i<array.length,i++;) {
        if(array[i]>0){
            return "positive";
        }else if(array[i]> 0 ){
            return "negative";
        }

    }
    return "zero";

}
const numbers = [-2,9,-4,6,8,3];
const output  = checkNumbers(numbers);
console.log(output);

// Given an array of objects, where each object represents an employee 
// with an id, name, and salary property, write a 
// function that returns a new array of employee 
// objects sorted by their salary in ascending order.

  const employees = [
    { name: 'Saru', salary: 40000,   id:10 },
    { name: 'Atieno', salary: 120000,id:11 },
    { name: 'Lyle', salary: 110000,  id:12 },
    { name: 'mercy', salary: 80000,  id:13 },
  ];
  function sortemployeeSalary(employees) {
    return employees.sort((a, b) => a.salary - b.salary);
  }
  const sortedEmployees = sortemployeeSalary(employees);
  console.log(sortedEmployees);
  