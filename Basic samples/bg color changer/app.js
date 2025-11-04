const hex=document.querySelector("#hexcode");
const btn=document.querySelector("#btn");

function randomColor(){

    
    let colors="#";
    let letters="0123456789ABCDEF";
    for (let i=0;i<6;i++){
        colors += letters[Math.floor(Math.random()*16)]
    }
    
    return colors;
}

btn.addEventListener("click",()=>{
    document.body.style.backgroundColor=randomColor();
    hex.innerHTML=randomColor()
})

