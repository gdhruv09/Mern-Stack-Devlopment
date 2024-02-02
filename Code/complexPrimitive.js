// 1. Write a program prints all the even numbers in an array

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("the even numbers are: ");

for (let i = 0; i < number.length; i++) {
  if (number[i] % 2 == 0) {
    console.log(number[i]);
  }
}


// 2. Write a program to print the biggest number in an array

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let max = numbers[0];

console.log("the biggest number is: ");

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log(max);

// 3. Write a program that prints all the male people’s first name given a complex object

let personArray = ["Dhruv", "Priya", "Akshay", "Akshat"];
let genderArray = ["Male", "Female", "Male", "Male"];

for (let i = 0; i < personArray.length; i++) {
  if (genderArray[i] == "Male") {
    console.log(personArray[i]);
  }
}


// 4. Write a program that reverses all the elements of an array

const arr = [1, 2, 3, 4, 5];
const reversedArr = [];

for (let i = arr.length - 1; i >= 0; i--) {
  reversedArr.push(arr[i]);
}

console.log(`Reversed array: ${reversedArr}`);

