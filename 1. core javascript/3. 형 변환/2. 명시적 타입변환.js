
var x = '30', y = '40';

var result = x+y;  //3040
var result1 = Number(x)+Number(y); // = 70
//parseInt는 문자를 숫자로 바꿀 때 정수로 바꾼다.
//parseDouble을 사용하면 소수점을 지킬 수 있다.
var result2 = parseInt(x)+parseInt(y); // = 70
var result3 = +x + +y; //명시적 변환


console.log(result);//3040

console.log(result);//70
console.log(result2);//70
console.log(result3)//70


//숫자를 문자열로 바꾸고 싶다면1? 문자열+숫자 해주면 문자열로 출력할 수 있음
var m = '' + 10 + 20;
console.log(m);

//텍스트 false로 바꾸고 싶다면? 앞에 문자열을 붙여준다.
var f = '' + false;


console.log(`==================`);

console.log('hello'); //hello
console.log(Boolean('hello')); //true한 값
console.log(Boolean(null)); //false한 값
console.log(!!999); //true
console.log(!!undefined); //false
//!!도 타입을 바꿔주는
// ! true를 false로 반전시켜라.  !!논리연산자를 반전해라?
// 근데 999는 숫자이지만 논리연산자로 인식해서  true에서 false가 되는 것


// 회원 로그인 여부 확인
function isLogin() {
  // const token = window.localStorage.getItem('LOGIN_ACCESS_TOKEN');
  // return token !== null;

  return !!window.localStorage.getItem('LOGIN_ACCESS_TOKEN');
  
}







