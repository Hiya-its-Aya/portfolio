(()=>{var e=["Hi, my name is...<br> Aya Moosa"],t=0;typewriter=()=>{document.querySelector(".greeting").innerHTML=e[0].substring(0,t)+"<span>| </span>",t++!=e[0].length&&setTimeout(typewriter,75)},window.addEventListener("load",typewriter)})();