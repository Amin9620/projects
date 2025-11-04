const colorSwitch = document.querySelector("#switch");

colorSwitch.addEventListener("click", ()=>{
    if (colorSwitch.checked == true){
        document.body.style.backgroundColor="black"
    }else{
        document.body.style.backgroundColor="white"
    }

})