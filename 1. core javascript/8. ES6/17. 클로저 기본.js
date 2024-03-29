
//자바스크립트의 함수는 함수를 리턴할 수 있음

function Calculator(a){
return function(n1, n2){ // 이만큼이 x 
  return n1+n2;
}; //숫자, 문자, 논리, 배열, 객체, 함수까지 다 리턴할 수 있음
}
Calculator(10); //숫자, 문자, 논리, 배열, 객체, 함수 다 보낼 수 있음.


const x = Calculator();
console.log(typeof x); //function

const y = x(10,20);
console.log(`y: ${y}`);  //30


console.log(`===========================`);

const z = Calculator();
console.log(`z: ${z}`);//z: function(n1, n2){ return n1+n2; }

const z2 = Calculator()(6, 9); //위의 함수에 다시 리턴해서
console.log(`z2: ${z2}`);// 30 출력됨





const operate = function(){
  return function(n1, n2){
    return n1*n2;
  }
};
const k = operate();
console.log(`k: ${k}`); //k: function(n1, n2){return n1*n2;}

//위와 같은 코드
const operate2 = function(){
  return (n1, n2)=>n1*n2;
};

const k2=operate();
const m = k(3, 7);
console.log(`m:${m}`);




console.log(`===============================`)

function bar(){
  function fas(){
    return 10;
  }
  return fas;
}

const h = bar()(); //10 호출하려면
console.log(`h: ${h}`);//10




//===========================
//카운트를 증가시키는 함수

// let count =0; //전역변수
// const increase = function(){
//   return count++;
// };

//위와 같은 코드임
let count =0; //전역변수
const increase = () => count++;

console.log(increase());//0
console.log(increase());//1
console.log(increase());//2
console.log(`count: ${count}`); //count: 3

// 전역변수 사용하니까. 값이 달라짐(실행이 꼬임). 그래서 전역 변수가 아닌 지역 변수를 사용해야 함.

//그래서 지역변수 사용하면====================
const increase2 = ()=>{
  let count2 = 0;
  return ++count2;
};

increase2();
increase2();
const count2 = increase2();
console.log(`count2: ${count2}`); //count: 1

//문제점 ) 전역변수 사용하자니 위험하고, 지역변수 사용하기에는 증가가 안됨
//해결방안 ) 그래서 closer를 통해 지역변수의 스코프를 늘려줄 수 있다
const increaseClosure = ()=>{
  let count3 = 0; //지역변수

  const helper = ()=>++count3; //내부에서 돌림!

  return helper;
};
const increase3 = increaseClosure();

console.log(increase3()); // 1
count=999; // 상관없음.
console.log(increase3()); // 2
console.log(increase3()); // 3




//즉시 실행 함수 : 함수를 1회성으로 사용할 목적으로 만드는 함수
//위에서도 increas를 여러번 호출하기도 하고 다 이름 지정해주면 언젠가 또 꼬이니까 익명으로 이름을 달아주는거임

(function(){
  console.log('hello');
})(); //hello 출력됨. 소괄호에 넣어주고, 소괄호 출력.


// const incClosure = () => {
//   let count = 0;
//   return()=> count++;
// };
// const increase_ = incClosure(); //123번에 인클루저 여러번 사용하면 카운트 올라가니까 위에 코드를 익명함수로 만들어서 출력함. 일회용으로

// increase_();
// increase_();
// increase_();



  const increase_ = (() => {
    let count = 0;
    return()=> count++;
  });
  
  increase_();
  increase_();
  increase_();









