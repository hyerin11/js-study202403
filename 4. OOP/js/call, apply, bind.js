
// this를 조작하는 메서드
const kim = {
    name: '김철수',
    age: 33
};

const park = {
    name: '박영희',
    age: 66
};

function sayHello(lang1, lang2){
    console.log('');
    console.log('this: ', this);
    console.log(`Hello I am ${this.name}, I can speak ${lang1} and ${lang2}`);
    console.log('');
};


// call : this를 조작하기 위한 메서드
//param1 : 조작할 this를 전달
//..param2 : 원래 해당 함수가 받아야 할 파라미터 전달
//sayHello('Korean', 'English');
sayHello.call(kim, 'Spanish', 'Japanese');
sayHello.call(park, 'Korean', 'Chinese');


console.log('=========================');


//apply : call이랑 같지만 param2를 배열로 묶어서 전달해야 한다.
sayHello.apply(park, ['한국어', '영어']);


console.log('=========================');


//bind : call, apply와 같으나 함수를 바로 실행하지 않고, this를 조작한 새로운 함수를 반환
const newSayHello = sayHello.bind(kim, '중국어', '독일어');
newSayHello();

//bind실제 사용 예시
const clickHandler = function(fruitName,e){ //전역변수 e는 가장 끝에 써줘야 함!
    console.log('event객체: ', e);
    console.log('this: ', this);
    this.style.background = 'red';
    console.log('전달한 과일명: ', fruitName);
}

const $input = document.getElementById('fruit');
const $btn = document.getElementById('btn');

const bindedClickHandler = clickHandler.bind($btn, '레몬');

//$btn.addEventListener('click', clickHandler.bind($input));
//$btn.addEventListener('click', clickHandler.bind($btn, '사과'));
$btn.addEventListener('click', function(name, e) {
    console.log('이름:', name);
  }.bind($btn, '김멍멍'));
  