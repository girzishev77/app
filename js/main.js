const g = 5;
if (g < 10) {
  console.log("константа меньше десяти");
} else {
  console.log("константа больше десяти");
}

//let dataLogin = "Ali";
//let dataPas = "1234";
//let login = prompt("login?");
//let password = prompt("password?");
//if (dataLogin === login && dataPas === password) {
//  console.log("welcome");
//} else {
//  console.log("error");
//}

//let code = "d";
//switch (code) {
//  case "html":
//    console.log("html");
//    break;
//  case "css":
//    console.log("css");
//  case "js":
//    console.log("js");
//  case "react":
//    console.log("react");
//  default:
//    console.log("default");
//}

//let code = "html";
//
//if (code == "html") {
//  console.log("done");
//} else if (code == "js") {
//  console.log("js");
//} else if (code === "react") {
//  console.log("react");
//} else if (code === "vue") {
//  console.log("vue");
//} else if (code === "scss") {
//  console.log("scss");
//}

//let a = 2;
//let result = a > 1 ? "yes" : "no";
//console.log(result);

let x = 4;
let y = 7;
let result = x > y ? "x больше , чем y" : "х не больше ,чем y";
console.log(result);

let a = "4";
let b = "7";
let num = prompt("Введите  число");

if (a === num) {
  console.log(`Четное число ${a} `);
} else if (b === num) {
  console.log(`Нечетное ${b} `);
}

let index = 1;
let index2 = 4;
let num2 = prompt("Введите числа");
if (index < index2) {
  console.log(Math.max(1, 4));
}
console.log(Math.max(3, 7, 9, 5));
