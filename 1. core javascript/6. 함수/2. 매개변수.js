//x부터 y까지의 누적합을 구해야 함

// var total = 0;
// for(var i=1; i<=10; i++){
//   total += i;
// }

function calcRangeTotal(x, y) {
  var total = 0;
  for (var i = x; i <= y; i++) {
    total += i;
  } //i와 total은 정의가 되어있는데 x, y는 정의되지 않았다.
   return total;
}


var result1 = calcRangeTotal(1,10);
console.log(result1); //55

var result2 = calcRangeTotal(4, 7);
console.log(result2); //22



//매개변수의 기본값================================

function sayHello(language = `한국어`){ //ES6부터는 기본이 한국어가 나오도록

//만약 아무것도 안적으면 한국말이 나오게 설정하고 싶다면!!
//ES5시절에는
  // language = language || `한국어`;

  switch (language){
    case `한국어`:
      console.log(`안녕`);
      break;

    case `영어`:
      console.log(`hello`);
      break;

    case `일본어`:
      console.log(`오하이오`);
      break;
    
    default:
      console.log(`@#$*%`);
      break;
  }
}

sayHello(`영어`);
sayHello(); //@#$*% (undefined)
//만약 아무것도 안적으면 한국말이 나오게 설정하고 싶다면!!

sayHello();





// 매개변수가 없는 함수
function selectRandomPet(){
  var pets =  [`강아지`, `고양이`, `새`, `햄스터`, `도마뱀`];
  var rn = Math.floor(Math.random()* pets.length);
  return pets[rn];//랜덤으로 동물이 나옴
}

var r1 = selectRandomPet();
var r2 = selectRandomPet();
var r3 = selectRandomPet();

console.log(`r1: ${r1}`);
console.log(`r2: ${r2}`);
console.log(`r3: ${r3}`);











