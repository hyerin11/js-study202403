<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
  <button id="show">서버요청!</button>

  <script>

    function get(url, callback) {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.send();

      xhr.onload = e => {
        const response = JSON.parse(xhr.response);
        callback(response);
      };
    }

    document.getElementById('show').addEventListener('click', e => {
      // 버튼을 클릭하면 1. 두번째 회원을 조회하여
      // 해당 회원이 쓴 2. 글의 목록을 조회한 후
      // 해당 글의 3. 댓글들을 조회한다.
      const url = 'https://jsonplaceholder.typicode.com';
      
      get(`${url}/users`, (response) => {
        const userId = response[1].id;
        get(`${url}/users/${userId}/posts`, (response) => {
          const postId = response[2].id;
          get(`${url}/posts/${postId}/comments`, (response) => {
            console.log(response);
          }); // 해당 글의 댓글목록요청
        }); // 해당 회원이 쓴 글 목록요청
      }); // 회원정보 조회


      
      

    });
  </script>


</body>
</html>