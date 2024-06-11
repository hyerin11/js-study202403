
import ProductItem from "./ProductItem.js";

// UL태그 렌더링 담당
class ProductList {
  // JSON형태의 배열을 받아옴
  constructor(products) {
    this.products = products;
  }

  render() {
    const $prodList = document.createElement('ul');
    $prodList.classList.add('product-list');
    // 반복해서 li태그를 생성
    // console.log('products: ', this.products);
    this.products.forEach((prod) => {
      const product = new ProductItem(prod);
      $prodList.appendChild(product.render());
    });

    // div#app에 ul추가
    //document.getElementById('app').appendChild($prodList);

    return $prodList;
  }
}

export default ProductList;
