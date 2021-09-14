let startCircle = document.getElementById("mainPageCircle")
let link = document.getElementById("link")
let h2 = document.getElementById("h2")
startCircle.addEventListener("click", startIntro)
var audio = new Audio('Cannon TV Intro.mp3');

var s1
var array = []
var val = 0
var val2 = 0
var val3 = 0
var countS2 = 1
   
async function startIntro(){    //tijdlijn
    startCircle.style.opacity = 0
    startCircle.style.pointerEvents = "none"
    link.style.opacity = 0
    link.style.pointerEvents = "none"
    h2.style.opacity = 0
    await sleep(1200)   //functie voor pauzes
    audio.play();   //start audio
    await sleep(300)  
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
    await sleep(1400)
    section11()
}

async function section1(){
    createCircles()     //functie om kleine circels te maken
    s1.style.marginRight = 66 + "vw"
    await sleep(40)
    s1.style.opacity = 0
    createCircles()  
    s1.style.marginRight = 44 + "vw"
    await sleep(40)
    s1.style.opacity = 0
    createCircles()  
    s1.style.marginRight = 22 + "vw"
    await sleep(40)
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
    await sleep(40)
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
    for(var i = 0; i < array.length; i++){  //het veranderen van kleur van alle cirkels
        document.getElementById("c" + i).style.backgroundColor = "#ff2f00"
    }
    await sleep(100)
    for(var i = 0; i < array.length; i++){
        document.getElementById("c" + i).style.backgroundColor = "#ff78a7"
    }
    await sleep(250)
    for(var i = 0; i < array.length; i++){  //het verdwijnen van alle cirkels
        document.getElementById("c" + i).style.opacity = 0
    }
}

async function section3(){
    createCircles2()    //functie voor het maken van middelgrote cirkels
    s2.style.marginBottom = 45 + "vw"
    await sleep(100)
    createCircles2()  
    await sleep(100)
    createCircles2()
    s2.style.marginTop = 45 + "vw"
    await sleep(100)
    document.getElementById("cM0").style.backgroundImage = "url(img/cannon1.png)"   //verander de kleur van cirkel in afbeelding
    document.getElementById("cM0").style.backgroundSize = "cover"
    await sleep(100)
    document.getElementById("cM1").style.backgroundImage = "url(img/cannon1.png)"
    document.getElementById("cM1").style.backgroundSize = "cover"
    await sleep(100)
    document.getElementById("cM2").style.backgroundImage = "url(img/cannon1.png)"
    document.getElementById("cM2").style.backgroundSize = "cover"
    await sleep(300)
    document.getElementById("cM0").style.opacity = 0
    await sleep(100)
    document.getElementById("cM1").style.opacity = 0
    await sleep(100)
    document.getElementById("cM2").style.opacity = 0
}

async function section4(){
    createCircles3()    //functie voor het maken van grote cirkels
    s3.style.marginBottom = 35 + "vw"
    s3.style.marginRight = 45 + "vw"
    await sleep(100)
    createCircles3()  
    await sleep(100)
    createCircles3()
    s3.style.marginTop = 35 + "vw"
    s3.style.marginLeft = 45 + "vw"
    await sleep(100)
    document.getElementById("cL0").style.backgroundImage = "url(img/cannon2.png)"
    document.getElementById("cL0").style.backgroundSize = "cover"
    await sleep(100)
    document.getElementById("cL1").style.backgroundImage = "url(img/cannon2.png)"
    document.getElementById("cL1").style.backgroundSize = "cover"
    await sleep(100)
    document.getElementById("cL2").style.backgroundImage = "url(img/cannon2.png)"
    document.getElementById("cL2").style.backgroundSize = "cover"
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
    document.getElementById("cL3").style.backgroundImage = "url(img/cannon3.png)"
    document.getElementById("cL3").style.backgroundSize = "cover"
    await sleep(100)
    document.getElementById("cL4").style.backgroundImage = "url(img/cannon3.png)"
    document.getElementById("cL4").style.backgroundSize = "cover"
    await sleep(100)
    document.getElementById("cL5").style.backgroundImage = "url(img/cannon3.png)"
    document.getElementById("cL5").style.backgroundSize = "cover"
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
    document.getElementById("cM3").style.backgroundImage = "url(img/cannon4.png)"
    document.getElementById("cM3").style.backgroundSize = "cover"
    await sleep(100)
    document.getElementById("cM4").style.backgroundImage = "url(img/cannon4.png)"
    document.getElementById("cM4").style.backgroundSize = "cover"
    await sleep(100)
    document.getElementById("cM5").style.backgroundImage = "url(img/cannon4.png)"
    document.getElementById("cM5").style.backgroundSize = "cover"
    await sleep(100)
    document.getElementById("cM6").style.backgroundImage = "url(img/cannon4.png)"
    document.getElementById("cM6").style.backgroundSize = "cover"
    await sleep(100)
    document.getElementById("cM7").style.backgroundImage = "url(img/cannon4.png)"
    document.getElementById("cM7").style.backgroundSize = "cover"
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
    document.getElementById("cM8").style.backgroundImage = "url(img/cannon5.png)"
    document.getElementById("cM8").style.backgroundSize = "cover"
    await sleep(100)
    document.getElementById("cM9").style.backgroundImage = "url(img/cannon5.png)"
    document.getElementById("cM9").style.backgroundSize = "cover"
    await sleep(100)
    document.getElementById("cM10").style.backgroundImage = "url(img/cannon5.png)"
    document.getElementById("cM10").style.backgroundSize = "cover"
    await sleep(100)
    document.getElementById("cM11").style.backgroundImage = "url(img/cannon5.png)"
    document.getElementById("cM11").style.backgroundSize = "cover"
    await sleep(100)
    document.getElementById("cM12").style.backgroundImage = "url(img/cannon5.png)"
    document.getElementById("cM12").style.backgroundSize = "cover"
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
    document.getElementById("cM13").style.backgroundImage = "url(img/cannon6.png)"
    document.getElementById("cM13").style.backgroundSize = "cover"
    await sleep(100)
    document.getElementById("cM14").style.backgroundImage = "url(img/cannon6.png)"
    document.getElementById("cM14").style.backgroundSize = "cover"
    await sleep(100)
    document.getElementById("cM15").style.backgroundImage = "url(img/cannon6.png)"
    document.getElementById("cM15").style.backgroundSize = "cover"
    await sleep(100)
    document.getElementById("cM16").style.backgroundImage = "url(img/cannon6.png)"
    document.getElementById("cM16").style.backgroundSize = "cover"
    await sleep(100)
    document.getElementById("cM17").style.backgroundImage = "url(img/cannon6.png)"
    document.getElementById("cM17").style.backgroundSize = "cover"
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
    document.getElementById("cM18").style.backgroundImage = "url(img/cannon7.png)"
    document.getElementById("cM18").style.backgroundSize = "cover"
    await sleep(100)
    document.getElementById("cM19").style.backgroundImage = "url(img/cannon7.png)"
    document.getElementById("cM19").style.backgroundSize = "cover"
    await sleep(100)
    document.getElementById("cM20").style.backgroundImage = "url(img/cannon7.png)"
    document.getElementById("cM20").style.backgroundSize = "cover"
    await sleep(100)
    document.getElementById("cM21").style.backgroundImage = "url(img/cannon7.png)"
    document.getElementById("cM21").style.backgroundSize = "cover"
    await sleep(100)
    document.getElementById("cM22").style.backgroundImage = "url(img/cannon7.png)"
    document.getElementById("cM22").style.backgroundSize = "cover"
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
    document.getElementById("cL6").style.backgroundImage = "url(img/cannon8.png)"
    document.getElementById("cL6").style.backgroundSize = "cover"
    await sleep(100)
    document.getElementById("cL7").style.backgroundImage = "url(img/cannon8.png)"
    document.getElementById("cL7").style.backgroundSize = "cover"
    await sleep(100)
    document.getElementById("cL8").style.backgroundImage = "url(img/cannon8.png)"
    document.getElementById("cL8").style.backgroundSize = "cover"
    await sleep(300)
    document.getElementById("cL6").style.opacity = 0
    await sleep(100)
    document.getElementById("cL7").style.opacity = 0
    await sleep(100)
    document.getElementById("cL8").style.opacity = 0
}

async function section11(){
    countS2 = 1
    createCircles()
    s1.style.marginRight = 77 + "vw"
    await sleep(20)
    createCircles()  
    s1.style.marginRight = 55 + "vw"
    await sleep(20)
    createCircles()  
    s1.style.marginRight = 33 + "vw"
    await sleep(20)
    createCircles()  
    s1.style.marginRight = 11 + "vw"
    await sleep(20)
    createCircles()  
    s1.style.marginLeft = 11 + "vw"
    await sleep(20)
    createCircles()  
    s1.style.marginLeft = 33 + "vw"
    await sleep(20)
    createCircles()  
    s1.style.marginLeft = 55 + "vw"
    await sleep(20)
    createCircles()  
    s1.style.marginLeft = 77 + "vw"
    await sleep(200)
    for(i = 154; i < 162; i++){     //het veranderen van de kleur naar afbeeldingen van 8 cirkels. Achteraf gezien zou het compacter zijn geweest als ik dit vaker gebruikt zou hebben
        document.getElementById("c" + i).style.backgroundImage = "url(img/cannon9.png)"
        document.getElementById("c" + i).style.backgroundSize = "cover"
        await sleep(20)
    }
    await sleep(400)
    var title = document.createElement("h1")    //titel "CANNON" in de website zetten
    title.setAttribute("id", "title")
    document.getElementById("titleContainer").appendChild(title)
    document.getElementById("title").innerHTML = "CANNON";
    for(i = 154; i < 162; i++){
        document.getElementById("c" + i).style.opacity = 0
        document.getElementById("c159").style.opacity = 1   //een specifieke cirkel zichtbaar laten
        await sleep(20)
    }
    await sleep(1500)
    var subTitle = document.createElement("p")      //subtitel in de website zetten
    subTitle.setAttribute("id", "subTitle")     
    document.body.appendChild(subTitle)
    document.getElementById("subTitle").innerHTML = "A QUINN MARTIN PRODUCTION";
    await sleep(1000)
    document.getElementById("subTitle").style.opacity = 0
    document.getElementById("title").style.opacity = 0
    await sleep(500)
    document.getElementById("c159").style.transition = 1 + "s ease-in"  //cirkel inzoomen
    document.getElementById("c159").style.marginLeft = 0
    document.getElementById("c159").style.height = 100 + "vh"
    document.getElementById("c159").style.width = 100 + "vh"
    await sleep(1000)
    createCircles()
    s1.style.height = 100 + "vh"
    s1.style.width = 100 + "vh"
    s1.style.marginLeft = 105 + "vw"
    createCircles()
    s1.style.height = 100 + "vh"
    s1.style.width = 100 + "vh"
    s1.style.marginRight = 105 + "vw"
    document.getElementById("c159").style.transition = 0 + "s"
    for(i = 1; i < 7; i++){     //6x de foto in de middelste cirkel veranderen en ook de kleuren van alle cirkels
        
        document.getElementById("c163").style.backgroundColor = "#fff28f"
        document.getElementById("c159").style.backgroundImage = "url(img/face" + i + ".jpg)"
        document.getElementById("c159").style.backgroundSize = "cover"
        document.getElementById("c159").style.backgroundPosition = "center"
        await sleep(2500)
        if(i < 6){
            document.getElementById("c159").style.backgroundImage = ""
            document.getElementById("c162").style.backgroundColor = "#ff2f00"
            await sleep(200)
            document.getElementById("c159").style.backgroundColor = "#ff2f00"
            await sleep(200)
            document.getElementById("c163").style.backgroundColor = "#ff2f00"
            document.getElementById("c162").style.backgroundColor = "#fff28f"
            await sleep(200)
            document.getElementById("c159").style.backgroundColor = "#fff28f"
            await sleep(200)
        }    
    }
    document.getElementById("c159").style.transition = 1 + "s"
    document.getElementById("c162").style.transition = 1 + "s"
    document.getElementById("c163").style.transition = 1 + "s"
    document.getElementById("c159").style.opacity = 0
    document.getElementById("c162").style.opacity = 0
    document.getElementById("c163").style.opacity = 0
    await sleep(8000)
    location.reload()   //pagina refreshen
}

function createCircles(){   //functie om kleine circels te maken
    s1 = document.createElement("div")
    s1.setAttribute("class", "circleSmall")
    s1.setAttribute("id", "c" + val)
    document.body.appendChild(s1)
    s1.style.opacity = 1   
    array.push(s1)
    val++
    s1.style.transform = "scale(" + countS2 + ")"
}

function createCircles2(){  //functie om middelgrote circels te maken
    s2 = document.createElement("div")
    s2.setAttribute("class", "circleMid")
    s2.setAttribute("id", "cM" + val2)
    document.body.appendChild(s2)
    s2.style.opacity = 1   
    array.push(s2)
    val2++
    s2.style.transform = "scale(" + countS2 + ")"
}

function createCircles3(){  //functie om grote circels te maken
    s3 = document.createElement("div")
    s3.setAttribute("class", "circleBig")
    s3.setAttribute("id", "cL" + val3)
    document.body.appendChild(s3)
    s3.style.opacity = 1   
    array.push(s3)
    val3++
    s3.style.transform = "scale(" + countS2 + ")"
}

function sleep(time) {      //Functie om pauzes te maken
    return new Promise(resolve => setTimeout(resolve, time));
  }
