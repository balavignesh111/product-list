'use script';

const containerElement = document.querySelector('.container');

const url = 'https://fakestoreapi.com/products';


try{
  const fetchData = async function(url){
    const product = (await fetch(url));
    const response = await product.json();
    console.log(response)
    response.forEach((element)=>{
      applyData(element)
    })
  }
  fetchData(url);
}catch(error){
  console.log(error)
}

function applyData(product){
  const productEle = document.createElement('div');
  productEle.classList.add('product-card');
  productEle.innerHTML =  `
  <div class="product-image-container">
    <img src="${product.image}" alt="image" class="product-image">
  </div>
  <h4 class="title">${product.title}</h4><br>
  <h4 class="category">${product.category}</h4><br>
  <h4 class="price">₹${product.price}</h4>
`;
  containerElement.appendChild(productEle);
}