const appleBasket = [{
  color: 'green',
  sweet: 13
},
{
  color: 'red',
  sweet: 14
},
{
  color: 'red',
  sweet: 11
},
{
  color: 'green',
  sweet: 6
},
{
  color: 'green',
  sweet: 7
},
{
  color: 'green',
  sweet: 9
},
];

// 사과중에 녹색이면서 당도가 9인 사과만 선별하여 >>filtering
//"이 사과는 00색이며 당도는 00입니다"라는 문자열이 들어있는 배열을 만들어주세요. >> mapping
// 만든 배열을 콘솔에 반복 출력하세요. >>forEach

//필터링 먼저!
const filteredApples = appleBasket.filter(apple => apple.color ===`green` && apple.sweet >= 9);
console.log(filteredApples);

//매핑
const mappedApples = filteredApples.map(apple=>{
  return `이 사과는 ${apple.color}색 이며 당도는 ${apple.sweet}입니다.`});
//console.log(mappedApples);

/*
green이 아니라 초록색이라고 나오게 한다면!?
const mappedApples = filteredApples.map(apple=>{
  const covertedColor = apple.color === `green` ? `초록` : `빨강`;
  return `이 사과는 ${covertedColor}색 이며 당도는 ${apple.sweet}입니다.`});
console.log(mappedApples);
*/

//forEach 반복출력
mappedApples.forEach(apple=>console.log(apple));


/*
//코드 요약한다면=================================
appleBasket
  .filter(apple => apple.color === 'green' && apple.sweet >= 9)
  .map(apple => {
    const covertedColor = apple.color === 'green' ? '초록' : '빨강';
    return `이 사과는 ${covertedColor}색이며 당도는 ${apple.sweet}입니다.`;
  })
  .forEach(apple => console.log(apple));
*/









