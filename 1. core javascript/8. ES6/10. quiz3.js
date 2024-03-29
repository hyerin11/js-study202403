const traders = [
  {
    trader: {
      name: "김철수",   // traders[0].trader.name
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
    year: 2022,        // traders[1].year
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


//연습 1: 2022년에 발생한 모든 거래를 찾아
//거래자 정보(이름, 도시) trader를
//배열에 매핑해주세요===========================
  traders
  .filter(user=>user.year===2022)
  .map(user=>({name: user.trader.name, city: user.trader.city}))
  .forEach(result => console.log(result));


// 연습 2: 거래자가 근무하는 모든 도시이름을 배열에 담아주세요. //중복제거
  const cities = traders.map(user=>(user.trader.city))
  //console.log(cities);

  const city = new Set(cities); //중복제거 합집합과 같은 원리
  console.log(city);

// 연습 3: 대전에 근무하는 모든 거래자를 찾아
// 거래자정보(이름, 도시)를 배열에 매핑해주세요.
  const daejeon = traders.filter(user=>user.trader.city===`대전`)
  .map(user=>({name: user.trader.name, city: user.trader.city}))
  console.log(daejeon);


// 연습 4: 모든 거래자의 이름을 배열에 모아주세요.
  const mappedNames = [...new Set(traders.map(trs => trs.trader.name))]; //중복제거
  console.log(mappedNames);


// 연습 5: 서울에 사는 거래자의 모든 거래액의 총합 출력.

  let total =0;

  const price = traders.filter(user=>user.trader.city===`서울`)
  
  for(let i=0; i<price.length; i++){
    total += price[i].value;
  }

  console.log(`모든 거래액 : ${total}`);


//reduce 이용했을 때
// const total = traders
//   .filter(trs => trs.trader.city ===`서울`)
//   .reduce((total, trs)=>total+trs.value, 0);


