
/*
console.log(`뽀로로 안녕하세요!`);
console.log(`오늘도 즐거운 하루되세요!`);

//코드 100줄 정도 씀 와라라라ㅏㄹ

console.log(`루피 안녕하세요!`);
console.log(`오늘도 즐거운 하루되세요!`);

//코드 300줄 정도 씀 와라라라ㅏㄹ

console.log(`크롱 안녕하세요!`);
console.log(`오늘도 즐거운 하루되세요!`);
 */



//정규화 : 함수를 정의한다. //관례) 동사형으로 적는다
function sayHello(userName){
console.log(`${userName} 안녕하세요!`);
console.log(`오늘도 즐거운 하루되세요!`);
}
//함수 호출(사용)
sayHello();
sayHello('둘리');  //둘리 안녕하세요! 오늘도 즐거운 하루되세요!
sayHello('잔망루피');//잔망루피 안녕하세요! 오늘도 즐거운 하루되세요!


function makeLine(){
  console.log(`---------------------`)
}
sayHello(`a`);
sayHello(`b`);
sayHello(`c`);
makeLine;


//내 프로그램에서 원의 넓이를 자구 구함
const PI = 3.14159265;

//반지름 r인 원의 넓이를 구하는 함수 정의
function calcAreaCircle(){
  return PI * r **2;
}



//반지름이 5인 원의 넓이
// var circle1 = PI*5**2;
// console.log(circle1);
var circle1 = calcAreaCircle(5);
console.log(circle1);

//반지름이 17인 원의 넓이
var circle2 = calcAreaCircle(17);
console.log(circle2);



//게시글을 삭제하는 함수
function removeBoardArticle(){

}
//정의 후에는 꼭 호출(call)을 해줘야 한다.!



















