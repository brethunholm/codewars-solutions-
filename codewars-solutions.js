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
const grow = (x) => {
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
  // const boolToWord = bool => bool ? 'Yes' : 'No';

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


//-----------------------2/27--------------------------/


// Remove First and Last Character

const removeChar = (str) => {
  let chars = str.split('')
  chars.shift();
  chars.pop()
  let result = chars.join('')
  return result;
 };


// Return Negative

function makeNegative(num) {
  let num = -4;
  if(!num.toString().includes('-')) {
    return  (-num)
  } 
    return num
}

// A wolf in sheep's clothing
// find index of wolf if wolf index is close to you say go away otherwise warn sheep and tell sheep there index

function warnTheSheep(sheep) {
  const sheep = ["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]
  let wolfIndex = sheep.indexOf('wolf');
  let dangerSheep = ((sheep.length -1) - wolfIndex);
  let lastPosition =  sheep.length -1;
  if(sheep.length -1 === wolfIndex){
    return "Pls go away and stop eating my sheep"
  } else {
    return `Oi! Sheep number ${dangerSheep}! You are about to be eaten by a wolf!`
  }
  }

// Opposite Number
function opposite(num) {
   result = Math.sign(num)
   if( result === 1) {
     return -num
   } else if( result === -1) {
     return Math.abs(num)
   } else {
     return 0
   }
}

// Convert Number to a string

function numberToString(num) {
  return num.toString();
}

// Remove string spaces 

// function noSpace(x){
// let result = x.split(' ')
// result = result.join('');
// console.log(result)
// }

const noSpace = x => x.split(' ').join('');
noSpace(x)


// Vowel count

function getCount(s) {
  const s = 'hi bre';
  let vowelsCount = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      vowelsCount += 1;    }
  }
  return vowelsCount;
}


// Highest and Lowest 


function highAndLow(numbers){
  numbers = numbers.replace(/\s+/g, '');
  numbers = Array.from(numbers)
  numbers = numbers.sort()
  result = `${numbers[0]} ${numbers[(numbers.length -1)]}`
  return result
  }

// works if only positive numbers
// function highAndLow(numbers){
//   numbers = numbers.replace(/\s+/g, '');
//   numbers = Array.from(numbers)
//   numbers = numbers.sort((a,b) => a - b);
//   console.log(numbers)
//   result = `${numbers[0]} ${numbers[(numbers.length -1)]}`
//   return result
//   }


function highAndLow(numbers){
  numbers = numbers.split(' ');
  console.log(numbers)
  let a = Math.max(...numbers)
  console.log(a)
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

//-----------------------3/1--------------------------------------//


// Get the Middle Character
// if word odd return middle char, if word even return middle 2 chars
function getMiddle(word)
{
  const a = word.split('')
  let middle = Math.ceil(a.length/2) - 1;
  
  if((a.length) % 2 === 0) {
    return `${word[middle]}${word[middle + 1]}`
  } else {
    return word[middle]
  }
}

// Descending Order

function descendingOrder(num){
  num = num.toString();
  let a = num.split('');
  a = a.sort((a, b) => b - a);
  let result = a.join('');
  return parseInt(result)
}

// List filtering 

const filter_list = (l) =>  l.filter(item => typeof item === 'number' );
  

clearConsole();


// Odd or Even
// Given a list of integers, determine whether the sum of its elements is odd or even.

function oddOrEven(array) {
  let total = array.reduce((a, b) => a + b, 0);
  if(total % 2 === 0) {
    return 'even'
  } else {
    return 'odd'
  }
}

// Shortest Word
// given a string of words, return the length of the shortest word(s).

function findShort(s){
  let a = s.split(' ');
  let length = a.map(word => word.length);
  length = length.sort((a, b) => a - b);;
  return length[0]
}


// Sum of two lowest positive integers 

function sumTwoSmallestNumbers(numbers) {  
  let sorted = numbers.sort((a, b) => a - b);
  return sorted[0] + sorted[1];
}


// find the smallest integer in the array


function findTheSmallestInteger(a) {
  a = a.sort((a, b) => a - b);
  return a[0]
}


// Disemvowel Trolls
// Create a function that removes all vowels from a string 


// function disemvowel(str) {
//   return str.replace(/[aeiou]/gi, '');
// }


disemvowel = (str) => str.replace(/[aeiou]/gi, '');


// Sum of digits - digital root 


// function digital_root(num) {
//   num = num.toString();
//   num = num.split('').map(Number).reduce((a, b) => a + b, 0);
//   return num
//  }

// ^ close but not digital root, does not work for numbers that have a sum greater than 9 

function digital_root(num) {
  return (num - 1) % 9 + 1;
}


// Create a phone number
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number


// function createPhoneNumber(n){
//   return `(${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}${n[8]}${n[9]}`
// }

function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}


// Friend or Foe
// create a function that filters out names and returns an array including only names with 4 letters


const isFriend = friends => friends.filter(friend => friend.length === 4);


// function friend(friends){
//   let coolFriends = friends.filter(friend => friend.length === 4)
//   return coolFriends
// }



// Is he going to survive?

// function hero(bullets, dragons){
//   if (bullets >= dragons * 2) {
//     return true
//   } else {
//     return false
//   }

//   }

  hero = (bullets, dragons) => (bullets >= dragons * 2) ? true : false;
  
// Array plus an array 

function arrayPlusArray(arr1, arr2) {
  let arr = arr1.concat(arr2).reduce((a, b) => a + b, 0);
  return arr
}


function arrayPlusArray(arr1, arr2) {
  let arr = arr1.concat(arr2);
  let result =  arr.reduce((a, b) => a + b, 0);
  return result
}


// Keep hydrated 

function litres(time) {
  return Math.floor(time*0.5)
}


//----------------------------------------3/2--------------------------------------------------------//


// Spinning Words 
// Write a function that takes in a string of one or more words, and returns the same string, 
//but with all five or more letter words reversed  Strings passed in will consist of only letters and spaces. 
//Spaces will be included only when more than one word is present.


function spinWords(){
 let a =  str.split(' ');
  console.log(a)
  let length = a.map(word => {if(word.length >= 5){
    console.log(word)
  }})
  console.log(length) }

function spinWords(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}

// String ends with 
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).



function solution(str, ending){
  let a = str.split('');
 
  let b = ending.split('');
 
   a = a.slice(((a.length)  - (ending.split('').length))) 
  
 if(JSON.stringify(a)==JSON.stringify(b)) {
   return true
 } else {
   return false
 }
  
 }
 

// Or just use the method string endsWith()

function solution(str, ending){
  return str.endsWith(ending);
}

// Reversed words 

const reverseWords = (str) => str.split(' ').reverse().join(' ');


function reverseWords(str){
  str = str.split(' ');
  let reversedString = str.reverse().join(' ').toString();
  return reversedString
}

// Format a string of names like 'Bart, Lisa & Maggie'.


function list(names){
  let str = '';
  if (names.length !== 0) {
    let last = names.pop();
    str = names.map( (val, i, arr) => {
      if (i !== arr[arr.length - 1]) {
        return val.name;
      }
    }).join(', ')
     
    str += str !== '' ? ' & ' + last.name : last.name;
  }
   
  return str;
}

// Convert to camel case


function toCamelCase(str){
  let newArray = [];
  
  if(str.includes('-')) {
    str = str.split('-');
    for (let i = 1; i < str.length; i++) {
      str[i] = str[i][0].toUpperCase() + str[i].substr(1);
  }
  } else {
   str = str.split('_'); 
   for (let i = 1; i < str.length; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
}
   
  }
  return str.join('')
}

//-------------------------3/3----------------------------//

//Square every digit

function squareDigits(num){
  let a = num.toString().split('').map(Number);
  return parseInt(a.map(i => i * i).join(''))
}

function squareDigits(num){
  let a = num.toString().split('')
  let numbers = a.map(Number);
  let sqrt = numbers.map(i => i * i)
  return parseInt(sqrt.join(''))
}


//--------------------------3/4---------------------------------//

// A square of squares 

const isSquare = function(n){
  return Math.sqrt(n) % 1 === 0;
}


// Credit card mask
// function taking in a string and returning the string with all but the last 4 letters or nums replaced by ##

// return masked string

function maskify(cc) {
  let a = cc.split('');
  if(a.length >= 4){
    const last4 = a.splice((a.length - 4)).join('');
  let firstPart = a.splice(0,(a.length));
  firstPart = (new Array(firstPart.length).fill('#')).join('');
  return `${firstPart}${last4}`
  }
  else return cc
  }

  function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
  }
  

// Reverse words



reverseWords = words => words.split('').reverse().join('').split(' ').reverse().join(' ');



// .reverse().join("").split(" ").reverse().join(" ")

// function reverseWords(str) {
//   let a = str.split("").reverse().join("").split(" ").reverse().join(" ")
//   return a
//  }

//-------------------------------------3/8---------------------------//

// Find the odd int
//Given an array of integers, find the one that appears an odd number of times


function findOdd(arr) {
let count = 0;
for (let i = 0; i < arr.length; i++) {
  for( let j = 0; j< arr.length; j++){
    if(arr[i] == arr[j]){
      count++
    }
  } 
  if(count % 2 != 0) {
    return arr[i]
  }
  
  }
    
};



// Highest and lowest 

let numbers = "4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"

function highAndLow(numbers){
 numbers = numbers.split(' ');
  numbers.sort(function(a, b){
    return a - b;
  })
  return `${numbers[numbers.length-1]} ${numbers[0]}`
  }
  
  

// Sort numbers 

function solution(nums) {
  if (nums === [] || nums === null) {
    return []
  } else{
    nums.sort((a, b) =>  a - b);
  return nums
  }
  
}


// Remove the minimum 


// function removeSmallest(numbers) {
//   let newNums = numbers.sort((a,b) => a - b);
//   let result = newNums.slice(0,(newNums.length-1));
//   return result
// }

function removeSmallest(numbers) {
  let lowest = 5;
  for (const num of numbers) {
    if(num < lowest) {
      lowest = num;
    }
  }

return lowest
}




//  -----------------------------3/18-------------------------


// Replace with alphabet position 


function alphabetPosition(text) {
  let array = text.split(' ').join('').toLowerCase().split('');
  let answer = [];
  const alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  array.forEach(letter => {
    let index = alpha.indexOf(letter);
    let alphabetPosition = index + 1;
    if(alphabetPosition > 0){
      answer.push(alphabetPosition);
    }
    return 
  })


  return answer.join(' ')


}



// Your order please

const words = 'luk3e br1e mu5ch lov2es so4'

function order(words){
  const  array = words.split(' ');
  const sortedArray = [];
  for(i = 0; i <= array.length; i++) {
    for(j = 0; j < array.length; j++) {
      if(array[j].indexOf(i) >= 0) {
        sortedArray.push(array[j]);
      }
    }
  }
  return sortedArray.join(' ');
}


//----------------------------3/20-------------------------------------------//


// Human readable code 

function humanReadable(seconds) {
  // TODO
 const secondsInHour = 3600
 let hours = seconds / secondsInHour
 
 let secondsLeft  =  seconds % secondsInHour
 let minutes = secondsLeft / 60
 let finalSeconds = secondsLeft % 60
 

 hours = Math.floor(hours)
 minutes = Math.floor(minutes)
 finalSeconds = Math.floor(finalSeconds)


 return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${finalSeconds < 10 ? '0' : ''}${finalSeconds}`
}


// Moving zeros to the end 


 function  moveZeros(arr){
   
  let count = 0
  for( i = 0; i < arr.length; i++) 
  if(arr[i] === 0) {
   count++
  }
 
 let answer = arr.filter(element => element !== 0 )

 for (let i = 0; i < count; i++) {
   answer.push(0)
 }
 return answer
 }


// ----------------------------3/21----------------------------------

// Opposites Attract


function lovefunc(flower1, flower2){
  return flower1 % 2 === 0 && flower2 % 2 === 1 || flower1 % 2 === 1 && flower2 % 2 === 0
}
  
 
// IQ test 



function iqTest(numbers){
 let array = numbers.split(' ')
const odd = array.filter(num => num % 2 === 1)
const even = array.filter( num => num % 2 === 0)

if(even.length === 1) {
  return array.indexOf(even[0]) + 1
} else {
  return array.indexOf(odd[0]) + 1
}


}


// Meeting 

s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";


function meeting(s) {
  let string = s.toUpperCase().split(';')
                .map(x => x.split(':').reverse().join(', '))
                .sort()
                .join(')(')
  return '(' + string + ')'
}




//------------------------3/29-------------------------------------//

// Panagram 


function isPangram(string){
  let a = string.toLowerCase().split('')
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  return alphabet.every(el => a.includes(el))
}

// Exes and ohs



function XO(str) {
  const a = str.toLowerCase().split('')
  const x = a.filter(letter => letter === 'x');
  const y = a.filter(letter => letter === 'o')
 
  if(x.length === y.length) {
    return true 
  } else {
    return false
  }
    
  }




// Pig latin 





 


function pigIt(str){
  console.log(str);
    let a = str.split(' ')

    console.log(a);
    let pig = '';
  for (let i = 0; i < a.length; i++) {
      const word = a[i];
      let wordA = word.split('')
      // console.log(wordA);
      let first = wordA.splice(0,1)
      // console.log(first);
      wordA.push(first[0])
      // console.log(wordA);
     final = wordA.join('')
     console.log(final);
     if (final == '?' || final == '!') {
      pig += ` ${final}`
    } else {
      pig += ` ${final}ay`

    }
    }
   let pl = pig.split(' ')
   pl.shift()
   return pl.join(' ')
  }

  console.log(pigIt(str))


//--------------------------------3/30------------------------------------------------


// Counting Sheep 


function countSheeps(sheep) {
let count = 0;
for (let index = 0; index < sheep.length; index++) {
  const el = sheep[index]; {
    if(el == true) {
      count = count + 1
    } else {
      console.log('this is not a sheep');
    }
    
  }
 
}
return count

}



//-------------------------------4/7

// Square sum 




function squareSum(numbers){
let count = 0;
  numbers.forEach(num => {
     count += num*num 
  });

return count

}



//---------------------------------------4/8

// Mathematical Operations 



const basicOp =  (operation, value1, value2) => eval(`${value1} ${operation} ${value2}`)


// Cat and Mouse 

function catMouse(x){
  let str = x.replace(/\s/g,'')
  console.log(x);
if(str.length > 5) {
  return 'Escaped!'
} else {
  return 'Caught!'
}
}

// Slaphead 


function bald(x){
  let hairCount = 0;

  let result = []
}


// Return century from year

function century(year) {
  return Math.ceil(year/100); //using ceiling method to round up to nearest century (100)
}

console.log(century(2));

Sum of strings

function sumStr(a,b) {
  console.log(a,b);
  let numA = a
  let numB = b 
if(a === '') {
   numA = 0 
  
  
}
if(b === '') {
   numB = 0

}
 let result = (parseInt(numA) + parseInt(numB)).toString()
 return result
}

const a = ''
const b = '2'

console.log(sumStr(a,b));

// Array Madness

const a = [ 4, 5, 6 ]
const b = [ 1, 2, 3 ]

// function arrayMadness(a, b) {
//   console.log(a);
//   console.log(b);
// let totalA = 0
// let totalB = 0
// for (let i = 0; i < a.length; i++) {
//   const sqrt = Math.floor(Math.sqrt(a[i]))
//   totalA = totalA + sqrt
// }

// for (let i = 0; i < b.length; i++) {
//   const cube = Math.floor(Math.cbrt(b[i]))
//   totalB = totalB + cube

// }
// console.log(totalA, totalB);
// return totalA > totalB

// }

function arrayMadness(a, b) {
  return a.reduce( (sum, el) => sum + el ** 2, 0) >
         b.reduce( (sum, el) => sum + el ** 3, 0);
}