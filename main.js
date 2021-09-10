let startCircle = document.getElementById("mainPageCircle")
startCircle.addEventListener("click", startIntro)

var s1
var speed = 40
var array = []
var val = 0
var countS2 = 1
   
async function startIntro(){
    startCircle.style.transition = 1 + "s"
    startCircle.style.opacity = 0
    startCircle.style.pointerEvents = "none"
    await sleep(1500)
    section1()
    section2()
    await sleep(150)
    section2()
    await sleep(150)
    section2()
    await sleep(250)
    section2()
    await sleep(150)
    section2()
    await sleep(150)
    section2()
    await sleep(1000)
    destroy()
    countS2 = 1
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
}

async function section2(){
    if(countS2 >= 1.3){
        countS2 = 1
    }
    await sleep(200)
    createCircles()  
    createCircles()  
    s1.style.marginRight = 22 * countS2 + "vw"
    createCircles()  
    s1.style.marginLeft = 22 * countS2 + "vw"
    createCircles()  
    s1.style.marginTop = 22 * countS2 + "vw"
    createCircles()  
    s1.style.marginBottom = 22 * countS2 + "vw"
    createCircles()  
    s1.style.marginBottom = 22 * countS2 + "vw"
    s1.style.marginLeft = 22 * countS2 + "vw"
    createCircles()  
    s1.style.marginTop = 22 * countS2 + "vw"
    s1.style.marginLeft = 22 * countS2 + "vw"
    createCircles()  
    s1.style.marginBottom = 22 * countS2 + "vw"
    s1.style.marginRight = 22 * countS2 + "vw"
    createCircles()  
    s1.style.marginTop = 22 * countS2 + "vw"
    s1.style.marginRight = 22 * countS2 + "vw"
    await sleep(speed)
    createCircles()  
    s1.style.marginLeft = 44 * countS2 + "vw"
    createCircles()  
    s1.style.marginLeft = 66 * countS2 + "vw"
    createCircles()  
    s1.style.marginRight = 44 * countS2 + "vw"
    createCircles()  
    s1.style.marginRight = 66 * countS2 + "vw"
    createCircles()  
    s1.style.marginTop = 44 * countS2 + "vw"
    createCircles()  
    s1.style.marginTop = 66 * countS2 + "vw"
    createCircles()  
    s1.style.marginBottom = 44 * countS2 + "vw"
    createCircles()  
    s1.style.marginBottom = 66 * countS2 + "vw" 
    createCircles()  
    s1.style.marginLeft = 38 * countS2 + "vw"
    s1.style.marginTop = 38 * countS2 + "vw"
    createCircles()  
    s1.style.marginLeft = 54 * countS2 + "vw"
    s1.style.marginTop = 54 * countS2 + "vw"
    createCircles()  
    s1.style.marginRight = 38 * countS2 + "vw"
    s1.style.marginTop = 38 * countS2 + "vw"
    createCircles()  
    s1.style.marginRight = 54 * countS2 + "vw"
    s1.style.marginTop = 54 * countS2 + "vw"
    createCircles()  
    s1.style.marginLeft = 38 * countS2 + "vw"
    s1.style.marginBottom = 38 * countS2 + "vw"
    createCircles()  
    s1.style.marginLeft = 54 * countS2 + "vw"
    s1.style.marginBottom = 54 * countS2 + "vw"
    createCircles()  
    s1.style.marginRight = 38 * countS2 + "vw"
    s1.style.marginBottom = 38 * countS2 + "vw"
    createCircles()  
    s1.style.marginRight = 54 * countS2 + "vw"
    s1.style.marginBottom = 54 * countS2 + "vw" 
    countS2 = countS2 + 0.2
    await sleep(100)
    for(var i = 0; i < array.length; i++){
        document.getElementById("c" + i).style.backgroundColor = "#ff2f00"
    }
    await sleep(100)
    for(var i = 0; i < array.length; i++){
        document.getElementById("c" + i).style.backgroundColor = "#ff78a7"
    }
    await sleep(250)
    for(var i = 0; i < array.length; i++){
        document.getElementById("c" + i).style.opacity = 0
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
    s1.style.transform = "scale(" + countS2 + ")"
}

function destroy(){
    for(var i = 0; i < array.length; i++){
        document.getElementById("c" + i).remove()
    }
}

function sleep(time) {      //Functie om pauzes te maken
    return new Promise(resolve => setTimeout(resolve, time));
  }
