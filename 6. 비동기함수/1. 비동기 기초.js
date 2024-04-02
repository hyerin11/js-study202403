

//비동기 함수 setTimeout
//코드를 순서대로 진행시키는게 아닌 시간차로 진행시킬 수 있게 함

console.log('오늘 할 일은 뭘까?');



setTimeout(()=>{
  for(let i=0; i<3; i++){
    console.log('오늘은 집에서 쉴꺼야');
  }
},2000);//시간차를 지정할 수 있음

