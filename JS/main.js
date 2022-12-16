
function checkPass() {
    var a = document.querySelector(".lock > input").value;
    if(a == "08/12/2003" || a == "8/12/2003") {
        var b = document.querySelector(".lock");
        b.style.display = "none";
        
        var temp1 = document.querySelector(".main_content");
        var temp2 = document.querySelector(".bg");
        temp1.style.display = "flex";
        temp2.style.display = "flex";
        var temp = document.querySelector(".mus");
        temp.play();
        var part = document.querySelector("body");
        part.setAttribute("style", "background-image: url(./images/tuyet2.gif); background-size: cover;");
    } else alert("Sai rồi mài!!!!!")
}

function runScript(e) {
    //See notes about 'which' and 'key'
    if (e.keyCode == 13) {
        checkPass();
    //     var a = document.querySelector(".lock > input").value;
    // if(a == "08/12/2003" || a == "8/12/2003") {
    //     var b = document.querySelector(".lock");
    //     b.style.display = "none";
        
    //     var temp1 = document.querySelector(".main_content");
    //     var temp2 = document.querySelector(".bg");
    //     temp1.style.display = "flex";
    //     temp2.style.display = "flex";
    //     var temp = document.querySelector(".mus");
    //     temp.play();
    //     var part = document.querySelector("body");
    //     part.setAttribute("style", "background-image: url(./images/tuyet2.gif); background-size: cover;");


    // } else alert("Sai rồi mài!!!!!")
        var tb = document.getElementById("scriptBox");
        eval(tb.value);
        return false;
    }
}


// function anh1() {
//     // Obj.style.display ="none"
//     var a = document.querySelectorAll(".main_content > img");

//     // var a = document.querySelector("div.main_content > img:first-child");
//     // a.style.display = "none";
    
var d = document.querySelector(".dim")
var a = document.querySelector("div.main_content > img:first-child");
var b = document.querySelector(".show");
var c = document.querySelector(".flip-card")

function anh1() {
    a.style.display = "none"
    b.style.visibility = "visible"
    c.style.display = "block"
    setTimeout(function() {
    d.style.display = "block"
    }, 2500)
}
d.addEventListener("click", function() {
    b.style.visibility = "hidden"
    c.style.display = "none"
    var f = document.querySelector(".bg")
    f.setAttribute("style", "display: block !important")
})
var i = 1;
var pic = document.querySelector(".pic");
setInterval(function() {
    pic.setAttribute("src", `./images/${i++}.jpg`)
    if(i > 5) i =1;
}, 1000)



var back = document.querySelector(".back")
back.addEventListener("click", function() {
    b.style.visibility = "visible"
    c.style.display = "block"
    var f = document.querySelector(".bg")
    f.setAttribute("style", "display: none !important")
})

