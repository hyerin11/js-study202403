
const userList = [
  {
    account: 'abc1234',
    userName: '대길이',
    job: '추노',
    address: '서울',
    hobbys: ['수영', '축구', '테니스'],
    salary: 5400000,
    age: 35,
  },
  {
    account: 'banana',
    userName: '빠나나',
    job: '과일',
    address: '서울',
    hobbys: ['푸드파이팅', '테니스'],
    salary: 9700000,
    age: 18,
  },
  {
    account: 'park1234',
    userName: '주차왕',
    job: '발렛파킹',
    address: '경기',
    hobbys: ['족구', '축구', '테니스', '영화감상'],
    salary: 3900000,
    age: 56,
  },
  {
    account: 'fire',
    userName: '불꽃남자카리스마',
    job: '게이머',
    address: '서울',
    hobbys: ['독서', '테니스'],
    salary: 7900000,
    age: 42,
  },
];


const appleBasket = [{
  color: 'green',
  sweet: 13
},
{
  color: 'red',
  sweet: 14
},
{
  color: 'red',
  sweet: 11
},
{
  color: 'green',
  sweet: 6
},
{
  color: 'green',
  sweet: 7
},
{
  color: 'green',
  sweet: 9
},
];


//배열고차함수 reduce : 배열의 각 요소들을 주어진 콜백에 맞게 합산, 누적하여 하나의 결과값을 반환하는 함수


// //reduce에 들어가는 callback
// cancelIdleCallback(accumulator, currentValue)
// //accumulator: 어떤 데이터를 ㅆ아가는 변수
// curremtValue;

//reduc연습하기``````````````````````````````````````````````
const result = [10, 20, 30, 40, 50, 60].reduce((a, b) => {
  //console.log(a);
  //console.log(b);
  //console.log(b);
  console.log(`${a}+${b}=${a+b}`);
  console.log(`============`);
  return a+b;
},700); //시작값이 700. 0이면 시작값이 0. 아예 없어으면 0번 인덱스 10이 시작값이 된다.!!!!

console.log(result);


//reduce의 콜백함수 다음 파라미터는 initialValue를 의미하며 반복문의 accumulator시작값을 의마한다.
//따라서 0을 시작값으로 두고 return a+b;를 하면
//0+1+2+3+4+5+6
//시작값을 없애면 accumulator의 시작값이 0번 인덱스로 지정되며
//1+2+3+4+5+6


//---------------------------------------------------------------------------
//사과 바구니에 있는 사과들의 모든 당도를 합산한 결과 얻기

const resultTotalSweet = appleBasket
  .reduce((totalSweet, apple)=>{
    console.log(totalSweet);
    console.log(apple);
    console.log(`================`);
    return totalSweet+apple.sweet;
  },0)

  console.log(`사과 당도 총합 : ${resultTotalSweet}`);


//짧게 쓴다면
//const resultTotalSweet = appleBasket.reduce((total, apple)=>total+apple.sweet, 0);
//console.log(`사과 당도 총합 : ${resultTotalSweet}`);


console.log(`=========================`);


function myReduce(array, callback, initialValue){
  //어떤 값을 누적할 변수
  let accumulator = initialValue === undefined ? array[0]:initialValue;
  const startIdx = initialValue === undefined ? 1 : 0;
  for(let i=startIdx; i<array.length; i++){
    accumulator = callback(accumulator, array[i]);
  }
  return accumulator;
}


//====================================================================
console.log(`=======================`);

//색깔별로 사과 갯수 카운트하기

const countByColor = appleBasket.reduce((count, apple)=>{
  
  if(apple.color in count){  // 아래에서 만들어준 이후에는 ++ 해준다.
    count[apple.color]++;
  }else{ // 안에 green, red없으면 이거 안에 red=1, green=1로 만들어주고
    count[apple.color]=1;
  }

  return count;

},{})

//===================최댓값 구하기====================

const nums =[333,66,777,1000,5,99];

const maxValue = nums.reduce((max, n)=>max<n?n:max); //뒤에 아무것도 안써있기 때문에 333부터 시작해서 자리뺏기 싸움
console.log(`최대값: ${maxValue}`);





