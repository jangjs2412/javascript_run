//1.const and let(var는 현재 별로 쓰이지않는다)
//const 변하지않는 값, let은 변하는 값
/*
const a=5, b=2;
let myName="JJY";

console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log("My name is " + myName);

myName="User";

console.log("Your name is "+myName);
*/

//2.boolean(true,false), null, undefined(값이 없을 때)
/*
const amIfat=null;
let something;
let true_result=true;
let false_result=false;

console.log(something ,amIfat);
console.log(true_result, false_result);
*/

//3.array
const daysOfWeek = ["mon","tue","wed","thu","fri","sat"];

console.log(daysOfWeek[2]);
console.log(daysOfWeek[6]);

daysOfWeek.push("sun");
console.log(daysOfWeek[6]);