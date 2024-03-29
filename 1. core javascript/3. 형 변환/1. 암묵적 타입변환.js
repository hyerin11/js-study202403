

var n1 = 10;
var n2 = '20';

console.log(n1+n2); //1020
//10이 문자열이 되어 1020이라는 결과가 나온다


var n3 = n1+'';
console.log(typeof n3); //string
//숫자+문자열 -> 문자열

var n4 = n2 - n1 - 5;
console.log(n4); //'20'-10-5=5;
//빼기를 할 때는 문자가 숫자로 바뀜

var n5 = n1*n2; //10*'20'
console.log(n5); //200
//문자가 순수한 숫자일 때는 계산이 가능함.(곱셈은 자바스크립트에서만 가능함)

var n6 = 'hello'*3;
console.log(n6); //Nan(숫자가 아니다)

console.log(`=============`);

var n7 = -'99'; //문자열이 숫자 -99가 됨..
console.log(true+true);//논리+논리 = 2 
console.log(true+false);//1
console.log(false+false);//0
//논리값을 강제로 숫자로 변환함.  true=1, false=0

console.log(`==============`);

//  fslsy=0 , '' , null, undefined, NaN   외워야 함

if(true) console.log('hello-1');
if(false) console.log('hello-2');
//hello-1

//falsy 한 값들  결과값 아무것도 찍히지 않음
if(0) console.log('hello-1');
if('') console.log('hello-2');
if(null) console.log('hello-3');
if(undefined) console.log('hello-4');
if(NaN) console.log('hello-5');

if(99) console.log('hello-6');//99는 truthy한 값. 0이 아닌 모든 값들은 true
if(-87.876) console.log('hello-7');//99는 truthy한 값. 0이 아닌 모든 값들은 true
if('안녕') console.log('hello-8');
if(' ') console.log('hello-9');  //스페이스가 되어 있기 때문에 true
if([10, 20, 30]) console.log('hello-10');  //배열 true
if([]) console.log('hello-11');  //배열 값이 없어도 true
if({kind:'개'}) console.log('hello-12');  //객체도 true
if(function() {}) console.log('hello-13');  //true



for(var i=1; i<=10; i++){
  if(i%2===0){  //i%2써도 됨
    console.log(`${i}는 짝수입니다.`);
  }else{
    console.log(`${i}는 홀수입니다.`);
  }
}

console.log(`---------------`);

var apple=10;
if(apple>0){ //if=apple이여도 실행됨
  console.log(`사과가 있습니다.`);
}else{
  console.log(`사과가 없습니다.`);
}

var n = 20;
var flag = n>10;

if(flag===true){ //flag라고 써도됨. 어차피 true여서

}  //거짓 표현할 때는 !flag라고 쓰면 됨


while(999){//무한루프  'ㅁㅇㄴㄻㄴㅇ'해도 무한루프 가능

}





