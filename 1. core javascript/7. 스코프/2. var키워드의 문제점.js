
//1. 변수의 중복선언을 암묵적으로 허용

//var x =10;
//let x = 10;

//십만줄 어쩌구우~~

//var x = `ddd`;
//let x = `ddd`;
//console.log(`x:${x}`); //x:ddd 전역변수를 지워버림..


//2. 블록(중괄호 안에서 살아남기) 레벨 스코프를 지원하지 않음
let i = `메롱`;

for(let i=0; i<5; i++){ //for문이 끝나면 i가 죽었으면 좋겠다. 그래서 var가 아닌 let사용하면!?
  console.log(`for-i : ${i}`);
}

console.log(`global-i: ${i}`);


//3. 호이스팅 : 선언위치와 관계없이 참조가능
hobby = `댄스`;
//어쩌구~~~...

let hobby; //(나아아아중에 선언해주기)
console.log(hobby); // 댄스 출력. (자바스크립트에서만 허용해줌.. var쓰면)
//하지만 let을 사용하면 출력되지 않기 때문에 안전하게 let을 사용한다.

















