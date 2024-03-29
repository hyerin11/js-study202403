
//방법1) 함수 선언문
function add(n1, n2){
  return n1+n2;
}

//방법2) 함수 표현식
const add = function(n1, n2){
  return n1+n2;
};


//방법3) 화살표 함수
const add = (n1, n2) => n1+n2;




const r1 = add(10,20);
console.log(`r1: ${r1}`);


//===========================
//방법1)
function sayHello(){
  console.log(`안녕하세요`);
}

//방법2)
const sayHello = function(){
  console.log(`안녕하세요`);
};

//방법3)
const sayHello =() => console.log(`안녕하세요`);
//2줄이면 중괄호 삭제x
const sayHello =() => {
  console.log(`안녕하세요`);
  console.log(`수고하세요`);
}

sayHello(); //안녕하세요




//==========================

const kim = {
  name : `길동`,
  greeting: sayHello,
  dance: () => console.log(`춤을 신나게 춥니다.`)
};

kim.dance();
kim.greeting();




//정수 1개를 전달하여 해당 정수의 제곱값을 리턴하는 화살표 함수 pow작성해보세요.

function pow(n){
  return n**2;
}

//파라미터가 1개일 경우 소괄호도 생략할 수 있다.
//const pow =(n) => n**2;
const pow = n => n**2;


console.log(pow(5));



