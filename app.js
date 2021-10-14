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
