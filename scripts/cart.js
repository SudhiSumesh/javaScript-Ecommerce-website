//add to cart btn
const Btn = document.getElementsByClassName("add_to_cart");
//Btn returns an array
const products = [];

//for each elemets in array
for (i = 0; i < Btn.length; i++) {
  let cartBtn = Btn[i];
  cartBtn.addEventListener("click", () => {
    let product = {
      image: cartBtn.parentElement.children[0].children[0].src,
      name: cartBtn.parentElement.children[1].textContent,
      varient: cartBtn.parentElement.children[2].textContent,
      price: cartBtn.parentElement.children[3].textContent,
      totalPrice: parseInt(event.target.parentElement.children[3].textContent),
      quantity: 1,
    };
    console.log(product);
    addItemToLocalStorage(product);
  });
}

//fun for add prdcts in to local storage
function addItemToLocalStorage(product) {
  let cartItem = JSON.parse(localStorage.getItem("prdctInCart"));
  if (cartItem === null) {
    products.push(product);
    localStorage.setItem("prdctInCart", JSON.stringify(products));
  } else {
    cartItem.forEach((item) => {
      if (product.name == item.name) {
        product.quantity = item.quantity += 1;
        product.totalPrice = product.totalPrice += product.totalPrice;
      } else {
        products.push(item);
      }
    });
    products.push(product);
  }
  localStorage.setItem("prdctInCart", JSON.stringify(products));
  window.location.reload();
}
// fun for displaying item to cart
function displayCartItem() {
  let cartContainer = document.getElementById("cart_container");
  let html = "";
  let cartItem = JSON.parse(localStorage.getItem("prdctInCart"));
  cartItem.forEach((item) => {
    html += `       <div class="px-5  bg-white pb-3 d-flex d-md-block mb-3">
<div class="pt-5 d-flex flex-column flex-md-row gap-5 gap-md-0 justify-content-between border-md-bottom">
  <div class="fw-bold h6 normal-font ps-md-5 pe-5 ">Product</div>
  <div class="fw-bold h6 normal-font ps-md-5 ">Amount</div>
  <div class="fw-bold h6 normal-font pe-5">Quantity</div>
  <div class="fw-bold h6 normal-font pe-5">Total</div>
</div>
<div class="d-flex flex-column flex-md-row justify-content-between align-items-center ">
  <div class="py-md-5 py-4 d-flex align-items-center gap-3 ">
    <input type="checkbox" class="pointer">
    <div><img src="${item.image}" alt="" width="50px"></div>
    <div class="">
      <div class="fw-bold fs-5">${item.name}</div>
      <div class="normal-font text-muted small">${item.varient}</div>
    </div>
  </div>
  <div class="fs-5 fw-bold"> ${item.price}.00</div>   
  <div class="d-flex mt-5 mt-md-0">
    <img src="../icons/minus.png" alt="" class="cart-minus " >
    <input type="number" name="" id="quantity" value="${item.quantity}" class="cart-number" >
    <img src="../icons/add.png" alt="" class="cart-add"  >

  </div>
  <div class="d-flex align-items-center gap-5 d-flex mt-5 mt-md-0">
     <div class="text-red fw-bold total-price" >${item.totalPrice}.00</div>
 
  </div>
</div>
</div>

`;
  });

  cartContainer.innerHTML = html;
}
displayCartItem();

const delele1 = document.getElementsByClassName("delete");
for (i = 0; i < delele1.length; i++) {
  let cartItem = JSON.parse(localStorage.getItem("prdctInCart"));
  let newCartItem = cartItem[i];
  let deleteBtn = delele1[i];
  deleteBtn.addEventListener("click", () => {
    if (newCartItem) {
      localStorage.removeItem("prdctInCart");

      window.location.reload();
    }
  });
}

// #########---UNCOMMENT FOR COUNT----##################

// //adding count
//  const AddBtn=document.getElementsByClassName('cart-add')
//  const quant=document.getElementsByClassName('cart-number')
//  const totalPrice=document.getElementsByClassName('total-price')

//  for(let i=0;i<AddBtn.length;i++){
//    let AddBtnArray=AddBtn[i]
//    AddBtnArray.addEventListener('click',()=>{
//     let total=totalPrice[i]
//      let   quantity=quant[i]
//      quantity.value=Number(quantity.value)+1

//   total.innerText=Number(total.innerText)*q

// })
//   }

//  //decrease count
//  const minusBtn=document.getElementsByClassName('cart-minus')
//   for(let i=0;i<minusBtn.length;i++){
//       let minusBtnArray=minusBtn[i]
//      minusBtnArray.addEventListener('click',()=>{
//       let  quantity =quant[i]
//          if(quantity.value<=1){

//          }else{
//           quantity.value=Number(quantity.value)-1

//          }
//     })
//   }
