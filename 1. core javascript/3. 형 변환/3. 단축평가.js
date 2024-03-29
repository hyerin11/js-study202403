

true && true;   // t
true && false;  // f
false && true;  // f
false && false; // f

true || true;   // t 왼쪽이 true면 오른쪽 볼 필요없음
true || false;  // t
false || true;  // t
false || false; // f


//OR연산 : 첫 번째 truthy를 반환한다.
console.log('hello' || 'bye'); // hello
console.log( null || '안녕');  // 안녕

//AND연산 : 첫 번째 falsy를 반환
console.log('메롱' && '룰루'); // 룰루  앞도 true이고, 뒤도 true니까 뒤에꺼 출력
console.log('메롱' && NaN && '룰루'); // Nan 출력
console.log(0 && '랄라');     // 0


if(조건){
  console.log(`어쩌구~~`);
}

조건 && console.log(`어쩌구~~`);

// login && <h2>000님 환영합니다</h2>  => 로그인했다면 h2출력
// 쿠폰당첨여부 && sendCoupon();  

// !쿠폰당첨여부 && sendMessage();  
// 쿠폰당첨여부 || sendMessage();  보통은 or보다 &&를 사용하고 앞에 !를 붙임




















