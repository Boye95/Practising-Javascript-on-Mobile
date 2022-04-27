/*let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
let myArray = myData.split(',');
console.log(typeof(myArray));

function foo() {
  let a = 2;

  function bar() {
    console.log(a); // 2
  }

  bar();
}

foo();
*/

 //Regular Expressions
 
/*let use = /ab*c/;
let userreg = "abbbbc";
console.log(userreg.match(use));


let sue = /^a/;
let suereg = "an A";
console.log(suereg.match(sue));

let repeatStr = "regex regex regex";
let repeatRegex = /(\w+)\s\1/;
console.log(repeatRegex.test(repeatStr));
console.log(repeatStr.match(repeatRegex));

function factorialize(num) {
  let result = 1;
  for (; num > 0; num--) {
    result *= num;
  }
  return result;
}
console.log(factorialize(5));

const button = document.querySelector('button');

button.onclick = function() {
  let name = prompt('What is your name?');
  alert('Hello ' + name + ', nice to see you!');
}

let big = "455";
let ein = BigInt(big);
console.log(ein);

let a = {t:4, j: 6};
let b = [2, 4, 1, 1.5, 6, 20];
let ss = a.valueOf();
let dd = a.toString();
let cc = b.sort();
console.log(cc);
console.log(dd);
console.log(ss); 

let tt = {
  cd: 23,
  
  
}
// This is a simple code to iterate through an array and return random elements inside the array.
const months = ["January", "February", "March", "April", "May", "June", "July"];

const random = Math.floor(Math.random() * months.length);
console.log(random, months[random]);

let sArray = ["Set", "Seda", "Ask"];
for (var i = 0; i < sArray.length; i++) {
  console.log(sArray[i]); 
}
for(let  i=0,j=10;  i  <  j;  i++,j--)  { console.log(i+j);
}

function fname() {
  let a = [1, 3, 6, 9, 10];
  for(let  i  =  0;  i  <  a.length;  a[i++]  =  2)  ;
}
console.log(fname());

function fn(arg) {
  // body...
  let tt = 3;
  let increment = tt++;
  return increment;
 // ++tt;
 // return tt;
}
console.log(fn());


let yp = [ "twi", "see", 56, 32, 77];
function unn() {
  for(let z in yp) {
    console.log(z);
  }
}
unn();

let xp = {
  dx: 45,
  cx: 22,
  as: "tye",
  wer: "right"
}
function ung() {
  for(let x in xp){
    console.log(x);
  }
}
ung();
let o = {c: 4,f: 6, u: 6};
let t = Object.getOwnPropertyNames(o);
console.log(t);

let testt = document.querySelector("#test");
testt.addEventListener("click", togg);
let diss = document.querySelector("#dis");

function togg() {
  if (diss.style.display === "block") {
    diss.style.display = "none";
  } else {
    diss.style.display = "block";
  }
}


let yyt = ['dy', 4];
yyt[yyt.length] = 'rude';
console.log(yyt);

let table = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(let i = 0; i < table.length; i++) {
    table[i] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }
  console.table(table);
let num = 2;
table.forEach((x) => {num *= x});
console.log(table);
let  data  =  [1,2,3,4,5],  sum  =  2; 
// Compute the sum of the elements of the array 
let yet = data.forEach(value  =>  {  sum  +=  value;  });
console.log(yet);
let theNumber = Number(prompt("Pick a number")); 
if (!Number.isNaN(theNumber)) { console.log("Your number is the square root of " + theNumber * theNumber);
} else {
  console.log('Insert a number');
}
let yourName; 
do {
  yourName = prompt("Who are you?");
} while (!yourName); console.log(yourName);
if (false != true) {
  console.log("That makes sense."); 
  if (1 < 2) { 
    console.log("No surprise there."); 
  } 
}
let result = 1; 
for (let counter = 0; counter < 10; counter++) {
  result = result * 2; 
} 
console.log(result);
function fizzz() {
  for (let i = 1; i <= 100n; i++) {
   if (i % 3 === 0) {
      console.log("Fizz");
    } else if(i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 5 === 0 && i % 3 === 0) {
      console.log("FizzBuzz");
    } else {
      console.log(i);
    }
  }
}
//fizzz();
for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 == 0)
    output += "Fizz";
  if (n % 5 == 0)
    output += "Buzz";
  console.log(output || n);
}:
function minus(a, b) { 
  if (b === undefined) return -a; 
    else return a -b; }
    console.log(minus(10)); 
    console.log(minus(10, 5));
        
var size = 8;

var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);

function multiplier(factor) {
  return number => number * factor;
  } 
  let twice = multiplier(2);
  console.log(twice(5));



function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
console.log(min(8, 6));

const factorial = function fac(num) {
  let result = [];
  for (var i = 0; i < num.length; i++) {
    num[i]--;
    result[i] = num[i];
  }
  return result;
}
console.log(factorial([1, 2, 3, 5, 6, 8]));

function ff(num) {
  console.log(num);
  if (num > 1) {
     ff(num - 1);
  } else {
    return 3 ;
  }
}
console.log(ff(4)); 

function exampleQuadratic(n) {            for (var i = 0; i < n; i++ ) {
        console.log(i);
           for (var j = i; j < n; j++) {
               console.log(j);
              }
          }

}
console.log(exampleQuadratic(5));

class Polygon {
  
  constructor(height, width){
    this.height = height;
    this.width = width;
  }
  
  introduce() {
    console.log(`Hello, my height is ${this.height}`);
  }
  
}

const el = new Polygon(6.4, 23);

el.introduce();

function findLongestWordLength(str) {
  let el = str.map((item) => )
  return str.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

console.log(Math.floor(1.4))


const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

btn.addEventListener('click', () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});*/

/*function find_max(nums) {
  let max_num = Number.NEGATIVE_INFINITY;
  for (num of nums) {
    if (num > max_num) {
      max_num = num;
    }
  }
  return max_num;
}

console.log(find_max([5, 3, 6, 9]));

// Godhand Dev button

let bot = document.querySelector('#bot');
let body = document.querySelector('body');
let myDiv
function callback() {
  myDiv = document.createElement("div");
  let divTxt = document.createTextNode("My Div");
  myDiv.appendChild(divTxt);
  body.appendChild(myDiv);
}

bot.addEventListener('click', replaceChild)
function replaceChild() {
 
  //if (body.hasChildNodes() === myDiv) {
    //body.removeChild(myDiv);
    //console.log(body.hasChildNodes());
//  }
console.log(myDiv);
}
*/



let element = [3, 6, 8, 9, 3, 5, 6];
let h = '';
for (var i = 0; i < element.length; i++) {
  h += element[i];
  let j = h.split(',');
  console.log(j);
}
