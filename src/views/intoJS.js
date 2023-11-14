//1. var & let difference
var num = 1;
if (num == 1) {
    var test = 'inside if';
    let tes = 'inside if let';
    console.log(tes);
}
console.log(test);//inside if
console.log(tes);// Reference error, tes is not defined


//2. var function scope and let block scope
// function chkvarletscope() {
//     let x = 10;
//     if (true) {
//         let y = 20;
//         let x=y;
//         console.log(x); //20
//         console.log(y); //20
//     }
//     console.log(x); //10
//     console.log(y); //Reference error
// }

// chkvarletscope()

//3. const
// function constScope(){
//     let x = 10;
//     if(true){
//         const y = 3;
//         console.log(x); //10
//         console.log(y); //3
//         y=5; //TypeError: Assignment to constant variable
//         y=x; //TypeError: Assignment to constant variable
//     }
//     console.log(y); //Reference error
// }

// constScope();


//4
//4.1 Objects
const Student = {
    name: "Shash",
    age: 25
}
console.log(Student.name) //Shash

//4.2 Objects with new keyword
var Animal = new Object();
Animal.type = "Dog";
Animal.color = "Brown";
console.log(`Name: ${Animal.type}, Color: ${Animal.color}`); //Name: Dog, Color: Brown

//4.3 Creating an object using the object constructor. 
function animal(name, color) {
    this.name = name;
    this.color = color;
}
var animall = new animal('Cat','White');
console.log(animall.name);

//4.4 Class implementation
class Bird {
    constructor(name, color) {
        this.name = name;
        this.age = age;
    }
}

console.log(Bird.name);//Bird

//5. String concatenation using template literals
const name = "Shashi";
const age = "40";
const country = "Finland";
const output = `Hi, I am ${name} and I am ${age} years old. I am from ${country}.`;
console.log(output);//Hi, I am Shashi and I am 40 years old. I am from Finland.

/* You can use template strings to write your string exactly how you want it to appear,
   without all the quotation marks and confusion. 
   Template strings make it very easy to spot a missing space and make your string more readable.*/



//6. Classes
class Cars {

    constructor(name, maker, price) {
        this.name = name;
        this.maker = maker;
        this.price = price;
    }

    getDetails() {
        return (`The name of the car is ${this.name}.`)
    }
}

let car1 = new Cars('Rolls Royce Ghost', 'Rolls Royce', '$315K');
let car2 = new Cars('Mercedes AMG One', 'Mercedes', '$2700K');

console.log(`${car1.name} is priced at ${car1.price}`); //Rolls Royce Ghost is priced at $315K
console.log(`${car2.name}'s maker is ${car1.maker}`); //Mercedes AMG One's maker is Rolls Royce


//7. this
//this keyword is a reference to the current execution context.
// const Animal = {
//     property: 'Name',
//     myMethod: function () {
//         console.log(this.property);
//     }
// };
// Animal.myMethod(); // this refers to myObject = Name

//8. Callback function
//Functions which are passed as an argument in another function which gets executed after a certain
function test(arr, callback){
    arr.push(100);
    callback();
    console.log(arr); //[1,4,5,10,100]
}

var arr= [1,4,5,10];
console.log(arr); //[1,4,5,100]

test(arr,function(){
    console.log(arr+ "1") //1,4,5,1001
});

//9.String reverse
var string = "I'm hungry now";

var reverseSentence = reverseBySeparator(string,""); //separator is an empty string
var reverseEachWord = reverseBySeparator(reverseSentence," "); //spliiting string using a space

function reverseBySeparator(string, separator){
  var s = string.split(separator).reverse().join(separator); //split the input string into an array of words
  console.log(string.split(separator));
  console.log(string.split(separator).reverse());
  console.log(string.split(separator).reverse().join(separator));
  return s;
}


//10. Closures
//Keep the value passed to outerfunction Closure even after the ineer function is returned
//Inner function being returned is created within an outer function,
//making it a closure having access to variables within outer function(baseParameter)
function Closure(baseParameter){
    return function(B){
        return baseParameter + B;
    }
}

var addFive = Closure(5);
console.log(addFive(10))
addFive(6);

//10.2 Closure 2
function multiply(a){
    return function (b){
      return a*b;
    }
  }
console.log(multiply(5)(6)) //30



//11.duplicate
function duplicate(arr){
    return arr.concat(arr);
}
console.log(duplicate([1,2,3,7]))

//12.sort() anagram from 2 string
var str1 = "Ramy";
var str2 = "Mary";

isAnagram(str1,str2);

function isAnagram(first,second){
    //upto here a, b undefined and first: Ramy, second:Mary
    var a= first.toLowerCase(); //ramy
    var b= second.toLowerCase(); //mary

    a = a.split("").sort().join(""); //'amry'
    b = b.split("") //['m','a','r','y']
    b= b.sort() //to ascending order - //['a','m','r','y']
    b = b.join(""); //'amry'

    console.log( a=== b); //true

}

//12. undefined
var y = 1;
if (function x(){}){
    y += typeof x;
}

console.log(y); //1undefined

//12.1
var x = 2;
if(2){
    eval(function p(){});
    x += typeof p;
}

console.log(p);

//12.2
var c = 2;
if(2){
    function d(){}
    c += typeof d;
}

console.log(c);

//13. add/change array elements
let dailyActivities = [ 'eat', 'sleep'];

// this will add the new element 'exercise' at the 2 index
dailyActivities[1] = 'exercise';
dailyActivities[3] = 'bou'; //

console.log(dailyActivities); // [ 'eat', 'exercise', <1 empty item>, 'bou' ]

//14.pop array, remove last elements
let dailyActivities = ['work', 'eat', 'sleep', 'exercise'];

// remove the last element
dailyActivities.pop();
console.log(dailyActivities); // ['work', 'eat', 'sleep']
// remove the last element from ['work', 'eat', 'sleep']
const removedElement = dailyActivities.pop();
//get removed element
console.log(removedElement); // 'sleep'
console.log(dailyActivities);  // ['work', 'eat']


//15. Map method
//update an array or create a new array from an existing array
//works like a for each loop
var arr = [1,2,3,4];
arr.map(updatearr)
function updatearr(){}

//16.Slice
let dailyActivities = ['sleep', 'work', 'exercise']
let newRoutine = ['eat'];

// sorting elements in the alphabetical order
dailyActivities.sort();
console.log(dailyActivities); // ['exercise', 'sleep', 'work']

//finding the index position of string
const position = dailyActivities.indexOf('work');
console.log(position); // 2

// slicing the array elements,The slice() method returns selected elements in an array, as a new array.
const newDailyActivities = dailyActivities.slice(2);
console.log(newDailyActivities); // [ 'sleep', 'work']

// concatenating two arrays
const routine = dailyActivities.concat(newRoutine);
console.log(routine); // ["exercise", "sleep", "work", "eat"]

//16.2 slice
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(4);
console.log(citrus);

//17. Convert true fale value into Boolean() function, double negation(!!)
const value = '';
const isTrue = !value;

console.log(isTrue);

//18. && logical AND operator,returns the first falsy operand if not the last operand if all are truthy
result = "" && "foo"; // result is assigned "" (empty string)
result = 2 && 0; // result is assigned 0
result = "foo" && 4; // result is assigned 4

//18.1
let isLoggedIn = true;
let isAdminn = false;

// both are true so left operand is printed
isLoggedIn && console.log("User is logged in.");

// return first falsy operand if false
isLoggedIn && isAdminn && console.log("User is an admin.");

//return first falsy operand,so nothing printed
isAdminn && console.log("User is an admin.");


//19. OR operator

const s = isAdminn || console.log("User is an admin.");
console.log(s)

const p = isLoggedIn || isAdminn || console.log("User is an admin.");
console.log(p)

//20. Unary operator (+)
let x = "5";
let y = +x;  // unary plus for string-to-number conversion
console.log(y);  // Output: 5

let z = true;
let w = +z;  // unary plus for boolean-to-number conversion
console.log(w);  // Output: 1

//21. event.target and event.currentTarget refer to different elements involved in the event handling process.
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Event Example</title>
//     <style>
//         div {
//             padding: 20px;
//             border: 1px solid #aaa;
//             margin: 10px;
//             cursor: pointer;
//         }
//     </style>
// </head>
// <body>

// <div id="outerDiv">
//     <div id="innerDiv">
//         Click me!
//     </div>
// </div>

// <script>
//     function handleEvent(event) {
//         console.log("Event Target:", event.target.id);
//         console.log("Event CurrentTarget:", event.currentTarget.id);
//     }

//     const outerDiv = document.getElementById('outerDiv');
//     const innerDiv = document.getElementById('innerDiv');

//     outerDiv.addEventListener('click', handleEvent);
//     innerDiv.addEventListener('click', handleEvent);
// </script>

// </body>
// </html>

{/* Here's what happens: event.target: This property refers to the element that triggered the event. 
It is the actual element that was clicked.
event.currentTarget: This property refers to the element to which the event handler is attached. 
It doesn't change as the event bubbles up or down the DOM hierarchy.
In the handleEvent function, we log both event.target.id and event.currentTarget.id to the console.
Open your browser's developer tools, and when you click on the inner div, you'll see the output in the console. 
The target will be the inner div, and the currentTarget will be the outer div, as it is the element to which the event handler is attached. */}

//22. Function Expression & arrow functions
//This example demonstrates a function expression assigned to the variable multiply. The function takes two parameters (x and y) and returns their product. 
//The function is then invoked with the arguments 3 and 2, and the result is logged to the console. 
const multiply = function (x,y) {
    return x*y;
}

const res = multiply(3,2);
console.log(res);

//An arrow function named add is defined, which adds two parameters (a and b).
//The function is then invoked with the arguments 3 and 3, and the result is logged to the console.
const multiply2 = (a,b) => a*b;
const res2 = multiply2(3,3);

console.log(res2);

//23. Default Parameter
//The power function has a default parameter (exponent = 2). If the exponent is not provided, it defaults to 2.
//Two calls to the function are made, one with a single argument (3) and another with two arguments (3 and 4), resulting in different power calculations.
function power(base, exponent = 2) {
    return Math.pow(base, exponent);
}

const result1 = power(3);
const result2 = power(3, 4);

console.log(result1);  // Outputs: 9
console.log(result2);  // Outputs: 81

//24. Callback Function:
// The fetchData function simulates an asynchronous data fetching operation using setTimeout. 
// It takes a URL and a callback function. After a delay, it invokes the callback with simulated data. 
// The fetchData function is then called with a URL and a callback that logs the received data to the console.
function fetchData(url, callback) {
    // Simulate fetching data from a URL
    setTimeout(() => {
        const data = { name: 'John', age: 30 };
        callback(data);
    }, 1000);
}

fetchData('https://example.com/api/data', (result) => {
    console.log('Data received:', result);
});

//25. Fetch data in JS
//Asynchronus fetch
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        // Check if the request was successful (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Parse the response JSON
        return response.json();
    })
    .then(data => {
        // Process the data
        console.log('Data:', data);
    })
    .catch(error => {
        // Handle errors
        console.error('Error:', error);
    });

//Synchronous async/await
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        
        // Check if the request was successful (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Data:', data);
    } catch (error) {
        // Handle errors
        console.error('Error:', error);
    }
}

fetchData();

//24. Async without await
console.log('Start');

setTimeout(() => {
    console.log('Middle');
}, 1000);

console.log('End');

//Async/await
async function exampleAsyncFunction() {
    console.log('Start');

    // Simulate an asynchronous operation (e.g., fetching data)
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('Middle');
    console.log('End');
}

exampleAsyncFunction();


//25 this keyword usage
//25.1 Regular Function and Global Object
function showThis() {
    console.log(this);
}

showThis(); // In a browser, 'this' refers to the global object (e.g., window)
//In Node.js, it will be the global object for that environment.

//25.2. Object Method
const person = {
    name: 'John',
    greet: function() {
        console.log(`Hello, ${this.name}!`);
    }
};

person.greet(); // 'this' inside 'greet' method refers to the 'person' object

//25.3. Constructor Function
function Animal(name) {
    this.name = name;
    this.speak = function() {
        console.log(`I am ${this.name}`);
    };
}

const lion = new Animal('Lion');
lion.speak(); // 'this' refers to the 'lion' instance
//In a constructor function, this refers to the instance of the object being created.

//25.4. Event Handler
// //In an event handler, this often refers to the DOM element that triggered the event.
// <button id="myButton">Click me</button>

// <script>
//     const button = document.getElementById('myButton');

//     button.addEventListener('click', function() {
//         console.log(this); // 'this' refers to the DOM element (button)
//     });
// </script>


//25.5. Arrow Function
const obj = {
    data: 42,
    getData: function() {
        return () => {
            console.log(this.data);
        };
    }
};

const getDataFunction = obj.getData();
getDataFunction(); // 'this' in the arrow function refers to 'obj'

//the arrow function inside getData captures the lexical scope of its surrounding function
//, so this inside the arrow function still refers to the obj object


//26. map, find, filter methods
//map
//numbers is a constant, and its value (the array) cannot be reassigned.
// The map method is used on the numbers array. It takes a callback function as an argument, which is applied to each element of the array. 
// In this case, the callback function takes a number (num) as a parameter and returns its square (num * num).
// The map method creates a new array, squaredNumbers, 
// where each element is the result of applying the callback function to the corresponding element in the original array.
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(function (num) {
  return num * num;
});

console.log(squaredNumbers); // Outputs: [1, 4, 9, 16, 25]

//filter
// The filter method is used on the numbers array.
// It takes a callback function as an argument, which is applied to each element of the array.
// In this case, the callback function takes a number (num),
// as a parameter and returns true if the number is even (i.e., divisible by 2), and false otherwise.
//The filter method creates a new array, evenNumbers, containing only the elements that satisfy the condition specified in the callback function.
const numbers2 = [1, 2, 3, 4, 5];

const evenNumbers = numbers2.filter(function (num) {
  return num % 2 === 0;
});

console.log(evenNumbers); // Outputs: [2, 4]

//find
const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Doe' }
  ];
const user = users.find(function (user) {
    return user.id === 2;
//   return user.id === 5; //returns undefined

});
console.log(user)
// The find method is used on the users array. It takes a callback function as an argument
// , which is applied to each element of the array.
//  In this case, the callback function takes a user as a parameter
//   and returns true if the id property of the user is equal to 2, and false otherwise.

//The find method searches through the array and returns the first element for which the callback function returns true. 
//If no such element is found, it returns undefined.  


//27. Hoisting
//reading all defined variables or function declarations at the top of the scope before any other code execution occurs.
//it allows us to call functions before they appear in code


//28.Closures
// A closure is a function along with its lexical scope, where the function has access to variables from its own scope, 
// the scope of the outer function, and the global scope.

function createCounter() {
    let count = 0;
  
    return function() {
      count++;
      console.log(count);
    };
  }
  
  const counter = createCounter();
  counter(); // Outputs: 1
  counter(); // Outputs: 2
//   In this example, the createCounter function returns an inner function that has access to the count variable.
//    Each time the inner function is called, it increments and logs the count. 
//   The count variable is not directly accessible from outside createCounter, creating a form of encapsulation.  
 
// This allows a function to "remember" its lexical scope even when the function is executed outside that scope.
//  Closures are used to create private variables, encapsulation, and maintain state.

//29. Higher order functions
//Higher-order functions are functions that operate on other functions by taking them as arguments or returning them as results

// Reduce function accumulates values based on a reducer function
const numbers3 = [1, 2, 3, 4, 5];
const sum = numbers3.reduce(function(acc, num) {
  return acc + num;
}, 0);

console.log(sum); // Outputs: 15

// 30. ECMAscript 6 (ES6) - arrow functions
//function expression Traditional
const fun = function (x,y) {
    return x * y;    
}

//arrow function
const func = (x,y)=> {
    x * y ;
}

//30.1
// Traditional function expression
const multiply = function(x, y) {
    return x * y;
  };
  
  // Arrow function with multiple parameters
  const multiplyArrow = (x, y) => x * y;
  
  // Arrow function with a single parameter and implicit return
  const square = x => x * x;
  
  // Arrow function without parameters
  const greet = () => console.log("Hello!");
  
  // Arrow function with block body
  const sum2 = (x, y) => {
    const result = x + y;
    return result;
  };
  
//31. FUnctional components
import React from 'react';

const FunctionalComponent = (props) => {
  return (
    <div>
      <p>{props.message}</p>
    </div>
  );
};

export default FunctionalComponent;


//32. Class components

import React, { Component } from 'react';

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello from ClassComponent'
    };
  }

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default ClassComponent;
