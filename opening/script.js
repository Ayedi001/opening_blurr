const loadtext = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')
let load = 0
let int = setInterval(blurr, 30)
function blurr() {
    load++
 if (load > 99) {
     clearInterval(int)
 }
 loadtext.innerText = `${load}%`
 loadtext.style.opacity = scale(load,0,100,1,0)
 bg.style.filter=`blur(${scale(load,0,100,30,0)}px)`
}

const scale = (n,a,b,c,d)=>{
    return (n-a)*(d-c)/(b-a)+c;
}