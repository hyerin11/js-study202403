
const userNames = ['김철수', '강감찬', '박영희'];


//userNames에서 각각 요소들을 다시 변수에 집어넣고 싶을 때

// //각각 지정해줘도 되지만
// const kim = userNames[0];
// const kang = userNames[1];
// const park = userNames[2];

// console.log(`a: ${a}, b: ${b}, c: ${c}`);

//한 줄로 처리가 가능
const[kim, kang, park] = userNames; //인덱스 0을 kim에 넣고, 1 kang에 넣고 ...

//만약 kang은 안뺴고 싶다면?
const[kk, , pp] = userNames;
console.log(`kk:${kk}, pp : ${pp}`);

//=================================
//first:20을 , second에 10을 바꿔서 넣고 싶을 때

const [x, y, z]=[1, 2, 3];

let first=10, second=20;
[first, second] = [second, first];  

console.log(`first: ${first}, second:${second}`);

//================
//배열 안에 맨 앞에 2개만 각각 변수에 저장하고,
//나머지는 다시 배열로 묶고 싶다면
const numbers = [1, 3, 5, 7, 9, 11, 13];

// const numsCopy = numbers.slice();

// const one=numbers.shift();
// const three = numbers.shift();

// console.log(`one: ${one}`);
// console.log(`three: ${three}`);
// console.log(`numbers: ${numbers}`);

//한 줄로 처리 가능!!!
const[one, three, ...numsCopy] = numbers; //...나머지는 numsCopy에 넣어라

console.log(`one: ${one}`);
console.log(`three: ${three}`);
console.log(`numbers: ${numsCopy}`);
console.log(`numbers: ${numbers}`);


//================
console.log(`=================`);
//스프레드를 통한 배열 간편 복사!------------------------
const foods = ['감튀', '햄버거', '콜라'];
//const copyFoods = foods; //주소만 복사해가서 food에 추가하면 slice에도 추가됨
//const copyFoods = foods.slice; //그래서 slice로 복사를 해주기도 하는데,

const copyFoods = [...foods]; //하면 됨. ...이 평판화 하는 것으로 food와 copyfood는 따로 놀게 됨.

//const copyFoods = foods.map(f=>f); //이것도 추출이라고 할 수 있긴 함.


foods[0]='치킨너겟';
copyFoods.push('밀크쉐이크');



console.log('foods:', foods);
console.log('copyFoods:', copyFoods);


console.log(`===================`);

const newFoods = ['치킨', ...foods, '닭다리'];
console.log(newFoods); //[ '치킨', '치킨너겟', '햄버거', '콜라', '닭다리' ] 앞, 뒤에 추가됨


// 배열 합칠 때도 활용할 수 잇음
// a.concat(b)  ==>   […a, …b]
// const newFoods = ['육포', …foods, '닭다리', …userNames];
// console.log(newFoods);














