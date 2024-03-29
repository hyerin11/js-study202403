
var food1 = '짬뽕';
var food2 = '탕수육';
var food3 = '자몽';


var arr = [10, 20, 30, 40];
console.log(typeof arr); //object=객체(복합 데이터, 여러개의 데이터)

console.log(arr[1]); //20
console.log(arr[2]**2); //900
console.log(arr[2]); //30

arr[1]=999;
arr[3]++;
console.log(arr); // [10, 999, 30, 41]

//배열 데이터 수 확인
console.log(arr.length); //4


console.log(`첫 번째 데이터: ${arr[0]}`);
console.log(`마지막 데이터: ${arr[arr.length - 1]}`);


//배열데이터 순회 (전체 참조:travis)
// console.log((arr[0]));
// console.log((arr[1]));
// console.log((arr[2]));
// console.log((arr[3]));

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}



//for ~of배열 반복문(배열 전용 반복문)
var weekDays = [`월`, `화`, `수`, `목`, `금`, `토`, `일`];

for(var i =0; i<weekDays.length; i++){
  console.log(`${weekDays[i]}요일!!`);
}
//위와 같은 코드
//마지막 데이터를 꺼내올 때 까지 반복함 == 그래서 전체 순회할 때 사용함.
//하지만, 홀수번째 데이터를 꺼내오는 것은 불가능!
for(var day of weekDays){  //day라는 변수를 만들어야 함. 
  console.log(`${day}요일!`);
}


//배열 생성 관례: 이름 복수형, -List어미
var fruits = ['자몽', '딸기', '오렌지', ];
var fruitList = ['자몽', '딸기', '오렌지'];
var fruitArray = ['자몽', '딸기', '오렌지'];

console.log(fruits.length); //3

var tags = ['<li>오렌지</li>',
            '<a href="#">링크</a>'];
//가독성을 위해 보통은 세로로 배치함