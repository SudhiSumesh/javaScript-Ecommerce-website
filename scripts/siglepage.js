//img-changing
let sideImg = document.getElementsByClassName("side-image");
for (i = 0; i < sideImg.length; i++) {
  let sideImgArray = sideImg[i];
  sideImgArray.addEventListener("mouseover", () => {
    console.log(sideImgArray.src);
    document.getElementById("main-img").src = sideImgArray.src;
  });
}

//adding count
const AddBtn = document.getElementById("pdt-add");
const quant = document.getElementById("quantity");

AddBtn.addEventListener("click", () => {
  quant.innerHTML = Number(quant.innerHTML) + 1;
  Number(quant.innerHTML);
});

//decrease count
const minusBtn = document.getElementById("pdt-minus");

minusBtn.addEventListener("click", () => {
  if (quant.innerHTML <= 1) {
  } else {
    quant.innerHTML = Number(quant.innerHTML) - 1;
  }
});
