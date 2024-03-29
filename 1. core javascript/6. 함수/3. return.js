
function add(n1, n2){
  //console.log(`n1: ${n1} n2: ${n2}`);
  return n1 + n2;
}

//반환값(return): 함수 호출부로 함수의 결과값을 전달해주는 것
add(10, 20);
console.log(add(10,20)); //30
console.log(60);//60

var result = add(10, 20);
console.log(result);//30

var result = add(10, 20) * add(5, 2);
console.log(result); //210


var result = add(10, 20) * add(add(1,4), 2); //210
//실행 순서 : 10,20  >>  1,4  >>  5,2

var result = add(10, 20) * add(add(1,4), (1,1)); //210
//실행 순서 : 10,20  >>  1,4  >>  1,1   >>   5,2
//왼쪽부터 시작하고 안부터 시작!



//return은 함수의 탈출문(종료문)이다.
function add(n1, n2){
  //console.log(`n1: ${n1} n2: ${n2}`);
  return n1 + n2;
  var x = 10; // return 밑에 코드써도 안돌아간다!!!
}


//return이 없는 함수
function multi(n1, n2){
  console.log(`${n1}x${n2}=${n1*n2}`);
}

multi(3,4); //3x4=12
multi(2,9); //2x9=18 잘 나오기는 하는데.. 

var r1 = multi(3,4);
console.log(`r1: ${r1}`); //r1: undefined!!!!!! 저장이 안됨.

multi(add(2,3), add(5,6)); //5x11=55  정상적인 코드

//리턴이 없는 함수는 변수에 저장하지 않고,
//다른 함수의 매개값으로도 쓰면 안된다.
var r2 = add(5, multi(2,2)); // undefined + undefined
console.log(`r2: ${r2}`); //r2: NaN   비정상적 코드

//결론⭐
// 리턴이 있는 함수는 함수가 끝나고 결과값을 또 다시 사용하는 것
// return n1+n2; add야 해줘!! 이거 다른데에 써야해! 가지고와
// multi야 n1+n2;결과 보여줘. 난 안 쓸래!



//예시) 데이터베이스를 접속하는 함수
function connectDatabase(id, pw, auth){
  var connect = getConnection();
  //..어쩌구
  //....어쩌구
  return true; //결과 알려줘! true면 다른데에 쓸랭
}


//return문 응용
//return이 없는 함수에서 return을 break처럼 사용하기
function callName(nickName){
  var prohibits = [`바보`, `멍청이`, `메롱`];//이라고 하면 인사 안해줌
  if (prohibits.includes(nickName)){
    console.log(`나쁜말 쓰지 마세요!!`);
    return;
  }
  
  console.log(`${nickName}님 안녕하세요!`);
}

console.log(`========================`);

// var r = callName(`크롱`);  안됨! 리턴안했으니까
callName(`크롱`);  //크롱님 안녕하세요!
callName(`멍청이`);  //나쁜말 쓰지 마세요!! 멍청이님 안녕하세요! (리턴안쓰면)
                    //그래서 아래에 return 써주면 강제로 종료할 수 있다.
                    //저장할 곳 없으면 return 뒤에 아무것도 안써줘도 됨.
                    //다시 출력하면 인사 안한다.  나쁜말 쓰지 마세요!!









