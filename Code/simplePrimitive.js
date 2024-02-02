//1. Write the program to greet a person given their first and last name

let initialName = "Dhruv";
let finalName = "Gupta";

console.log("Hello " + initialName + " " + finalName + "!");


// 2. Write a program that greets a person based on their gender. (If else)

let firstName = "Dhruv";
let lastName = "Gupta";
let gender = "Male";

if (gender == "Male") {
  console.log("Hello Mr. " + firstName + " " + lastName + "!");
} else {
  console.log("Hello Ms. " + firstName + " " + lastName + "!");
}


// 3. Write a program that counts from 0 - 1000 and prints (for loop)

let answer = 0;

for (i = 0; i <= 1000; i++) {
  answer = answer + i;
}
console.log("the sum of numbers is " + answer);