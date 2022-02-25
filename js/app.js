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
/*
const daysOfWeek = ["mon","tue","wed","thu","fri","sat"];

console.log(daysOfWeek[2]);
console.log(daysOfWeek[6]);

daysOfWeek.push("sun");
console.log(daysOfWeek[6]);
*/

//4.object
/*
const playerName="jjy";
const playerNumber=10;
const playerLevel=85;
const playerJob="knight";

const player = {
    name:"jjy",
    number:10,
    level:85,
    job:"knight"
};

console.log(player);
console.log(player.name);

player.number = 60;

console.log(player);
console.log(player.number);

player.lastname="tomato";
console.log(player);
*/

//5.function
//argument(인수):함수에 인수(어떠한 값)를 넣어서 사용할수 있다.
//function functionName(argument){asdfasdfasdf}
/*
function sayHello(userName){
    console.log("Hello my name is "+userName);
}

sayHello("jjy");
sayHello("jang");

function sayHelloAge(userName,age){
    console.log("Hello my name is "+userName+"("+age+")");
}

sayHelloAge("asdfasdf",30);
sayHelloAge("????");    //이 경우는 age값이 없어서 undefined로 출력됨

function plus(a,b){
    console.log(a+b);
}
function minus(a,b){
    console.log(a-b);
}
function multi(a,b){
    console.log(a*b);
}

plus(5,3);
minus(8,4);
multi(5,3);
*/

const player={
    name:"jjy",
    level:67,
    job:"gunner",
    no:123456789,
    sayHello:function(personName){
        console.log("Hello "+personName+"! nice to meet you!");
    }
}

player.sayHello("jaeyong");