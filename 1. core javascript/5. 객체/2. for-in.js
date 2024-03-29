

var phone ={
  company: '삼성',
  color: '펄 화이트',
  model: '갤럭시 S24',
  price: 1200000
};

//값이 아닌 키가 반복됨
for(var data in phone){
  // console.log(data);
  //console.log(phone.data); //undefined
  console.log(phone[data]);
  // console.log(typeof data); //string
}

//객체 프로퍼티 유무 확인
//phone에 새로운 프로퍼티 추가하고 싶음

console.log(`memory` in phone); //false 없다는 것 확인함
console.log(`model` in phone); //true

if(!(`momory` in phone)){  // !(메모리가 폰 안에 있냐)에 대한 부정
  phone.memory = '32GB'; // 이 데이터가 없다면 추가해라. 라고 해줘야 함. 누가 이미 추가해뒀으면 어떡해(확인 방법 위에)
}
console.log(phone);




