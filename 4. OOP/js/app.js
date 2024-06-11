
import Product from "./components/Product.js";

// 상품 데이터
const p1 = new Product('에어팟', 200000, '에어팟으로 노래를 들어요.', 'https://www.apple.com/v/airpods/v/images/overview/airpods_3rd_gen__dhy5bknhvtqq_large.jpg');
const p2 = new Product('아이패드', 40000, '아이패드로 게임해요', 'https://www.wired.kr/news/photo/202107/3249_4315_313.jpeg');

// 서버에서 전송된 JSON
const productList = {
  products: [
    p1, 
    p2, 
    new Product('애플워치', 500, '시계는 와치!!', 'https://sitem.ssgcdn.com/74/83/44/item/1000561448374_i1_750.jpg'),
    new Product('맥북', 500, '맥북들고 스벅가요', 'https://flexible.img.hani.co.kr/flexible/normal/800/450/imgdb/original/2024/0305/20240305501980.jpg'),
  ],

  render() {
    const $prodList = document.createElement('ul');
    $prodList.classList.add('product-list');
    // 반복해서 li태그를 생성
    // console.log('products: ', this.products);
    this.products.forEach((prod) => {
      const $prodLi = document.createElement('li');
      $prodLi.classList.add('product-item');
      $prodLi.innerHTML = `
      <div>
        <img src="${prod.image}" alt="${prod.title}">
        <div class="product-item__content">
          <h2>${prod.title}</h2>
          <h3>${prod.price}원</h3>
          <p>${prod.desc}</p>
          <button>담기</button>
        </div>
      </div>
    `;

      $prodList.appendChild($prodLi);
    });

    // div#app에 ul추가
    document.getElementById('app').appendChild($prodList);
  },
};

productList.render();
