
//객체 생성
//강아지 정보 저장

var name = `호두`;
var  kind = `푸들`;
var age = 7;
var injection = true;
var favorite = [`고구마`, `산책`];
var bark = () => console.log(`왕망이`);

//배열. 1번이 뭔지, 알 수 없음
var dog = [
  `호두`,
  `푸들`,
  7,
  true,
  [`고구마`, `산책`]
];
//배열. => 순서가 바뀌면 인덱스가 고장남.
console.log(dog[0]); //호두



var dog = {
  name: '호두',
  kind: '푸들',
  age: 7,
  injection: true,
  favorite: ['산책', '간식'],
  bark: () => console.log('왈왈!')
};
//객체 : 순서가 바껴도 상관없음
console.log(dog.name); //호두
console.log(dog.favorite); //[ '산책', '간식' ]



//고양이 정보 저장
var cat = {
  name: '망고',
  kind: '코숏',
  age: `?`,
  injection: true,
  favorite: ['낮잠', '츄르'],
  hate: {}//객체 안 객체 사용 가능
};
console.log(cat.name); //호두
console.log(cat.favorite); //[ '산책', '간식' ]


// var '게시판' = {
//   글번호:11,
//   작성자: {
//     계정명: '가나다',
//     닉네임: '하잉',
//     가입일자: '2023-12-12',
//   },
//   글내용 : '집갈랭',
//   작성일자 : '2024-03-26,'
// };
//key는 따음표 사용하지 않으며 문자만 사용해야 하고 숫자는 사용 불가하다.
//띄어쓰기를 하고싶을 떈, 'for waiting' 따음표를 사용하지만, 되도록 사용하지 않는다.





console.log(`=========================`)

// 객체에 저장된 데이터 참조(조회)
console.log(dog.age);
console.log(cat.injection);
//고양이의 2번쨰 취미-취미 안은 배열이기 때문에 배열을 사용한다. 논리에서는 사용x
console.log(cat.favorite[1]);



//데이터 타입: 어떤 데이터가 할 수 있는 일을 정의
dog.age++ //가능. 숫자니까
dog.name++ //안됨. name은 string이기 때문에 ++을 지원하지 않는다
!dog.injection //가능
dog.kind.push('말티즈') //불가능. push는 배열에서만 사용
dog.favorite.push('꼬리흔들기') //가능 배열이니까.
cat.favorite.splice(0,1); //가능 배열이니까.

dog.favorite.slice(0).splice(1,1).reverse(); // 안됨
dog.favorite.splice(0,1); // slice가 없을 때는 실행되며 바뀜.
//slice는 추출하는 것이라.(사본을 만들어 추출. 그래서 원본에 영향이 없음)

//객체를 참조하는 두 번쨰 방법
console.log(`==========================`);


var key = 'name'

console.log(dog.name); //호두
console.log(dog('name')); //문자열로 쓰기 //호두
// .으로 안되는 것이 있음.
console.log(dog[key]);
//console.log(dog[name]); //안됨. undefined나옴


//프로퍼티 수정 (기존에 있는 key로 접금)
dog.age = 4;
cat.favorite[1]='실뭉치';

console.log(`==================`);




//프로퍼티 동적 추가 (기존에 없는 key로 접금)

cat.friend = `철수`;

console.log(cat);

//프로퍼티 삭제
delete cat.hate;
delete cat.friend;

console.log(cat);