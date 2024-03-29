//랜덤 문제 받기
var num1 = Math.floor(Math.random() * 20) + 1;
var num2 = Math.floor(Math.random() * 20) + 1;
// console.log(num1);
// console.log(num2);

//문제 생성
var math = +prompt(`Q$(count). ${num1} + ${num2} = ??`);
var result = (num1+num2);


// 정답 판정

if(math===result){
  alert('정답입니다!');
}else{
  alert('틀렸습니다!');
}


//임시--------------------------------
// var count=1;

alert('~~~~~ 재미있는 사칙연산 게임 ~~~~~\n[즐겁게 문제를 푸시다가 지겨우면 0을 누르세요.]\n============================')
while(true){
  // count++;

  //랜덤 문제 받기
var num1 = Math.floor(Math.random() * 20) + 1;
var num2 = Math.floor(Math.random() * 20) + 1;

  var math = +prompt(`Q$(count). ${num1} + ${num2} = ??`);
  var result = (num1+num2);

  if(math===result){
    alert('정답입니다!');
    
  }else{
    alert('틀렸습니다!');
  }
}
 


// //  정답코드
// while (true) {
//   var firstNumber = Math.floor(Math.random() * 20) + 1;
//   var secondNumber = Math.floor(Math.random() * 20) + 1;

//   // 사용자의 입력답
//   var userAnswer = +prompt(`Q${qNum}. ${firstNumber} + ${secondNumber} = ??`);

//   if (userAnswer === 0) {
//     alert('게임을 종료합니다.');
//     break;
//   }

//   // 실제 정답
//   var realAnswer = firstNumber + secondNumber;

//   // 정답 검증
//   if (userAnswer === realAnswer) {
//     alert('정답입니다!!');
//   } else {
//     alert('틀렸습니다!!');
//   }
// } // each game loop





// //0눌렀을 때 종료
// if(result === 0){
//   alert('종료하시겠습니까? \n 종료를 원하시면 다시 00을 입력해주세요.');
//   if(result===00){
//     break;
//   }
// }


// alert('~~~~~ 재미있는 사칙연산 게임 ~~~~~\n[즐겁게 문제를 푸시다가 지겨우면 0을 누르세요.]\n============================')

