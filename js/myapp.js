/*
const title = document.getElementById("title");
//document.getElementById() : id로 element를 가져온다.
//element로 함수를 사용하여 값을 가져올수있고 값을 바꿀수 있다.
title.innerText="got you";
console.dir(title);
console.dir(document.body);
*/

//.getElementById() 는 가장 위에(앞에)있는 객체 하나만 가져온다.
//.getElementsByName() .getElementsByClassName() .getElementsByTagName() 등은 반환값이 배열이다.
//.querySelector()는 css로 element를 가져온다. 단 가장 위에 하나만 가져오기 때문에 모두 가져오려면 .querySelectorAll()를 쓰자
const hellos = document.querySelectorAll(".hello h1");
console.log(hellos);

const test = document.getElementById("title");
console.log(test);