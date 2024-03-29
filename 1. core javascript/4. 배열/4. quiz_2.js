/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. prompt 창을 띄워 사용자에게 숫자를 입력해 달라고 요청한 후, 
   입력받은 값들을 배열에 순차적으로 저장합니다.
   
2. '그만'이라고 입력하면 질문을 멈추고
   입력했던 숫자배열과 숫자의 총합(배열 요소의 합)을 계산하여 출력하세요.
*/

/*
1. 숫자들 쌓아놓을 배열
var num = [];

2. 숫자 입력받기 >>반복
var userInput = +prompt(`숫자를 입력하세요.\n끝내려면 '그만'이라고 입력하세요!`);

3. 입력받은 숫자 배열에 추가>>반복
num.push(userInput);

alert(num);

-----------------------------------------------------------------------------------

*/




var num = [];
while(true){
  var userInput = prompt(`숫자를 입력하세요.\n끝내려면 '그만'이라고 입력하세요!`);

if(userInput==='그만')break;

num.push(+userInput);
}

//총합 계산
var total = 0;
for(var n of num){
  total+=n;
}

alert(`입력한 숫자 목록 $(console.log(total))\n입력한 숫자 총합: $(sum)`);









/* 
//내가 푼 코드______________________________________________
var num = [];
var num = prompt(`숫자를 입력하세요.\n끝내려면 '그만'이라고 입력하세요!`);

while(true){
  if(num==='그만'){
    break;
  }else{
    total.push();
    total += +num;
  }
  }
  alert(`입력한 숫자 목록 $(console.log(total))\n입력한 숫자 총합: $(sum)`);

  */