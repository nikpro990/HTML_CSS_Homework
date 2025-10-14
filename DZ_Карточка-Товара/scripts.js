document.addEventListener("DOMContentLoaded", () => {
   const productButton = document.getElementById("product-button-js");
   const basket = document.getElementById("basket-js");
   const close = document.getElementById("close-js");
   
   close.addEventListener("click", () =>{
     basket.style.display = "none";
     basket.style.animationName = "basketClose";
     basket.style.animationDuration = "0.5s";
     basket.style.animationTimingFunction = "ease";
     basket.style.animationIterationCount = "1";
    });

   productButton.addEventListener("click", () => {
    basket.style.display = "block";
    basket.style.animationName = "basketOpen";
    basket.style.animationDuration = "0.5s";
    basket.style.animationTimingFunction = "ease";
    basket.style.animationIterationCount = "1";
  });
});