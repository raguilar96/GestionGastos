const hamburguesa = document.querySelector("#toggle-btn");

hamburguesa.addEventListener("click", function(){
    document.querySelector("#sidebar").classList.toggle("expand");
})