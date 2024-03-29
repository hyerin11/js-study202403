function add2(n1, n2) {
  return n1 + n2;
}
function add3(n1, n2, n3) {
  return n1 + n2 + n3;
}

// 만약 n개의 정수 합을 구해주는 함수를 만들어야 한다면
// 파라미터에 집합자료형(배열, 객체)을 전달한다

function addAll(numbers) {
  var total = 0;
  for (var n of numbers) {
    //5,9,2를 하나씩 쌓음.
    total += n;
  }
  return total;
}

//ES6-spread문법=================================
function addAllES6(first, second, ...numbers) {
  console.log(numbers);
  var total = 0;
  for (var n of numbers) {
    //of뒤에는 배열이 와야함.
    total += n;
  }
  return total;
}

var r1 = addAll([5, 9, 2][(1, 2, 3)]); //배열 1개로 취급
console.log(`r1: ${r1}`);

var r2 = addAllES6(10, 20, 30); //배열로 안묶었기 때문에 10만 출력됨. //type error남.그래서 대괄호를 넣어줘야 함.
//하지만 대괄호를 안쓰고 싶다면! spread문법을 사용하면 됨 앞에 ...붙여주기!
//하지만, 배열을 2개쓰고싶다고 ...numbers, ...others라고 하면 안됨. 어디까지를 넘버즈에 넣어야 하는지 모르니까.
//그렇기 때문에
//var r1 = addAll([5,9,2,], [1,2,3]);
//안에서 배열로 끊어주면 됨.

console.log(`==============================================`);

// 다중 반환값
// 함수의 반환값은 언제나 하나다.(들어가는 값은 여러개지만, 나가는 것은 하나만!)
function arithmeticOperate(n1, n2) {
  //var addResult = n1 + n2;
  var subResult = n1 - n2;
  var multiResult = n1 * n2;
  var divResult = n1 / n2;
  //return [addResult, subResult,multiResult, multiResult ];
  return { sub: n1-n2, multi: n1*n2, add:add2(n1, n2), div: n1/n2, other: subResult**divResult };

}

var r3 = arithmeticOperate(20, 10);
console.log(`덧셈결과: ${r3[0]}`);
console.log(`뺄셈결과: ${r3[1]}`);
console.log(`곱셈결과: ${r3[1]}`);
console.log(`나눗셉셈결과: ${r3[1]}`);



var r4 = arithmeticOperate(5,3)[1];



function foo(){
  return [1,2,3];
}
foo()[0]; //1
foo(). push(4);
foo()[1]*2;//4















