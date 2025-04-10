const bar=document.getElementById('bar');
const navbar=document.getElementsByClassName('list')[0];
const close=document.getElementById('close');

if(bar){
  bar.addEventListener('click',()=>{
     navbar.classList.add('active');
  })
}
if(close){
  close.addEventListener('click',()=>{
     navbar.classList.remove('active');
  })
}

// ********************* Product Details ******************
let main_image=document.querySelector(".main-image img");
let small_image=document.querySelectorAll(".display-image img");

small_image.forEach(click=>{
  click.addEventListener("click",()=>{
    main_image.src=click.src;
  })
})

// ************* Index *************

let buttonCLicks=document.querySelectorAll(".hero-section button, .banner-1 button, .banner-2 button");

buttonCLicks.forEach(button=>{
  button.addEventListener("click",()=>{
    window.location.href="shop.html";
})

})




// **************** Shop *****************


// *********** First click on the product and store its data in local storage so whe go the product-details page we have to set its name price *********** 
const products=document.querySelectorAll(".product-1");
products.forEach(product=>{
  product.addEventListener("click",event=>{
    const productBox=event.target.closest(".product-1");

    const productImgage=productBox.querySelector(".product-1 img").src;
    const productPrice=productBox.querySelector(".price").textContent;
    const productTitle=productBox.querySelector(".productTitle").textContent;

    const productData={
      img:productImgage,
      price:productPrice,
      title:productTitle
    };
    localStorage.setItem("product",JSON.stringify(productData));
    window.location.href="product-details.html";
  })
})


// ************ product-details *******************8

// ********* Waits until all the html loaded and then run this function *********
// ********** store data in local storage set in product details page ***********
window.addEventListener("DOMContentLoaded",()=>{
  const product=JSON.parse(localStorage.getItem("product"));
  if (product){
    document.querySelector(".main-image img").src=product.img;
    document.querySelector(".right-section-2 h1").textContent=product.title;
    document.querySelector(".right-section-2 h2").textContent=product.price;
  }
})

const smallImagesClicks=document.querySelectorAll(".display-image");
smallImagesClicks.forEach(image=>{
  image.addEventListener("click",event=>{
    const info=event.target.closest(".display-image");
    const productImg=info.querySelector("img").src;
    const productName=info.getAttribute("data-name");
    const productPrice=info.getAttribute("data-price");

    document.querySelector(".main-image img").src=productImg;
  document.querySelector(".right-section-2 h1").textContent=productName;
  document.querySelector(".right-section-2 h2").textContent=productPrice;
  })
  
})


// *********************** addToCart ********************************

const cartLogo=document.querySelector(".cart-logo");
const removeLogo=document.querySelector(".cross-icon");
const addToCart=document.querySelector(".addToCart");

cartLogo.addEventListener("click",()=>{
  addToCart.classList.add("active1");
})

     
removeLogo.addEventListener("click",()=>{
  addToCart.classList.remove("active1");
})



const addTocartButton=document.querySelector(".right-section-2 button");

addTocartButton.addEventListener("click",()=>{
  const cartImage=document.querySelector(".main-image img").src;
  const cartTitle=document.querySelector(".right-section-2 h1").textContent;
  const cartPrice=document.querySelector(".right-section-2 h2").textContent;
  const cartSize=document.querySelector(".right-section-2 select").value;
  const cartQuantity=document.querySelector(".right-section-2 input[type='number']").value;
  
  let cartContent=document.createElement("div");
  cartContent.classList.add("cartContentStyling");


  

  if(cartSize==="Select Size"){
    alert("Please select size");
    return;
  }
  
  let addToCartContent=document.querySelector(".cartContent");
  
  cartContent.innerHTML=`
  
   <div class="cartImage">
         <img src="${cartImage}" alt="" srcset="">
      </div>
      <div class="middle-section">
        <p class="title">${cartTitle}</p>
        <p class="price">${cartPrice}</p>
      </div>
      <div class="size-quantity">
        <p class="size">Size:${cartSize}</p>
        <p class="quantity">Quantity:${cartQuantity}</p>
      </div>
      <div class="remove-icon">
        <i class="fa-solid fa-trash"></i>
  `;


  addToCartContent.appendChild(cartContent);
  incrementCounter();
  updateTotal();

  cartContent.querySelector(".remove-icon").addEventListener("click", () => {
    cartContent.remove(); // Remove the item from the cart
    updateTotal();
    decrementCounter();
  });
  
});

updateTotal();

function updateTotal(){
  let total=0;
  let cartContent=document.querySelectorAll(".cartContentStyling");
  cartContent.forEach(product=>{

    const priceText=product.querySelector(".price").textContent;
    const quantityText=product.querySelector(".quantity").textContent;

    const price=parseInt(priceText.replace("$",""));
    const quantity=parseInt(quantityText.replace("Quantity:","").trim());
    total+=price*quantity;

  })

  document.querySelector(".total").textContent=`Total : $${total}`;
}

const buyButtonClick=document.querySelector(".buy-button");
buyButtonClick.addEventListener("click",()=>{
  const cartProducts=document.querySelectorAll(".cartContentStyling");
  if(cartProducts.length===0){
    alert("Add products to the cart before buying");
    counter(0);
  }
  cartProducts.forEach(item=>{
    item.remove();
    localStorage.setItem("countCart","0");
    updateCounterDisplay();
    updateTotal();
    alert("Thank you for your shopping from our Store");
  })
})


function updateCounterDisplay(){
  let counterElement=document.querySelector(".counter");
  let currentElement=parseInt(localStorage.getItem("countCart")) || 0;
  counterElement.textContent=currentElement;
}

function incrementCounter(){
  let count=parseInt(localStorage.getItem("countCart")) || 0;
  count++;
  localStorage.setItem("countCart",count);
  updateCounterDisplay();
}

function decrementCounter(){
  let count=parseInt(localStorage.getItem("countCart")) || 0;
  count=Math.max(0,count-1);
  localStorage.setItem("countCart",count);
  updateCounterDisplay();
}














