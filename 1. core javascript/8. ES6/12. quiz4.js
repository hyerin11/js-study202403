const traders = [
  {
    trader: {
      name: "김철수", // traders[0].trader.name
      city: "대전",
    },
    year: 2023,
    value: 500000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2022, // traders[1].year
    value: 600000,
  },
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2022,
    value: 1200000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2023,
    value: 650000,
  },
  {
    trader: {
      name: "뽀로로",
      city: "부산",
    },
    year: 2023,
    value: 800000,
  },
  {
    trader: {
      name: "루피",
      city: "대전",
    },
    year: 2022,
    value: 780000,
  },
];

//1. **2023년에 대전에서 발생한 모든 거래의 총액을 계산해주세요.**

let total = 0;

const price = traders.filter(
  (user) => user.year === 2023 && user.trader.city === `대전`
);
for (let i = 0; i < price.length; i++) {
  total += price[i].value;
}

console.log(`1. 2023년 대전에서 발생한 모든 거래의 총액: ${total}원`);




//2. **부산에서 거래한 모든 거래자의 이름을 배열에 담아 출력해주세요.**

const liveInBusan = traders
  .filter((user) => user.trader.city === `부산`)
  .map((user) => ({ "2. 부산에 거래한 거래자들의 이름": user.trader.name }));
console.log(liveInBusan);





//3. **모든 거래 중 가장 높은 거래액을 가진 거래의 거래자 정보(이름, 도시)와 거래액을 출력해주세요.**

console.log("------------------------------");
const maxValue = traders.reduce((max, trader) => {
  // console.log(max);
  // console.log('==========================');
  // return max < trader.value ? trader.value : max;
  return max.value < trader.value ? trader : max;
});
//console.log(maxValue);
console.log(
  `이름: ${maxValue.trader.name}, 도시: ${maxValue.trader.city}, 값: ${maxValue.value}`
);

// traders.map((user) => ({
//     name: user.trader.name,
//     city: user.trader.city,
//     value: user.value,
//   }))

//traders.forEach((result) => console.log(result));





//4. **각 도시별로 발생한 총 거래액을 객체 형태로 매핑해주세요. 예를 들어, `{서울: 총거래액, 부산: 총거래액}`과 같은 형태입니다.**





//5. **거래액이 700000원 이상인 거래를 모두 찾아, 해당 거래의 연도별로 분류해주세요. 결과는 `{2022: [...거래정보], 2023: [...거래정보]}`와 같은 형태가 되어야 합니다.**





//6. **각 거래자별로 그들이 진행한 거래의 평균 거래액을 계산해주세요. 결과는 `{거래자이름: 평균거래액}` 형태의 객체가 되어야 합니다.**

//7. **2022년과 2023년 각각에서 가장 많은 거래를 한 거래자의 이름과 그 거래 횟수를 출력해주세요.**

//8. **모든 거래 중 거래액이 중간값인 거래의 정보(거래자 이름, 도시, 연도, 거래액)를 출력해주세요.**

//9. **각 도시에서 진행된 거래의 수를 계산해주세요. 결과는 `{도시이름: 거래수}` 형태의 객체여야 합니다.**

//10. **거래액을 기준으로 모든 거래를 오름차순으로 정렬한 후, 정렬된 리스트를 출력해주세요. 각 거래 정보는 거래자 이름, 도시, 연도, 거래액을 포함해야 합니다.**
