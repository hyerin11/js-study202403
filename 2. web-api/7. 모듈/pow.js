
//만약 내보낼 데이터가 1개라면 default를 쓸 수 있다
//export const pow = n => n**2;
const pow = n => n**2;
const add =(n1, n2) => n1+n2;

export default {pow, add};//이름 지어주기 위해서는 따로 써줘야 함.
//어차피 값이 하나만 들어있으니까 받아올 때 inport 이름 from "경로";해줄 수 있음
//그래서 이름을 지어줄 필요가 없음
