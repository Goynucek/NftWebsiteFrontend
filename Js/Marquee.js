const marqueeInner = document.getElementById("marqueeInner");
const marquee = document.getElementById("marquee");


let i = 0;let j = 0.05;

marqueeEffect();

EventListener();

function EventListener(){
    marquee.scrollLeft > 5000 ?marquee.scrollLeft=0:null;
    marquee.addEventListener("mouseenter",()=>{marquee.style.overflowX = "scroll"});
    marquee.addEventListener("mouseleave",()=>{j=0.05;marquee.scrollLeft = 0;marquee.style.overflow = "hidden";});
}

function marqueeEffect()
{
    setInterval(()=>{
        marqueeInner.style.transform = "translateX(" + (i) + "%)";
        i-= j;
        if(i <= -250) {
            i = 0;
        }
    },0.25);
}

