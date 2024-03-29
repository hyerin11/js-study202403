
const increase = (() => {
  let count = 0;
  return () => ++count;
})();

console.log(increase()); // 1
console.log(increase()); // 2
console.log(increase()); // 3



//---------
console.log(`=================`);

const decrease = (() => {
  let count = 0;
  return () => --count;
})();

console.log(increase()); // 4
console.log(increase()); // 5
console.log(increase()); // 6
console.log(increase()); // 7
console.log(decrease()); // -1
console.log(decrease()); // -2


//count를 1개만 둬야 함. ====================================================================
console.log(`=================`);

const countClosure = () => {
  let count = 0;

  const increase2 = () => ++count;
  const decrease2 = () => --count;

  return {increase2, decrease2}; //increase2 = invrease2라서 뒤는 생략해준거

};

//const counter = countClosure();
//console.log(typeof counter); //객체 

const { increase2, decrease2 } = countClosure(); //객체 뿌셔줌.

console.log(increase2()); // 1
console.log(increase2()); // 2
console.log(increase2()); // 3
console.log(increase2()); // 4
console.log(decrease2()); // 3
console.log(decrease2()); // 2