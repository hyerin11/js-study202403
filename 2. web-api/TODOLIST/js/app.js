//할 일 입력한 후 추가 버튼 누르면 리스트에 생기도록 하는 기능

//1. 텍스트를 입력하면 li태그 안에 넣기
//1-1) 입력한 텍스트 가져오기
// const inputText = $input.value;


// function newTodo({ id, txt }) {
//   const $toDOList = document.querySelector(".todo-list");
//   //1-2) li태그 만들고 안에 넣기
//   const $newLi = document.createElement("li");

//   $newLi.classList.add("todo-list-item");
//   $newLi.dataset.id = id;
//   $newLi.innerHtml = `
// <label class="checkbox">
// <input type="checkbox">
// <span class="text">${text}</span>
// </label>
// <div class="modify"><span class="lnr lnr-undo"></span></div>
// <div class="remove"><span class="lnr lnr-cross-circle"></span></div>`;

//   $toDOList.appendChild($newLi);
// }

//   const $input = document.getElementById('todo-text');
//   const $btn = document.getElementById('add');

//   $newLi.textContent = inputText;
//   //$todoList.appendChild($newLi);

//   //엔터치면 클릭되도록 설정
//   $input.addEventListener('keyup', e =>{
//     if(e.key==='Enter'){
//       $btn.click();
//     }
//   })

const $todoList = document.querySelector('.todo-list');

$todoList.addEventListener('click', e => {
  if(!e.target.matches('.todo-list-item')){
    return; //중딘
  }
});


const $addBtn = document.getElementById('add');
const $input = document.getElementById('todo-text');

$addBtn.addEventListener('click', e => {
  const inputText = $input.value.trim();

  const $newLi = document.createElement("li");
    $newLi.classList.add("todo-list-item");
    $newLi.innerHTML = `
        <label class="checkbox">
            <input type="checkbox">
            <span class="text">${inputText}</span>
        </label>
        <div class="modify"><span class="lnr lnr-undo"></span></div>
        <div class="remove"><span class="lnr lnr-cross-circle"></span></div>`;

  $todoList.appendChild($newLi);
  $input.value = '';
});

$input.addEventListener('keyup', e =>{
      if(e.key==='Enter'){
        $addBtn.click();
      }
    });