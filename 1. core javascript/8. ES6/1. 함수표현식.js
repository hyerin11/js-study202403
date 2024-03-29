


//2개 숫자 더해서 리턴하는 것
//함수 선언문(정의문) ------------------;세미클론 안붙임
function add(n1, n2){
  return n1+n2;
}
const r1 = add(10, 30);
console.log(`r1: ${r1}`);


const plus = add;
//add와 add()는 다르다.
//add()은 실행시키는 것
console.log(plus); //[Function: add]
console.log(typeof plus); //function
const pluss = add(10,30);
console.log(typeof pluss);//number

const r2 = plus(5,8);
console.log(`r2: ${r2}`); //13



/*
    # 다음과 같은 조건을 만족하는 객체를 일급객체라고 한다.

    1. 무명의 리터럴로 생성할 수 있다. 즉, 런타임에 생성이 가능하다.
    2. 변수나 자료구조(객체, 배열 등)에 저장할 수 있다.
    3. 함수의 매개변수에 함수를 전달할 수 있다.
    4. 함수의 반환값으로 사용할 수 있다.
    # 자바스크립트의 함수는 위의 조건을 모두 만족하므로 
      일급 객체라 할 수 있다.
 */

//익명함수 : 함수를 값(리터럴)으로 본 경우
//함수 표현식 -------------------함수를 식으로 본 것
const multifly = function(n1, n2){
  return n1*n2;
};

const r3 = multifly(3,4);
console.log(`r3: ${r3}`); //12



const array = [
  10, `zzz`, true, [], {}, add, multifly, function() {console.log(`zzz`);}
];
//const r4 = array[6](7, 9);
//console.log(r4(10, 99)); // 109

array[7]();






console.log(`=====================================`);


const dog ={
  name : '호두',
  age : 7,
  favorite : ['간식', '산책'],
  play : function(tool){ //>>객체 안에 들어있는 함수를 메소드라고 한다.(객체의 기능을 표현)
    console.log(`${this.name} 강아지는 ${tool}장난감으로 노는 중~!`);
  }
};


const cat ={
  name :`야옹이`,
  sleep : function(){
    console.log(`쿨쿨~`);
  }
}


dog.play(`개껌`); //호두 강아지는 개껌장난감으로 노는 중~!
//dog.sleep(); // 오류남
cat.sleep(); //쿨쿨~




const arr = {
  0: 'zzz',
  1: 'fgsdf',
  2: 'dfsdf',
  length: 3,
  indexOf: function() {},
  slice: function () {},
  push: function () {},
};

const arr2 = [];
console.log(typeof arr2);















