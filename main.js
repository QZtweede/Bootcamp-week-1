let startCircle = document.getElementById("mainPageCircle")
let link = document.getElementById("link")
startCircle.addEventListener("click", startIntro)

var s1
var speed = 40
var array = []
var val = 0
var val2 = 0
var val3 = 0
var countS2 = 1
   
async function startIntro(){
    startCircle.style.opacity = 0
    startCircle.style.pointerEvents = "none"
    link.style.opacity = 0
    link.style.pointerEvents = "none"
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
    await sleep(400)
    section3()
    await sleep(1400)
    section4()
    await sleep(1400)
    section5()
    await sleep(1400)
    section6()
    await sleep(1800)
    section7()
    await sleep(1800)
    section8()
    await sleep(1800)
    section9()
    await sleep(1800)
    section10()
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

async function section3(){
    createCircles2()
    s2.style.marginBottom = 45 + "vw"
    await sleep(100)
    createCircles2()  
    await sleep(100)
    createCircles2()
    s2.style.marginTop = 45 + "vw"
    await sleep(100)
    document.getElementById("cM0").style.backgroundColor = "white"
    await sleep(100)
    document.getElementById("cM1").style.backgroundColor = "white"
    await sleep(100)
    document.getElementById("cM2").style.backgroundColor = "white"
    await sleep(300)
    document.getElementById("cM0").style.opacity = 0
    await sleep(100)
    document.getElementById("cM1").style.opacity = 0
    await sleep(100)
    document.getElementById("cM2").style.opacity = 0
}

async function section4(){
    createCircles3()
    s3.style.marginBottom = 35 + "vw"
    s3.style.marginRight = 45 + "vw"
    await sleep(100)
    createCircles3()  
    await sleep(100)
    createCircles3()
    s3.style.marginTop = 35 + "vw"
    s3.style.marginLeft = 45 + "vw"
    await sleep(100)
    document.getElementById("cL0").style.backgroundColor = "white"
    await sleep(100)
    document.getElementById("cL1").style.backgroundColor = "white"
    await sleep(100)
    document.getElementById("cL2").style.backgroundColor = "white"
    await sleep(300)
    document.getElementById("cL0").style.opacity = 0
    await sleep(100)
    document.getElementById("cL1").style.opacity = 0
    await sleep(100)
    document.getElementById("cL2").style.opacity = 0
}

async function section5(){
    createCircles3()
    s3.style.marginRight = 55 + "vw"
    await sleep(100)
    createCircles3()  
    await sleep(100)
    createCircles3()
    s3.style.marginLeft = 55 + "vw"
    await sleep(100)
    document.getElementById("cL3").style.backgroundColor = "white"
    await sleep(100)
    document.getElementById("cL4").style.backgroundColor = "white"
    await sleep(100)
    document.getElementById("cL5").style.backgroundColor = "white"
    await sleep(300)
    document.getElementById("cL3").style.opacity = 0
    await sleep(100)
    document.getElementById("cL4").style.opacity = 0
    await sleep(100)
    document.getElementById("cL5").style.opacity = 0
}

async function section6(){
    createCircles2()
    s2.style.marginRight = 80 + "vw"
    s2.style.marginTop = 50 + "vw"
    await sleep(100)
    createCircles2()  
    s2.style.marginRight = 40 + "vw"
    s2.style.marginTop = 25 + "vw"
    await sleep(100)
    createCircles2()  
    await sleep(100)
    createCircles2()
    s2.style.marginLeft = 40 + "vw"
    s2.style.marginBottom = 25 + "vw"
    await sleep(100)
    createCircles2()
    s2.style.marginLeft = 80 + "vw"
    s2.style.marginBottom = 50 + "vw"
    await sleep(100)
    document.getElementById("cM3").style.backgroundColor = "white"
    await sleep(100)
    document.getElementById("cM4").style.backgroundColor = "white"
    await sleep(100)
    document.getElementById("cM5").style.backgroundColor = "white"
    await sleep(100)
    document.getElementById("cM6").style.backgroundColor = "white"
    await sleep(100)
    document.getElementById("cM7").style.backgroundColor = "white"
    await sleep(300)
    document.getElementById("cM3").style.opacity = 0
    await sleep(100)
    document.getElementById("cM4").style.opacity = 0
    await sleep(100)
    document.getElementById("cM5").style.opacity = 0
    await sleep(100)
    document.getElementById("cM6").style.opacity = 0
    await sleep(100)
    document.getElementById("cM7").style.opacity = 0
}

async function section7(){
    createCircles2()
    s2.style.marginLeft = 80 + "vw"
    s2.style.marginTop = 50 + "vw"
    await sleep(100)
    createCircles2()  
    s2.style.marginLeft = 40 + "vw"
    s2.style.marginTop = 25 + "vw"
    await sleep(100)
    createCircles2()  
    await sleep(100)
    createCircles2()
    s2.style.marginRight = 40 + "vw"
    s2.style.marginBottom = 25 + "vw"
    await sleep(100)
    createCircles2()
    s2.style.marginRight = 80 + "vw"
    s2.style.marginBottom = 50 + "vw"
    await sleep(100)
    document.getElementById("cM8").style.backgroundColor = "white"
    await sleep(100)
    document.getElementById("cM9").style.backgroundColor = "white"
    await sleep(100)
    document.getElementById("cM10").style.backgroundColor = "white"
    await sleep(100)
    document.getElementById("cM11").style.backgroundColor = "white"
    await sleep(100)
    document.getElementById("cM12").style.backgroundColor = "white"
    await sleep(300)
    document.getElementById("cM8").style.opacity = 0
    await sleep(100)
    document.getElementById("cM9").style.opacity = 0
    await sleep(100)
    document.getElementById("cM10").style.opacity = 0
    await sleep(100)
    document.getElementById("cM11").style.opacity = 0
    await sleep(100)
    document.getElementById("cM12").style.opacity = 0
}

async function section8(){
    createCircles2()
    s2.style.marginLeft = 90 + "vw"
    await sleep(100)
    createCircles2()  
    s2.style.marginLeft = 45 + "vw"
    await sleep(100)
    createCircles2()  
    await sleep(100)
    createCircles2()
    s2.style.marginRight = 45 + "vw"
    await sleep(100)
    createCircles2()
    s2.style.marginRight = 90 + "vw"
    await sleep(100)
    document.getElementById("cM13").style.backgroundColor = "white"
    await sleep(100)
    document.getElementById("cM14").style.backgroundColor = "white"
    await sleep(100)
    document.getElementById("cM15").style.backgroundColor = "white"
    await sleep(100)
    document.getElementById("cM16").style.backgroundColor = "white"
    await sleep(100)
    document.getElementById("cM17").style.backgroundColor = "white"
    await sleep(300)
    document.getElementById("cM13").style.opacity = 0
    await sleep(100)
    document.getElementById("cM14").style.opacity = 0
    await sleep(100)
    document.getElementById("cM15").style.opacity = 0
    await sleep(100)
    document.getElementById("cM16").style.opacity = 0
    await sleep(100)
    document.getElementById("cM17").style.opacity = 0
}

async function section9(){
    createCircles2()
    s2.style.marginRight = 80 + "vw"
    s2.style.marginBottom = 50 + "vw"
    await sleep(100)
    createCircles2()  
    s2.style.marginRight = 40 + "vw"
    s2.style.marginBottom = 25 + "vw"
    await sleep(100)
    createCircles2()  
    await sleep(100)
    createCircles2()
    s2.style.marginLeft = 40 + "vw"
    s2.style.marginTop = 25 + "vw"
    await sleep(100)
    createCircles2()
    s2.style.marginLeft = 80 + "vw"
    s2.style.marginTop = 50 + "vw"
    await sleep(100)
    document.getElementById("cM18").style.backgroundColor = "white"
    await sleep(100)
    document.getElementById("cM19").style.backgroundColor = "white"
    await sleep(100)
    document.getElementById("cM20").style.backgroundColor = "white"
    await sleep(100)
    document.getElementById("cM21").style.backgroundColor = "white"
    await sleep(100)
    document.getElementById("cM22").style.backgroundColor = "white"
    await sleep(300)
    document.getElementById("cM18").style.opacity = 0
    await sleep(100)
    document.getElementById("cM19").style.opacity = 0
    await sleep(100)
    document.getElementById("cM20").style.opacity = 0
    await sleep(100)
    document.getElementById("cM21").style.opacity = 0
    await sleep(100)
    document.getElementById("cM22").style.opacity = 0
}

async function section10(){
    createCircles3()
    s3.style.marginLeft = 55 + "vw"
    await sleep(100)
    createCircles3()  
    await sleep(100)
    createCircles3()
    s3.style.marginRight = 55 + "vw"
    await sleep(100)
    document.getElementById("cL6").style.backgroundColor = "white"
    await sleep(100)
    document.getElementById("cL7").style.backgroundColor = "white"
    await sleep(100)
    document.getElementById("cL8").style.backgroundColor = "white"
    await sleep(300)
    document.getElementById("cL6").style.opacity = 0
    await sleep(100)
    document.getElementById("cL7").style.opacity = 0
    await sleep(100)
    document.getElementById("cL8").style.opacity = 0
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

function createCircles2(){
    s2 = document.createElement("div")
    s2.setAttribute("class", "circleMid")
    s2.setAttribute("id", "cM" + val2)
    document.body.appendChild(s2)
    s2.style.opacity = 1   
    array.push(s2)
    val2++
    s2.style.transform = "scale(" + countS2 + ")"
}

function createCircles3(){
    s3 = document.createElement("div")
    s3.setAttribute("class", "circleBig")
    s3.setAttribute("id", "cL" + val3)
    document.body.appendChild(s3)
    s3.style.opacity = 1   
    array.push(s3)
    val3++
    s3.style.transform = "scale(" + countS2 + ")"
}

function destroy(){
    for(var i = 0; i < array.length; i++){
        document.getElementById("c" + i).remove()
    }
}

function sleep(time) {      //Functie om pauzes te maken
    return new Promise(resolve => setTimeout(resolve, time));
  }
