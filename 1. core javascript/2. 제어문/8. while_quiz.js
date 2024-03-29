
// 

// var n = +prompt(`첫 번째 숫자를 입력하세요`);
// var m = +prompt(`마지막 숫자를 입력하세요`);
// var total = 0;

// while(n<=m){
  
//   total+=n;
//   n++;
// }

// alert(`${n}부터 ${m}까지의 누적합: ${total}`);




var n = 1;
var m = prompt(`양의 정수를 입력하시오`);
var mark='';


while(n<=m){

  if(n%2===1){
    mark+=`+`;
  }else{
    mark+=`-`;
  }
  n++;
}
alert(`${mark}`);

