/*
1번 선택 시, 새로운 이름 추가
2번 선택 시, 기존 이름 삭제
3번 선택 시, 프로그램 종료
*/

var tvxq = ["유노윤호", "최강창민", "영웅재중", "믹키유천", "시아준수"];

var exit = true;

while (exit) {
  var menu = prompt(
    `현재 멤버: [${tvxq}]\n메뉴를 선택하세요.\n1. 새로운 이름 추가\n2. 기존 이름 삭제\n3. 프로그램 종료`
  );

  switch (menu) {
    case "1":
      var newMember = prompt(`현재맴버: ${tvxq}\n추가할 새로운 멤버의 이름을 입력하세요`);
      tvxq.push(newMember);
      alert(`${newMember}이(가) 추가되었습니다.`);
      break;

    case "2":
      var deleteMember = prompt(`현재맴버: ${tvxq}\n삭제할 멤버의 이름을 입력하세요`);
      if(tvxq.includes(deleteMember)){
        tvxq.splice(tvxq.indexOf(deleteMember), 1);
        alert(`${deleteMember}이(가) 삭제되었습니다.`);
      }else{
        alert(`해당 멤버는 없습니다.`)
      }break;     

    case "3":
      alert(`프로그램을 종료합니다.`);
      exit = false; //while문을 나가기 위해서는 while=false가 되어야 한다.
      break;

    default:
      alert(`올바른 메뉴 번호를 선택하세요.`);
  }
}