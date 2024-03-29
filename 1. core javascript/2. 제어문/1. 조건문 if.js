


/**
 랜덤 정수 생성하기 : Math.random()

  Math.random() >      0.0 <=  < 1
  Math.random() * 10   0.0 <=  < 10.0

  Math.florr()  : 소수점 이하 버림

  Math.floor(9.389) => 9
  Math.floor(Math.random()*10) => 0 <=  <10
  Math.floor(Math.random()*10)+1 => 1 <=  <= 10

//랜덤범위 정수값 공식
x이상 y이하의 랜덤정수 생성
Math.floor(Math.random() * (y-x+1)) + x

ex) 117~142까지
Math.floor(Math.random() * (142-117+1)) + 117


 */
var randomNumber = Math.floor(Math.random()*10)+1;
console.log(`랜덤값: ${randomNumber}`);




var score = 70;
console.log(`점수 : ${score}점`);

var score = Math.floor(Math.random()*101);
console.log(`점수: ${score}점`);


if(score>=60){
  console.log(`합격입니다`);
}if(score<60){
  console.log(`불합격입니다.`);
}
