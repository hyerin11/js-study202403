import Product from "./components/Product.js";
import ProductList from "./components/ProductList.js";


// 상품 데이터
const p1 = new Product('에어팟', 200000, '에어팟으로 노래를 들어요.', 'https://www.apple.com/v/airpods/v/images/overview/airpods_3rd_gen__dhy5bknhvtqq_large.jpg');
const p2 = new Product('아이패드', 40000, '아이패드로 게임해요', 'https://www.wired.kr/news/photo/202107/3249_4315_313.jpeg');

// 서버에서 전송된 JSON
const productList = new ProductList([
    p1, 
    p2, 
    new Product('애플워치', 500, '시계는 와치!!', 'https://sitem.ssgcdn.com/74/83/44/item/1000561448374_i1_750.jpg'),
    new Product('맥북', 500, '맥북들고 스벅가요', 'https://flexible.img.hani.co.kr/flexible/normal/800/450/imgdb/original/2024/0305/20240305501980.jpg'),
    new Product('아이폰', 500, '곧 16 나온다는데', 'https://www.apple.com/kr/iphone/home/bu/images/meta/iphone__ky2k6x5u6vue_og.png'),
]);

productList.render();
