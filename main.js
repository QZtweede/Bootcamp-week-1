let startCircle = document.getElementById("mainPageCircle")
startCircle.addEventListener("click", startIntro)
   
function startIntro(){
    startCircle.style.opacity = 0
    startCircle.style.pointerEvents = "none"
}