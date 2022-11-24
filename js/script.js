const darkMode = document.querySelector(".darkMode");
document.body.style.backgroundImage = document.querySelector('.backimg').getAttribute('src');

darkMode.addEventListener('click', (event) => {
    event.preventDefault();
    bacgroundStatus = getComputedStyle(document.body).backgroundImage.replace('url("http://localhost:3000/images/','').replace('")','');
    if(bacgroundStatus == 'y-so-serious-white.png'){
        document.body.style.backgroundImage = "url('/images/y-so-serious.png')";
    }else if(bacgroundStatus == "y-so-serious.png"){
        document.body.style.backgroundImage = document.querySelector('.backimg').getAttribute('src');
    }
});
