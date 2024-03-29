//무작위 숫자 만들어서 up&down게임 만들기
//++기회가 몇 번 남았는지 알려주기

alert(`~~~~~~~~~~~ 재미있는 UP&DOWN 게임 ~~~~~~~~~~~\n
           [1 ~ 50 사이의 무작위 숫자를 맞춰보세요 !!!  ]`);

var random = Math.floor(Math.random()*50)+1;

while(true){
  var num = +prompt('1 ~ 50 사이의 숫자를 입력해주세요!');
  for(var i=1; i<=10; i++){
    if(num===random) break;
    else if(num!==random) continue;
      if(num<random){
       alert(`UP!!!`);
      }else if(num>random){
       alert(`DOWN!!!`);
      }
  }  alert(`딩동댕~~~!!!`);
}