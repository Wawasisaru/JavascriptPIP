// Write a function that takes an array of numbers as input and returns the sum of all the numbers

function add_numbers(array) {
    const ourArray = [16,21,33];
    let sum = 0;
  
    for (let i = 0; i < ourArray.length; i += 1) {
      sum += ourArray[i];
    }
    
    return sum;
  }
  
  console.log (add_numbers([16,21,33]));
// Write a function that takes two numbers as input and
//  returns true if their sum is greater than 100,
// And false otherwise
function sumIs100(number1, number2) {
  sum =number1+number2
    if(sum>100){
        return true
    }else{
        return false
    }
  }
console.log(sumIs100(2,89));



// Write a function that takes a string as input and
//  returns the number of vowels in the string
function count_vowels(word){
  voewels = ("a","e","i","o","u")
  let count = 0
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }
    return count
}
count_vowels = ("student")
console.log(count_vowels);

// Write a function that takes in a array of numbers as a parameter and returns
// the second largest number in the array
function findSecondLargest(numbers) {
  numbers.sort(function(a, b) {
    return b - a;
  });
  return numbers[1];
}
let numbers = [3, 5, 2, 1, 9, 7];
let secondLargest = findSecondLargest(numbers);
console.log(secondLargest);
// Write a function that takes a string as a parameter and returns true if the string
//is a palindrome and false otherwise
function is_palindrome(str) {
  let x=str.split("").reverse().join("")
  if (str===x) {
    return true
  }
  else{
    return false
  }
}
console.log(is_palindrome("father"));



