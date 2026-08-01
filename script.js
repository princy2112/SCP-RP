// Animation apparition au scroll

const elements = document.querySelectorAll(
".card,.research,.protocol,.join,.quote"
);


window.addEventListener("scroll",()=>{


elements.forEach(el=>{


let position = el.getBoundingClientRect().top;


if(position < window.innerHeight - 100){

el.style.opacity="1";
el.style.transform="translateY(0)";

}


});


});



elements.forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(50px)";
el.style.transition="1s";

});
