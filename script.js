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
    document.querySelector(".right-section-2 h3").textContent=product.title;
    document.querySelector(".right-section-2 h2").textContent=product.price;
  }
})

const smallImagesClicks=document.querySelectorAll(".display-image");
smallImagesClicks.forEach(image=>{
  image.addEventListener("click",event=>{
    const info=event.target.closest(".display-image");
    const productImg=info.querySelector("img").src;
    const productName=info.getAttribute("data-name");
    const productPrice=info.getAttribute(".data-price");

    document.querySelector(".main-image img").src=productImg;
  document.querySelector(".right-section-2 h3").textContent=productName;
  document.querySelector(".right-section-2 h2").textContent=productPrice;
  })
  
})













