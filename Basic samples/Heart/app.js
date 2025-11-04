const redheart=document.querySelector(".red-heart");
const grayheart=document.querySelector(".gray-heart");

grayheart.addEventListener("click", ()=>{
    redheart.classList.add("fill-color");
    redheart.classList.add("animation");
})
redheart.addEventListener("click", ()=>{
    redheart.classList.remove("animation");
    redheart.classList.remove("fill-color")
})