const userList = [
  {
    account: 'abc1234',
    userName: '대길이',
    job: '추노',
    address: '서울2',
    hobbys: ['수영', '축구', '테니스'],
    salary: 5400000,
    age: 35,
  },
  {
    account: 'banana',
    userName: '빠나나',
    job: '과일',
    address: '서울',
    hobbys: ['푸드파이팅', '테니스'],
    salary: 2700000,
    age: 18,
  },
  {
    account: 'park1234',
    userName: '주차왕',
    job: '발렛파킹',
    address: '경기',
    hobbys: ['족구', '축구', '테니스', '영화감상'],
    salary: 3900000,
    age: 56,
  },
  {
    account: 'fire',
    userName: '불꽃남자카리스마',
    job: '게이머',
    address: '서울',
    hobbys: ['독서', '테니스'],
    salary: 7900000,
    age: 42,
  },
];






/*
회원목록에서 서울에 사는 회원들의 >> 필터링
2번쨰 취미만 추출하여 >> 맵
'000님의 2번쨰 취미는 000입니다'를 반복해서 출력해라 >> forEach
*/

userList
  .filter(user=>user.address===`서울`)
  //.map(user=>user.hobbys[1]) //취미와 이름을 같이 뽑아내야 한다.
  .map(user=>({name: user.userName, second: user.hobbys[1]})) //이름과 취미 같이 뽑아내 배열에 모인다.
  .forEach(result=>console.log(`${result}님의 2번째 취미는 ${result}입니다.`));


/*
userList[
  {all},{all},{all},{all}
]

필터링[
  {all}, {all}, {all} //이름, 주소, 등등 정보 다 들어있음
]

매핑[
{이름, 취미}, {이름, 취미}, {이름, 취미} //이름이랑 취미만 들어있음
]

forEach[  // 전에서 한 배열을 사용하기 때문에 이름이랑 취미만 들어있음
  {이름, 취미},
  {이름, 취미},
  {이름, 취미}
]

*/




