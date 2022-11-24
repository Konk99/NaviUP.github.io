const darkMode = document.querySelector(".darkMode");
document.body.style.backgroundImage = document.querySelector('.backimg').getAttribute('src');
body = document.body;

darkMode.addEventListener('click', (event) => {
    event.preventDefault();
    backgroundStyle = body.style.backgroundImage;
    
    if(backgroundStyle == 'url("https://konk99.github.io/NaviUP.github.io/images/y-so-serious.png")'){
        body.style.backgroundImage = 'url("https://konk99.github.io/NaviUP.github.io/images/y-so-serious-white.png")';
    }else if(backgroundStyle == 'url("https://konk99.github.io/NaviUP.github.io/images/y-so-serious-white.png")' || backgroundStyle == ""){
        body.style.backgroundImage = 'url("https://konk99.github.io/NaviUP.github.io/images/y-so-serious.png")';
    }
    
});
