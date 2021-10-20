const a = 10;
const b = 2;
let myName = "kyuwon";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

myName = "kyu";

console.log("your new name is " + myName);

// boolean
// true 켜짐, false 꺼짐
// null 비어있음
// undefiend variavble 이 메모리에 만들어졌지만 값이 없는 것 
const amIFat = null;
let something;
console.log(something); // undefined

//Arrays

const daysOfWeek = ["mon" , "tue" ,"wed" , "thu" , "fri" , "sat"];

const nonsense = [1, 2, "hello", false, null, true, undefined, "kyuwon"];

console.log(daysOfWeek);

// Add one more day to the array
daysOfWeek.push("sun");

console.log(daysOfWeek); 

const apple = "apple";
const potato = "potato"
const toBuy = ["potato", "tomato", "pizza"];
toBuy.push("kimbab");

// Obects
const playerName = "kyuwon";
const playerPoints = 535353;
const playerHansome = true;
const playerFat = "little bit";

// player[0] == name ,...
// const player = ["kyuwon",535353,true, "little bit" ];

const player = {
  name: "kyuwon",
  points: 535353,
  hansome: true,
  fat: "little bit"
};

console.log(player);
console.log(player.name);
console.log(player["name"]);

// data update
console.log(player);
player.fat = "no";
console.log(player);

// data add
player.lastName = "lee";
console.log(player);

// Functions
function sayHello(name, age){
  console.log("Hello my name is " + name + " and I'm " + age);
}

sayHello("kyuwon", 27); // Hello my name is kyuwon and I'm 27
sayHello("lee", 23);  // Hello my name is lee and I'm 23
sayHello("nico", 21); // Hello my name is nico and I'm 21

function plus(firstNum, secondNum) {
  console.log(firstNum + secondNum);
}

function divide(a, b){
  console.log(a / b);
}

plus(8, 60);  // firstNum = 8, secondNum = 60    console.log => 68
plus(60, 8);  // firstNum = 60, secondNum = 8    console.log => 68

divide(98, 20); 

const player2 = {
  name: "kyuwon",
  sayHello2: function(otherPersonName){
    console.log("hello " + otherPersonName + " nice to meet you!");
  }
};

player2.sayHello2("lynn");
player2.sayHello2("nico");

// Recap
const toBuy2 = ["potato", "tomato", "pizza"]

console.log(toBuy2); //["potato", "tomato", "pizza"]
toBuy2[2] = "water"; 
console.log(toBuy2); //["potato", "tomato", "water"]
toBuy2.push("meat");
console.log(toBuy2); //["potato", "tomato", "water", "meat"]

// Caculator

const calculator ={
  add: function(firstNum, secondNum){
    console.log(firstNum + secondNum);
  },
  minus: function(firstNum, secondNum){
    console.log(firstNum - secondNum);
  },
  devide: function(firstNum, secondNum){
    console.log(firstNum / secondNum);
  },
  multi: function(firstNum, secondNum){
    console.log(firstNum * secondNum);
  },
};

calculator.add(1,1)
calculator.minus(5,3)
calculator.devide(10,2)
calculator.multi(4,5)

// returns
const age = 96;
function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);

console.log(krAge);


