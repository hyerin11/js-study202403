

var result; //변수 선언

result = 10+20; //값을 변수에 할당(대입)한다

var multiple = result *3; //90
console.log(multiple);



var fruit;
fruit="망고";   //초기화할 때는 var 안붙임
console.log(fruit);

var food="라면";
food='돈까스';
console.log(food);

//* 변수 이름 규칙 *
//var 7number;    1. 앞에 숫자가 나오면 안된다
//var user name;  2. 띄어쓰기 사용x
var current_login_user_phone;  // snake case
var currentLoginUserPhone;     // camel case <<자바스크립트에서는 캐멀 케이스 사용하는 것이 관례

var apple;
var Apple;   // 3. 대소문자 구분하기 때문에 apple과 Apple은 다르다

//특수문자 사용x
var $apple;
var _apple;   // 4. 특수문자 사용X   $, _만 사용가능

// 5. 예약어는 식별자 이름으로 사용x
// var for (x)
var For // (o)
var lEt // (o)

// 6. 식별자 이름은 구체적이고 명확하게 짓자!