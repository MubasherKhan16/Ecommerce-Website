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
let main_image=document.getElementById("main-image");
let small_image=document.querySelectorAll(".display-image img");

small_image[0].onclick=function(){
  main_image.src=small_image[0].src;
}
small_image[1].onclick=function(){
  main_image.src=small_image[1].src;
}
small_image[2].onclick=function(){
  main_image.src=small_image[2].src;
}
small_image[3].onclick=function(){
  main_image.src=small_image[3].src;
}