// Codewars solutions 

// String repeat
const repeatStr = (num, str) => str.repeat(num);

// Sum of positive 
const positiveSum = (arr) => {
    const pos = arr.filter(num => num >= 0);
    if(pos.length === 0) {
      return 0
    } else {
      return pos.reduce((a,b) => a +b)
    }
  }

  // Even or Odd
  const even_or_odd = num => num % 2 === 0 ? 'Even' : 'Odd'

// Reduce but grow
let grow = (x) => {
    let total = 1;
  for (nums of x) {
    total *= nums
  }
  return total
    }

// Reversed Strings
const solution = (str) => str.split('').reverse().join('');

// Convert a Boolean to a String
const booleanToString = (b) => b ? 'true' : 'false';

// Grasshopper Summation
const summation = (num) => {
    let total = 0;
  for(let i = 0; i<= num; i++) {
    total += i;
  }
  return total
  }

  // Get the mean of an array
  const getAverage = (nums) => {
    let sum = 0;  
    nums.forEach(num => {
      sum += num;
    });
    return  Math.floor(sum/ nums.length)
  }

  // Convert boolean values to strings 'Yes' or 'No'
  const boolToWord = bool => bool ? 'Yes' : 'No';

  const boolToWord = bool => bool === true ? bool = 'Yes' : bool = 'No';

  // Grasshopper Grade book 
  const  getGrade = (s1, s2, s3) => {
    let avg = (s1 + s2 + s3) / 3
    let grade = 0;
    if (avg >= 90) {
      grade = 'A'
    } else if (avg < 90 && avg >= 80) {
      grade = 'B'
    } else if (avg < 80 && avg >= 70) {
      grade = 'C'
    } else if (avg < 70 && avg >= 60) {
      grade = 'D'
    } else {
      grade = 'F'
    }
    return grade
  }

// Hello World
const greet = () => result = 'hello world!';

// MakeUpperCase
const makeUpperCase = (str) => str.toUpperCase();

// Function that implements a difference function, which subtracts one list from another and returns the result
function arrayDiff(a, b) {
    let newArray = [];
  for ( let num of a) {
    if(!b.includes(num)) {
  newArray.push(num)
    } 
  }
  return newArray
  }

  // Given an array of integers, return a new array with each value doubled.
  function maps(x){
    return x.map(i => i *2)
    }

// Multiply
function multiply(a, b){
    return a * b
  }