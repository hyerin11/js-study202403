// //전역변수
// //서버와 통신할 데이터
// const todos = [
//   {
//   id: 1,
//   text: '할 일 1',
//   done: false
// },
// {
//   id: 2,
//   text: '할 일 2',
//   done: false
// },
// {
//   id: 3,
//   text: '할 일 3',
//   done: false
// },
// ];


// //함수정의 영역=========================================
// //✅새로운 할 일을 li태그로 만들어 ul에 추가하는 함수
// function renderNewTodoElement({ id, text }) {
//   //2. li태그 생성하기=========
//   const $newTodoLi = document.createElement('li');
//   //2-1. 생성한 태그에 텍스트 추가하기
//   //$newTodoLi.textContent = text; //text달라고 하기
//   //console.log($newTodoLi);
//   //2-2. 클래스 추가하기 + data-id 추가하기
//   $newTodoLi.classList.add('todo-list-item');
//   $newTodoLi.dataset.id = id;

//   //2-3. li자식들 추가하기
//   $newTodoLi.innerHTML = `
//   <label class="checkbox">
//   <input type="checkbox">
//   <span class="text">${newTodo.text}</span>
//   </label>
//   <div class="modify">
//   <span class="lnr lnr-undo"></span>
//   </div>
//   <div class="remove">
//   <span class="lnr lnr-cross-circle"></span>
//   </div>`;

//   //3. 생성한 태그 ul에 추가하기
//   const $todoListUl = document.querySelector('.todo-list');
//   $todoListUl.appendChild($newTodoLi);

// }

// //✅새로운 할 일을 추가하는 함수
// function insertTodoData() {
//   //1. 입력한 텍스트 읽어오기
//   const $todoText = document.getElementById('todo-text');
//   //console.log($todoText);
//   const inputText = $todoText.value;
//   //console.log(inputText);

//   //새 할 일의 아이디 값을 생성하는 함수
//   const makeNewId = ()=> 
//   todos.length === 0 ? 1 : todos[todos.length - 1].id + 1;  //0 이면 -1이 되니까 이렇게 지정해줘야 함.
//     //return todos[todos.length-1].id + 1; // 끝 인덱스 id참조 해서 + 1
  


//   //할 일 데이터  배열에 새로운 할 일 데이터 추가하기

//   //todos배열에 새로운 할 일을 객체로 포장해서 추가해야 함
//   //1.새로운 할 일 데이터를 객체로 만들기
//   const newTodo = {
//     id: makeNewId(),
//     text: inputText,
//     done: false
//   };

//   //console.log(newTodo);
//   //2. 배열에 추가하기
//   todos.push(newTodo);


//   //새로운 할 일 화면에 랜더링
//   //2. li태그 생성하기=========⚡함수로 위에서 처리⚡
//   renderNewTodoElement(newTodo); //또 함수로 만들어줌 //+인풋값 받아옴
// }


// //배열에서 삭제 된 할 일 객체를 지우는 함수
// function removeTodoData(dataId) {
//   const index = todos.findIndex(todo => todo.id === dataId);
//   todos.splice(index, 1);
//   console.log(todos);
// }

// //함수실행 영역==============================================================================================================

// //추가 버튼 클릭 이벤트
// document.getElementById('add').addEventListener('click', e => {
//   // console.log('clicked!'); 확인해봐야 함
//   e.preventDefault(); // 버튼 누르면 바로 사라짐. form의 submit중단(새로고침이 안일어남)
//   insertTodoData(); //⚡함수로 위에서 처리-새로운 할 일을 추가하는 함수⚡
//   //1. 입력한 텍스트 읽어오기
//   //2. li태그 생성하기
//   //3. 생성한 태그 ul에 추가하기
// });

// //삭제 버튼 클릭 이벤트
// document.querySelector('.todo-list').addEventListener('click', e => {
 
//   if (!e.target.matches('.remove span')) return; //x버튼 눌렀을 때만 떠라
//   //console.log('remove clicked!!');

//   //삭제 처리 진행
//   //클릭한 버튼이 포함된 li탐색해야 한다.
//   const $targetLi = e.target.closest('.todo-list-item');//부모 중에 (어쩌구)가 있는 가까운 부모태그 찾아
//   //console.log($targetLi);

//   // 화면에서 제거
//   $targetLi.remove();
//   //document.querySelector('.todo-list').removeChild($targetLi); //위와 같은 코드임
  

//   //배열에서 데이터 제거
//   removeTodoData(+$targetLi.dataset.id);

// });

