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

//duplicate
function duplicate(arr){
    return arr.concat(arr);
}
console.log(duplicate([1,2,3,7]))

//sort() anagram from 2 string
var str1 = "Ramy";
var str2 = "Mary";

isAnagram(str1,str2);

function isAnagram(first,second){
    var a= first.toLowerCase();
    var b= second.toLowerCase();

    a = a.split("").sort().join("");
    b = b.split("").sort().join("");
    console.log( a=== b);

}

