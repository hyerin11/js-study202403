var foodList = ['닭꼬치', '볶음밥', '짜장면', '족발'];

//indexOf()   :배열의 특정 요소(데이터)가 몇 번 인덱스에 있는지 알려줌
var target = '짜장면';

var index = foodList.indexOf(target);
//짜장면이 여러개 있으면 앞에 있는 것 가지고 오고, 존재하지 않으면 -1이라고 나온다.
console.log(`index: ${index}`);

for(var i=0; i< foodList.length; i++){
  if (target === foodList[i]){
    index=i;
    break;
  }
}


//includes()  :특정 데이터가 있는지 없는지 논리롤 확인  true, false로 나옴
var flag = foodList.includes('떡볶이');
console.log(`flag: ${flag}`);  // false



// slice()   :배열을 원하는 범위만큼 
var sliced = foodList.slice(1, 3);
console.log(sliced);
//3번부터 끝 까지
var sliced = foodList.slice(3);
// => slice를 해도 복사복에서 추출하는 개념이 완본은 변하지 않음
console.lof(sliced);



// reverse() : 배열을 역정렬
var nums = [10, 20, 30, 40, 50];
var numsCopy = nums.slice(); //카피본 생성

nums.reverse();

console.log(nums);
console.log(numsCopy);




//concat()   :배열을 결합한 사본을 갖다준다
console.log('==================');
var arr1 = [10, 20, 30];
var arr2 =  [99, 999];

var concated = arr1. concat(arr2);
console.log(concated);



// splice() : 배열의 삭제 및 삽입, 
// 원본에서 삭제 삽입을 진행하므로 원본이 손상됨
console.log('====================');

console.log(foodList);

foodList.splice(2, 1);

console.log(foodList);

foodList.splice(0, 1, '파스타', '보쌈');

console.log(foodList);

foodList.splice(2, 0, '마라탕');
console.log(foodList);

foodList.splice(2); // 2번부터 끝까지 싹지워
console.log(foodList);
