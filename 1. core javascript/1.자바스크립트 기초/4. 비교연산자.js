
var a = 5;
var b = `5`;

console.log(a==b);  //true !?!?!?
console.log(a===b);  //false
console.log(a!==b);  //true


console.log('===============');

// ==을 쓰면 결과 예측이 어렵다.
console.log('0' == '');
console.log(0 == '');
console.log('0' == 0);
console.log(false == 'false');
console.log(false == '0');


console.log(`===을 쓰면 결과 예측이 어렵다.`);

console.log('0' === '');
console.log(0 === '');
console.log('0' === 0);
console.log(false === 'false');
console.log(false === '0');


console.log('===============');

//대소 비교
console.log('a'>'A'); //97 > 65  True
console.log('c'>'a'); //99 > 97  True
console.log('강'>'황'); //         True

//         97 99    97 100
console.log('ace'<'ade'); // 두번째자리에서 d가 이겼기 때문에 True







