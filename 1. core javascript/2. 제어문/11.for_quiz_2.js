//문제2: 입력한 정수의 약수를 출력하고 개수를 출력

var num = prompt(`정수값:`);
var result = ``;
var count = 0;

for(i=1; i<=num; i++){
  if(num%i===0){
    result+= i + '\n';
    count+=1;
  }
}
alert(`${result}약수는 ${count}개 입니다.`);

