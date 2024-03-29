

const NOT_FOUND = -1;

//배열 안에 특정 요소의 인덱스를 찾아 반환하는 함수
function myIndexOf(array, searchElement){
  for(var i=0; i<array.length; i++){
    if (searchElement===array[i]){
      return i;
    }
  }
  return NOT_FOUND; //못 찾았다면 -1출력해라.
}

// function myIncludes(array, searchElement){
//   for(var i=0; i<array.length; i++){
//     if(searchElement===array[i]){
//       return true;
//     }
//   }
//   return false;
// }
function myIncludes(array, searchElement){
  return myIndexOf(array, searchElement) !== NOT_FOUND;
}


var foods = [`피자`, `치킨`, `떡볶이`, `김치찌개`];

var idx = myIndexOf(foods, `떡볶이`);
console.log(`index: ${idx}`);

var flag = myIncludes(foods,`김치찌개`);
console.log(`flag: ${flag}`); //유무 판단




