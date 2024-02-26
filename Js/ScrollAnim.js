const DiscordButton = document.getElementById("joinDiscordInner").firstElementChild;
const DiscordIcon = document.getElementById("Discord");
const TwitterIcon = document.getElementById("Twitter");
const OpenSeaIcon = document.getElementById("OpenSea");
const logoText = document.getElementById("logoText");
const nav = document.querySelector("nav");

EventListener();

function EventListener()
{
    addEventListener("click",(e)=>{
        const Button = e.target.parentElement;

        if(Button.getAttribute("name") === "button")
        {
            const Paragrapht=Button.nextElementSibling;
            if(Paragrapht.style.display === "block")
            {
                Button.style.transition = "all 1s";
                Paragrapht.style.display = "none";
            }
            else{
                Paragrapht.style.display = "block";
            }

        }
        if(e.target.getAttribute("name") === "button")
        {
            const Paragrapht=e.target.nextElementSibling;
            if(Paragrapht.style.display === "block")
            {
                Paragrapht.style.display = "none";
            }
            else{
                Paragrapht.style.display = "block";
            }
        }
    });
    OpenSeaIcon.addEventListener("click",()=>{
        window.location = "https://opensea.io/collection/avocadogang";
    });
    TwitterIcon.addEventListener("click",()=>{
        window.location = "https://twitter.com/avocadosoffical/status/1425836061842755593";
    });
    DiscordIcon.addEventListener("click",()=>{
        window.location = "https://discord.gg/X4bwsyKMXT";
    });
    DiscordButton.addEventListener("click",()=>{
        window.location = "https://discord.gg/X4bwsyKMXT";
    });
    window.addEventListener("scroll", scrollEvent);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function scrollEvent(){
    const ScrollY = window.scrollY;
    console.log(ScrollY);
        if(scrollY => 100)
        {
            nav.style.transition = "all 0.5s";
            nav.style.width = "100vw";
            nav.style.height = "4em";
            nav.style.backgroundImage = "linear-gradient(315deg, #42378f 0%, #f53844 74%)";
            nav.style.top = "2em";
            logoText.style.display = "none";
        }
        if(scrollY === 0)
        {
            console.log("oldu");
            nav.style.transition = "width 0s";
            nav.style.width = "40vw";
            nav.style.top = "3em";
            nav.style.backgroundImage = "none";
            logoText.style.display = "block";
        }
        if(scrollY => 300)
        {
            const section = document.querySelectorAll(".AboutUs")[2].firstElementChild;
            const ımage = section.nextElementSibling;
            ımage.style.animation = "WhyusImage 2s";
            section.style.animation = "Whyus 2s";
        }
        if(scrollY => 150)
        {   
            const section = document.querySelectorAll(".AboutUs")[1].firstElementChild.nextElementSibling;
            const ımage = section.previousElementSibling;
            ımage.style.animation = "WhyusImage 2s";
            section.style.animation = "Whyus 2s";
        }
        if(scrollY => 50)
        {
            const section = document.querySelectorAll(".AboutUs")[0].firstElementChild;
            const ımage = section.nextElementSibling;
            ımage.style.animation = "WhyusImage 2s";
            section.style.animation = "Whyus 2s"
        }
}