import { people, rooms } from "./searchData.js";

const darkMode = document.querySelector(".darkMode");
document.body.style.backgroundImage = document.querySelector('.backimg').getAttribute('src');
const body = document.body;

darkMode.addEventListener('click', (event) => {
    event.preventDefault();
    backgroundStyle = body.style.backgroundImage;
    
    if(backgroundStyle == 'url("https://konk99.github.io/NaviUP.github.io/images/y-so-serious.png")'){
        body.style.backgroundImage = 'url("https://konk99.github.io/NaviUP.github.io/images/y-so-serious-white.png")';
    }else if(backgroundStyle == 'url("https://konk99.github.io/NaviUP.github.io/images/y-so-serious-white.png")' || backgroundStyle == ""){
        body.style.backgroundImage = 'url("https://konk99.github.io/NaviUP.github.io/images/y-so-serious.png")';
    }
    
});

function autocomplete(inp, arr){
    let currrentFocus;

    inp.addEventListener('click', () => {
        inp.focus();
        inp.select();
        wrapperVisibility('nope', inp.getAttribute('id'));
    })

    inp.addEventListener('input', function(event){
        var a, b, i, value = this.value;
    
        closeAllLists();
    
        if(!value) { return false;}
        currrentFocus += -1;

        a = document.createElement('DIV');
        a.setAttribute('id', this.id + 'autocomplete-list');
        a.setAttribute('class', 'autocomplete-items');

        this.parentNode.appendChild(a);

        for(i = 0; i < arr.length; i++){
            if(arr[i].substr(0, value.length).toUpperCase() == value.toUpperCase()){
                b = document.createElement('DIV');

                b.innerHTML = '<strong>' + arr[i].substr(0, value.length) + '</strong>';
                b.innerHTML += arr[i].substr(value.length)

                b.innerHTML += '<input type="hidden" value="' + arr[i] + '">';

                b.addEventListener('click', function(event){
                    inp.value = this.getElementsByTagName('input')[0].value;

                    closeAllLists();
                    wrapperVisibility(true, inp.getAttribute('id'));
                    resizeMe.call(inp);
                });
                a.appendChild(b);
            }
        }
    });

    inp.addEventListener('keydown', function(event){
        var x = document.getElementById(this.id + 'autocomplete-list');

        if(x) {x = x.getElementsByTagName('div');}

        if(event.KeyCode == 40){
            currrentFocus++;

            addActive(x);
        } else if(event.KeyCode == 38){
            currrentFocus--;
            
            addActive(x);
        } else if(event.KeyCode == 13){
            event.preventDefault();
            if(currrentFocus > -1){
                if (x) {x[currrentFocus].click()}
            }
        }
    });

    function addActive(x){
        if(!x) {return false;}
        
        removeActive(x);
        if(currrentFocus >= x.length) {currrentFocus = 0;}
        if(currrentFocus < 0) {currrentFocus = x.length-1;}

        x[currrentFocus].classList.add('autocomplete-active');
    }

    function removeActive(x){
        for(i = 0; i < x.length; i++){
            x[i].classList.remove('autocomplete-active');
        }
    }
    
    function closeAllLists(elements){
        var x = document.getElementsByClassName('autocomplete-items');

        for(let i = 0; i < x.length; i++){
            if(elements != x[i] && elements != inp){
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }

    document.addEventListener('click', function(event){
        closeAllLists(event.target);
    });
}

autocomplete(document.getElementById('people'), people);
autocomplete(document.getElementById('rooms'), rooms);
autocomplete(document.getElementById('start'), rooms);

const tileWrapper = document.querySelector('.to-go-wrapper');

function wrapperVisibility(isVisible, id) {
    console.log(id);
    if(isVisible == true && id == 'start'){
        tileWrapper.classList.remove('none');
    } else if(id == 'start'){
        tileWrapper.classList.add('none');
    }
}

const inputs = document.querySelectorAll('.searchBox');
for(let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', resizeMe);
}

function resizeMe() {
    if(this.value.length > 10){
        this.style.width = this.value.length + 'ch';
    } else {
        this.style.width = '40%';
    }
}