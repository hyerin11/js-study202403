
const food = `돈까스`;
const userName = `스윙스`;

console.log(`${food}의 왕 ${userName}`);


//브라우저 전용함수 : nodejs환경에서 작동 불가 live서버로 브라우저에서만 볼 수 있음

//prompt() : 브라우저에서 입력할 수 있게 해주는 함수
//confirm() : 브라우저에서 확인/취소를 할 수 있게 해주는 함수
//alert() : 브라우저에서 알림창을 띄우는 함수

// var yourName = prompt(`당신의 이름을 입력하세요!`);
// alert(`입력한 이름 : ${yourName}`);


// var resultFlag = confirm(`정말로 삭제합니까?`);
// console.log(`나의 대답: ${resultFlag}`);



var n1 = +prompt(`첫 번째 수를 입력하세요`);
var n2 = +prompt(`두 번째 수를 입력하10세요`);

alert(`안녕`+`하세요`);
alert(`두 수의 합 : ${n1+n2}`);