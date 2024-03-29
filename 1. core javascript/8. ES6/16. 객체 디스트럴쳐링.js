
const employee = {
  emName: `뽀로로`,
  age : 10,
  hireDate: `2020-01-30`,
  birthDate: `2015-12-31`
};

//많이 쓰는 것들은 따로 저장해서 사용함.
const name = employee.emName;
const hire = employee.hireDate;

//그래서 내가 뽑고 싶은 것들만 추출해서
const{ empName, hireDate} = employee;
console.log(`name: ${empName}, hire: ${hireDate}`);

function foo(employee){
  const{empName, age} = employee;
  console.log(`내 이름은 ${empName}입니다.`);
  console.log(`나이는 ${age}입니다.`);
}

// //이렇게도 사용할 수 있다.
// function foo(empName, age){
//   //const{empName, age} = employee;
//   console.log(`내 이름은 ${empName}입니다.`);
//   console.log(`나이는 ${age}입니다.`);
// }


//const age = 10;

//const {age, birthDate} = employee; //age를 뿌시려고 하는데 앞에서 쓰고있다면 이름을 바꿔줄 수 있음
const {age:empAge, birthDate} = employee; // empAge로 이름을 바꿔줬다!
console.log(empAge);

//사용예시================
const divStyle={
  'font-size': '18px',
  'backfround-color': 'red'
};

const{'font-size':fontSize, 'backfround-color':bgColor} = divStyle;//-특수기호는 쓸 수 없으니까 다른 이름으로 지정해줘야 함.
console.log(fontSize);
console.log(bgColor);




console.log(`=======================`);
//이름, 나이빼고 나머지 배열로 저장하고 싶음
const dog ={
  kind : '말티즈',
  name : '해피',
  age : 3,
  injection : false
};

const {kind, age: petAge, ...rest} = dog;
console.log(kind);
console.log(petAge);
console.log(rest);


//객체 안전 복사
const copyDog = {...dog};
copyDog.age = 10;

const copyDog2 = {
  ...dog,
  age: 20,
  favorite: ['산책']
};

console.log(dog); //{ kind: '말티즈', name: '해피', age: 3, injection: false }
console.log(copyDog); //{ kind: '말티즈', name: '해피', age: 10, injection: false } 10으로 바뀜!!
console.log(copyDog2); //{ kind: '말티즈', name: '해피', age: 20, injection: false, favorite: [ '산책' ] }  20으로 바뀌고 favorite추가됨!








