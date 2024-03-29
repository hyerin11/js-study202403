//문제1: 입력한 정수 이하의 2의 제곱수를 가로로 출력



var num = +prompt(`양의 정수를 입력하시오`);
var result='';

for(var i=2; i<=num; i*=2){

  result += `${i} `;

}
alert(result);



// while문
// var n = 50;
// var i = 2;
// while(i<=n){
//   console.log(i);
//   i*=2;
// }