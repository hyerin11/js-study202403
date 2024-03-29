
for(var i=1; i<=10; i++){
  if(i%2===0) break;
  console.log(i);
}
console.log('종료');

while(true){
  var n = +prompt(`숫자를 입력하시오`);

  if(n===0) break;
  else if(n===1) continue;

  alert('메롱');
}
alert('끝났지롱');