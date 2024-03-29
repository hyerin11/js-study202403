// 정수 2개 입력하고 그 값이 차이를 알려준다.

var num1 = +prompt(`정수 A`);
var num2 = +prompt(`정수 B`);

//절대값으로 구하기
// var diff=(num1>numb)? a-b : b-a;

if(num1>=num2){
  alert(`${num1-num2}`);
}else{
  alert(`${num2-num1}`);
}
