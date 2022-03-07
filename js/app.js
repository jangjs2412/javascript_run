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
*/
//calculator
/*
const calculator={
    add:function(a,b){
        console.log(a+b);
    },
    minus:function(a,b){
        console.log(a-b);
    },
    divide:function(a,b){
        console.log(a/b);
    },
    multi:function(a,b){
        console.log(a*b);
    },
    multimulti:function(a,b){
        console.log(a**b);
    },
}
calculator.add(6,5);
calculator.minus(6,5);
calculator.divide(6,5);
calculator.multi(6,5);
calculator.multimulti(6,5);
*/

//6.return
//return은 함수 안에서 가장 마지막으로 값을 반환한다.
//함수가 return까지만 수행되고 return이후에는 실행되지않는다.
/*
const age = 30;
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner +2;
}

const krAge = calculateKrAge(age);
console.log(krAge);

const calculator={
    add:function(a,b){
        return a+b;
    },
    minus:function(a,b){
        return a-b;
    },
    divide:function(a,b){
        return a/b;
    },
    multi:function(a,b){
        return a*b;
    },
    multimulti:function(a,b){
        return a**b;
    },
}
*/
/* 연습
let i;
let arr=[-100,7,6,0,-300,-5,2,1,1000];
let mincnt=1;
let result;
for(i=0;i<arr.length;i++){
    if(arr[i]<0){
        arr[i]=0;
    }
}
console.log(arr.length);
console.log(arr);
arr = arr.filter(Boolean);
console.log(arr.length);
console.log(arr);
function test(){
    i=0;
    while(i<arr.length){
        if(arr[i]==mincnt){
            mincnt+=1;
            i=0;
        }
        else{
            i++;
        }
    return mincnt;
    }
}
console.log(test());
*/
/*
//7.types
//prompt()함수는 창을 띄운다. 답을 할때까지 코드의 실행을 멈춰서 다른 동작은 못한다.(쓰지말자)
const age = prompt("How old are you?");
console.log(age);

//typeof 변수 --> 변수의 타입을 알수있다.
console.log(typeof age);

//prompt의 디폴트값이 string이기 때문에 숫자를 입력해도 문자형으로 나온다.
//ParseInt()는 string을 number로 변환시킨다.
console.log(typeof parseInt(age));
*/

//isNaN(): 숫자인지 판별한다. 숫자면 false 아니면 true
/*
const age = prompt("How old are you?");
if(isNaN(age) || age<0){
    console.log("Please write a number")
}else if(age<20){
    console.log("You are so young....");
}
else if(20<=age && age<=50){
    console.log("You can drink!");
}
else{
    console.log("You should not drink")
}
*/

/*
const title = document.getElementById("title");
//document.getElementById() : id로 element를 가져온다.
//element로 함수를 사용하여 값을 가져올수있고 값을 바꿀수 있다.
title.innerText="got you";
console.dir(title);
console.dir(document.body);
*/
/*
//.getElementById() 는 가장 위에(앞에)있는 객체 하나만 가져온다.
//.getElementsByName() .getElementsByClassName() .getElementsByTagName() 등은 반환값이 배열이다.
//.querySelector()는 css로 element를 가져온다. 단 가장 위에 하나만 가져오기 때문에 모두 가져오려면 .querySelectorAll()를 쓰자
const hellos = document.querySelectorAll(".hello h1");
console.log(hellos);

const test = document.getElementById("title");
console.log(test);
*/

const title = document.querySelector(".hello h1");

function handleTitleClick(){
    title.style.color="blue";
}

function titleMouseEnter(){
    title.style.color="red";
    title.innerText="Mouse is here!";
}

function titleMouseLeave(){
    title.style.color="purple";
    title.innerText="Mouse is gone!!!!!";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", titleMouseEnter);
title.addEventListener("mouseleave", titleMouseLeave);
//title을 click하면 handleTitleClick이라는 function이 동작하길 원함
//그래서 handleTitleClick 함수에 () 를 안넣은 것이고,
//즉, js가 대신 실행시켜주길 바라는 것이다.

