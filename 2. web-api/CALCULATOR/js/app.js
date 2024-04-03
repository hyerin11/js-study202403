//실행코드(함수 호출, 이벤트 등록, 핸들러 정의 등)

//console.log($userInput);

//이벤트 핸들러 바인딩
$addBtn.addEventListener('click', e => {
  calculate('+');
});
$subtractBtn.addEventListener('click', e => {
  calculate('-');
});
$multiplyBtn.addEventListener('click', e => {
  calculate('*');
});
$divideBtn.addEventListener('click', e => {
  calculate('/');
});


