
var pets = ['강아지', '고양이', '햄스터'];
console.log(pets);

// pets[3]='도마뱀';
// push() 배열 맨 끝에 데이터 추가
pets.push('도마뱀');
pets.push('물고기');
pets.push('토끼', '염소'); //한번에 여러 요소를 추가할 수 있다.
console.log(pets);

//pop()  배열 맨 끝 요소 삭제
var myPet1 = pets.pop(); //염소
pets.pop(); //토끼
var myPet2 = pets.pop(); //물고기


console.log(pets); // [ '강아지', '고양이', '햄스터', '도마뱀' ]
console.log(myPet1); //염소
console.log(myPet2); //물고기


// shift()   배열의 맨 첫 데이터 삭제
//unshift()  배열 맨 첫 번째에 추가
pets.shift(); //강아지
console.log(pets); // [ '고양이', '햄스터', '도마뱀' ]

pets.unshift('멍멍이');
console.log(pets); //[ '멍멍이', '고양이', '햄스터', '도마뱀' ]











