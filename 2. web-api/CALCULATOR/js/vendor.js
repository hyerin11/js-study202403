
//프로그램 전체에서 사용할 전역적인 변수와 함수를 정의

//인풋
const $userInput = document.getElementById('input-number');

//+ = * /
const $addBtn = document.getElementById('btn-add');
const $subtractBtn = document.getElementById('btn-subtract');
const $multiplyBtn = document.getElementById('btn-multiply');
const $divideBtn = document.getElementById('btn-divide');


// result 요소노드
const $currentResult = document.getElementById('current-result');
// 계산 로그 요소노드
const $currentCalculation = document.getElementById('current-calculation');

// result에 그려질 숫자
let currentResult = 0;


//======================================



//=============함수정의 영역==============
/*
// 계산 기능 헬퍼 함수 
const calculate = () => {
  // 더하기를 해야 함 
  // 계산 전 값을 백업
  const prevResult = currentResult;
  // 1. 입력창에 입력한 숫자를 읽어와야 함.
  const enteredNumber = +$userInput.value;

  // 2. 결과에 누적
  currentResult += enteredNumber;

  // 3. 화면에 렌더링
  $currentResult.textContent = currentResult;
  // 계산 로그 생성
  const descriptionLog = `${prevResult} + ${enteredNumber}`;
  $currentCalculation.textContent = descriptionLog;
};

// 빼기 기능
const subtract = () => {
  // 이전 결과 값 가져오기
  const prevResult = currentResult;
  // 입력된 숫자 가져오기
  const enteredNumber = +$userInput.value;
  // 현재 결과 값에서 입력된 숫자 빼기
  currentResult -= enteredNumber;
  // 결과를 화면에 렌더링
  $currentResult.textContent = currentResult;
  // 계산 로그 생성
  const descriptionLog = `${prevResult} - ${enteredNumber}`;
  $currentCalculation.textContent = descriptionLog;
};
*/


// 계산 기능 헬퍼 함수 
const calculate = (operator) => {
  
  const prevResult = currentResult;
  const enteredNumber = +$userInput.value;

 switch (operator) {
    case '+':
      currentResult += enteredNumber;
      break;
    case '-':
      currentResult -= enteredNumber;
      break;
    case '*':
      currentResult *= enteredNumber;
      break;
    case '/':
      currentResult /= enteredNumber;
      break;
  }


//결과 출력
  const descriptionLog = `${prevResult} ${operator} ${enteredNumber}`;
  $currentResult.textContent = currentResult;
  $currentCalculation.textContent = descriptionLog;

};

