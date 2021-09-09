let startCircle = document.getElementById("mainPageCircle")
startCircle.addEventListener("click", startIntro)

var s1
var speed = 40
var array = []
var val = 0
   
async function startIntro(){
    startCircle.style.transition = 1 + "s"
    startCircle.style.opacity = 0
    startCircle.style.pointerEvents = "none"
    await sleep(1500)
    section1()
    section2()
}

async function section1(){
    createCircles()
    s1.style.marginRight = 66 + "vw"
    await sleep(speed)
    s1.style.opacity = 0
    createCircles()  
    s1.style.marginRight = 44 + "vw"
    await sleep(speed)
    s1.style.opacity = 0
    createCircles()  
    s1.style.marginRight = 22 + "vw"
    await sleep(speed)
    s1.style.opacity = 0
    createCircles()  
    s1.style.marginRight = 0 + "vw"
    // destroy()
}

async function section2(){
    await sleep(200)
    createCircles()  
    s1.style.marginRight = 22 + "vw"
    createCircles()  
    s1.style.marginLeft = 22 + "vw"
    createCircles()  
    s1.style.marginTop = 22 + "vw"
    createCircles()  
    s1.style.marginBottom = 22 + "vw"
    createCircles()  
    s1.style.marginBottom = 22 + "vw"
    s1.style.marginLeft = 22 + "vw"
    createCircles()  
    s1.style.marginTop = 22 + "vw"
    s1.style.marginLeft = 22 + "vw"
    createCircles()  
    s1.style.marginBottom = 22 + "vw"
    s1.style.marginRight = 22 + "vw"
    createCircles()  
    s1.style.marginTop = 22 + "vw"
    s1.style.marginRight = 22 + "vw"
    await sleep(speed)
    createCircles()  
    s1.style.marginLeft = 44 + "vw"
    createCircles()  
    s1.style.marginLeft = 66 + "vw"
    createCircles()  
    s1.style.marginRight = 44 + "vw"
    createCircles()  
    s1.style.marginRight = 66 + "vw"
    createCircles()  
    s1.style.marginTop = 44 + "vw"
    createCircles()  
    s1.style.marginTop = 66 + "vw"
    createCircles()  
    s1.style.marginBottom = 44 + "vw"
    createCircles()  
    s1.style.marginBottom = 66 + "vw" 
    createCircles()  
    s1.style.marginLeft = 38 + "vw"
    s1.style.marginTop = 38 + "vw"
    createCircles()  
    s1.style.marginLeft = 54 + "vw"
    s1.style.marginTop = 54 + "vw"
    createCircles()  
    s1.style.marginRight = 38 + "vw"
    s1.style.marginTop = 38 + "vw"
    createCircles()  
    s1.style.marginRight = 54 + "vw"
    s1.style.marginTop = 54 + "vw"
    createCircles()  
    s1.style.marginLeft = 38 + "vw"
    s1.style.marginBottom = 38 + "vw"
    createCircles()  
    s1.style.marginLeft = 54 + "vw"
    s1.style.marginBottom = 54 + "vw"
    createCircles()  
    s1.style.marginRight = 38 + "vw"
    s1.style.marginBottom = 38 + "vw"
    createCircles()  
    s1.style.marginRight = 54 + "vw"
    s1.style.marginBottom = 54 + "vw" 
    await sleep(100)
    for(var i = 0; i < 28; i++){
        document.getElementById("c" + i).style.backgroundColor = "#ff2f00"
    }
}

function createCircles(){
    s1 = document.createElement("div")
    s1.setAttribute("class", "circleSmall")
    s1.setAttribute("id", "c" + val)
    document.body.appendChild(s1)
    s1.style.opacity = 1   
    array.push(s1)
    val++
}

// function destroy(){
//     for(var j; j < 10; j++){
//         s1.remove()
//     }
// }

function sleep(time) {      //Functie om pauzes te maken
    return new Promise(resolve => setTimeout(resolve, time));
  }
