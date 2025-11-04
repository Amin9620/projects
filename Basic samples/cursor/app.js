const cursor = document.querySelector(".cursor")

document.addEventListener("mousemove",function(e){
    mouseMove(e.pageX,e.pageY);
})
function mouseMove(pageX,pageY){
    cursor.style.left=pageX+"px";
    cursor.style.top=pageY+"px"; 
}