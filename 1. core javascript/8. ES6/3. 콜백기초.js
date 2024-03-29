
// 어떤 계산을 하는 함수
function operate(param){
  console.log(`param: ${param}`);
  
  const x = param(10,20);//n1, n2로 내려감---------------------0


  console.log(`계산기 작동`);
  const n1 =10, n2=20;
  const result = n1+n2;
  return result;
}

//코드를 파라미터화 하고싶다면?
const abc='123';

function add(n1, n2){
  return n1+n2;
}


//오퍼레이트 호출 -> 다른 이름없는 함수 전달
// operate(function(n1, n2){ //내려온 값 계산해서 다시 x로 올라감-----0
//   return n1+n2;
// });


const result = operate(function(n1, n2) { 
  return n1 + n2; //10+20
  //return n1 * n2; 
  //return [n1, n2];
});

console.log(`result: ${result}`);//30














