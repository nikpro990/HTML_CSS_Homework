document.addEventListener("DOMContentLoaded", () => {
   const productButton = document.getElementById("product-button-js");
   const basket = document.getElementById("basket-js");
   const close = document.getElementById("close-js");
   
   close.addEventListener("click", () =>{
     basket.style.display = "none";
   });

   productButton.addEventListener("click", () => {
    basket.style.display = "block";
   });
});