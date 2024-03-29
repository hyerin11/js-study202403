
var x = 99; //global scope:전역변수
var y = true;

function foo(){
  var x = `홍길동`;
  console.log(`foo x: ${x}`);// local scope: 지역변수
  var y = `메롱`;
  console.log(`foo y: ${y}`);// local scope: 지역변수
  return x; //홍길동을 함수 바깥에서 사용하고 싶다면 return으로 바깥에 보내줘야 함.

  //var z = 100;
}

var y = foo(); //함수 호출이 끝나고 나면 지역변수는 사라짐.
console.log(`x: ${x}`);
console.log(`y: ${y}`);
//console.log(`z: ${z}`); //언디파인드. 지역변수는 지역변수에서만!


//지역변수는 함수 안에서만 쓸 수 있고, 바깥으로 나갈 수 없다(리턴하지 않는다면)
//전역변수와 지역변수가 있다면 함수 안에서는 지역변수를 참조한다.
//ex) 지역변수인 메롱과 전역변수인 true 중 메롱을 출력함.


console.log(`====================================`);

//중첩 함수 : 함수 안에 함수를 정의
function outer(m){
  var n= `outer local n`;
  var v = `outer local v`

  console.log(n); //지역변수
  console.log(v);
  console.log(m);

  //헬퍼 함수 : 바깥쪽 함수 전용 함수
  function inner(){
    console.log(n);
    var m = `inner local m`; //바깥에도 m이 있지만 안에있는 로컬 m을 사용함.
    console.log(m);
  }

  inner();//이 기능을 바깥에 공개하고 싶지 않을 때 사용!

}

outer(`oiter parm m`);


