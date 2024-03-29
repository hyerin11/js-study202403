//무작위 숫자 만들어서 up&down게임 만들기
// 1~100사이의 랜덤한 숫자 하나가 주어진다.



//정답 생성
var secret = Math.floor(Math.random()*100)+1;
// console.log(secret); 랜덤으로 나오는지 출력해봐야 함

//사용자의 입력값
var answer = +prompt(`[1 ~ 100 사이의 무작위 숫자를 맞춰보세요 !!!`);
//var answer = +prompt(`[1 ~ 100 사이의 무작위 숫자를 맞춰보세요 !!! ${secret}`); 한번 보자

//정답 판정
if (secret === answer){
      alert(`딩동댕~~~!!!`);
}else if (secret>answer){
      alert(`up!`);
}else{
      alert(`down!`);
}


var countDown = 5; //입력기회
while(true){

var answer = +prompt(`[1 ~ 100 사이의 무작위 숫자를 맞춰보세요 !!!`);
countDown--;

if (secret === answer){
      alert(`딩동댕~~~!!!`); break;
}else if (secret>answer){
      alert(`up!`);
}else{
      alert(`down!`);
}

//카운트다운 게임 종료

if(countDown===0){
      alert('기회가 소진되었습니다니다.');
      break;
}else{
      alert('${countDown}번의 기회가 남았습니다.');
}

}




// alert(`~~~~~~~~~~~ 재미있는 UP&DOWN 게임 ~~~~~~~~~~~\n
//            [1 ~ 50 사이의 무작위 숫자를 맞춰보세요 !!!  ]`);

// var random = Math.floor(Math.random()*50)+1;

// var num = +prompt('1 ~ 50 사이의 숫자를 입력해주세요!');

// while(true){
//       if(num<random){
//        alert(`UP!!!`);
//       }else if(num>random){
//        alert(`DOWN!!!`);
//       }
// }alert(`딩동댕~~~!!!`);



