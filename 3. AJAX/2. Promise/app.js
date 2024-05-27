
// 1) 서버 url
const URL = 'https://jsonplaceholder.typicode.com/posts';
const URL2 = 'http://localhost:8383/api/v1/replies/30';


// 4) ul 태그 가져오기
const $postUl = document.querySelector('.posts');

// 3) 화면에 게시물을 렌더링하는 함수
const renderPosts = postList => {
    //document.body.innerHTML = postList[0].title;
    postList.forEach(post => {
        // 5)게시물 하나를 li태그로 만들어서 ul에 집어넣기
        // 6) 템플릿 태그 가져오기
        const $template = document.getElementById('single-post');
        // 7) 템플릿 태그에서 li태그 추출
        const $li = document.importNode($template.content, true);
        //console.log($li);
        $li.querySelector('h2').textContent = post.title;
        $li.querySelector('p').textContent = post.body;

        $postUl.appendChild($li);
    });
};

// 2) 서버에서 게시물 정보 받아오기
fetch(URL)
    .then(res => res.json())
    .then(json => {
        console.log(json);

        //게시물 정보 화면에 그리기
        renderPosts(json);
    })
