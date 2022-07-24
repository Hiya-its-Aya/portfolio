var messageArray = ["Hi, my name is <br> Aya Moosa :)"];
var textPosition = 0; 
var speed = 100; 

typewriter = () =>{
    document.querySelector(".greeting").innerHTML = messageArray[0].substring(0, textPosition)+ "<span class=\"blinker\">| </span>";

    if(textPosition++ != messageArray[0].length){
        setTimeout(typewriter, speed)
    }
}  
window.addEventListener("load", typewriter); 



