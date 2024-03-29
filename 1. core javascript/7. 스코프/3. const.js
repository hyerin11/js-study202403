let x;
x = `zz`;
x = `yy`;

console.log(x); //yy출력

//1. 상수(변경 불가능한 데이터) 선언할 때 사용. 
const y = `메롱`; 
//const y = `ㅎㅎㅎ`; 

console.log(y); //출력 안됨. 하나의 값만 넣을 수 있기 때문에.

const PI = 3.14159265; //변경되지 않는 값에서 사용
const COLOR_GREEN = `#0F0`;

/*
  $div.style.background = COLOR_GREEN;
 */


//2. 상수는 객체의 불변성을 유지할 수 있다.
//⭐객체를 선언할 때는 const를 쓰자!!!

const kim = {
  name : `짱구`,
  age : 30
};
kim.age = 31;
kim.name = `구구짱`;


// kim = {
//   name : `짱구`,
//   age : 30
// };

//배열도 객체의 일부이기 때문에 +함수도. 그래서 const쓰는게 좋음
const array = {
  0: `z`,
  1: `dd`,
  2: `ddd`,
  length:3
};
array.length


//es6부터는 var 쓰지마ㅏ!
//무조건 const쓰고, 나중에 값이 바껴야 하면 let으로 바꿔.

for(let i = 0; i<10; i++){ //i는 바껴야 하니까 let

}

