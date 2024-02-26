
const Images = ["61","62","63","64","65","66","67","68"]
let I = 0;
let oldA;

loop();


function loop()
{
    setInterval(()=>{
        const AvocadoMainImg = document.getElementById("AvocadoMainImg");

        circle = document.getElementsByClassName(`boxImg`)[I];

        if(oldA != null)
        {
            removeBackgroundColor();
        }
        circle.style.backgroundColor = "white"; 
        circle.style.transition = "all 1s ease-in-out"; 
        AvocadoMainImg.src = `İmg/Avocados/${Images[I]}.png`;

        oldA= I;
        if(I === 5)
        {
            I = 0;
        }else{
            I++;
        }
    },1000);
}

function removeBackgroundColor()
{
    circleOld = document.getElementsByClassName(`boxImg`)[oldA];
    circleOld.style.removeProperty("background-color"); 
    circleOld.style.transition = "all 1s ease-in-out"; 
}
