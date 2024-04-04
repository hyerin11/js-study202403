import { $btn as $button } from "./getDom.js";  // 불러온 변수
import { clickHandler } from "./event.js";
import {pow} from "./pow.js";

const $btn = '123'; // 내가만든 변수
console.log(`내가만든 btn: ${$btn}`);
console.log(`불러온 btn:`, $button);

const pow = (
  console.log('pow!!')
) ={};

console.log(hahahoho.pow(5));

console.log(hahahoho.add(3, 6));

console.log(pow(5));
// event.js에서 만든 이벤트 핸들러 등록
$button.addEventListener('click', clickHandler);