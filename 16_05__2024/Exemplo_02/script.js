const a=document.querySelectorAll("p");
a.forEach(function(item, index){
    console.log
})

const alerta= document.querySelector(".btn-primary")

alerta.addEventListener("click", function(){
    alert("Eu sou Lindo e Bonito... minha mãe que disse");
})



const escuro= document.querySelector(".btn-dark")

escuro.addEventListener("click",function(){
    const pagina_escura = document.querySelector("body");
    pagina_escura.style.background="black";
    pagina_escura.style.color="white";
});

const claro= document.querySelector(".btn-light")

claro.addEventListener("click",function(){
    const pagina_escura = document.querySelector("body");
    pagina_escura.style.background="white";
    pagina_escura.style.color="black";
});
