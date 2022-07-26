(()=>{
var messageArray = ["Hi, my name is <br> Aya Moosa"];
var textPosition = 0; 
var speed = 100; 

typewriter = () =>{
    document.querySelector(".greeting").innerHTML = messageArray[0].substring(0, textPosition)+ "<span class=\"blinker\">| </span>";

    if(textPosition++ != messageArray[0].length){
        setTimeout(typewriter, speed)
    }
}  
window.addEventListener("load", typewriter); 






function fadeOutOnScroll(element) {
    if (!element) {
      return;
    }
    
    var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
    var elementHeight = element.offsetHeight;
    var scrollTop = document.documentElement.scrollTop;
    
    var opacity = 1;
    
    if (scrollTop > distanceToTop) {
      opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
    }
    
    if (opacity >= 0) {
      element.style.opacity = opacity;
    }
  }      
  
  function scrollHandler() {
    const section = document.querySelectorAll("section")
    section.forEach(fadeOutOnScroll);
  }
  
  window.addEventListener('scroll', scrollHandler);
})()
