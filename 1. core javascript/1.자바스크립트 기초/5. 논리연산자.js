
var t = true, f= false;

// and연산 : 논리함 &&
console.log(`====논리합====`);
console.log(t && t);  //t
console.log(t && f);  //f
console.log(f && t);  //f
console.log(f && t);  //f

// or연산 : 논리곱 || 둘 중 하나라도 t면 t
console.log(`====논리곱====`);
console.log(t || t);  //t
console.log(t || f);  //t
console.log(f || t);  //t
console.log(f || t);  //t


// not연산 : 논리반전 ! 참이 아니다
console.log(`====논리곱====`);
console.log(!t); // f


var money = 1000;
if(money){
  console.log('나는 돈이 있어요');
}else{
  console.log('나는 빈털터리에요');
}

if(!money){
  console.log('나는 돈이 없어요');
}else{
  console.log('나는 돈이 있어요');
}