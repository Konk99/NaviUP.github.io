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


function autocomplete(inp, arr){
    let currrentFocus;

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

        for(i = 0; i < x.length; i++){
            if(elements != x[i] && elements != inp){
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }

    document.addEventListener('click', function(event){
        closeAllLists(event.target);
    });
}

const people = ['Antoniszyn Grzegorz', 'Aslanoglu Rengin', 'Bawiec Aleksandra', 'Białas Włodzimierz', 'Biel Gabriela', 'Biniak-Pieróg Małgorzata', 
'Bocheńska-Skałecka Anna', 'Boczar Mateusz', 'Bogusławski Paweł', 'Borcz Anna', 'Bosy Jarosław', 'Burdziński Jacek', 'Burszta-Adamiak Ewa', 
'Bury Grzegorz', 'Chrobak Grzegorz', 'Czarkowska Irena', 'Ćmielewski Kazimierz', 'Dąbek Paweł', 'Dąbrowska Jolanta', 'Dąbrowski Jarosław', 
'Diakowska Ewa', 'Dobrzańska Joanna', 'Domańska Magdalena', 'Drobny Aleksander', 'Drzazga Michał', 'Dyba Kamil', 'Dzikowska Teresa', 
'Fiałkiewicz Wiesław', 'Filipiak Maciej', 'Furmankiewicz Marek', 'Gajewska Katarzyna', 'Garlikowski Daniel', 'Gil Anna', 'Głogowska Małgorzata', 
'Głogowski Arkadiusz', 'Głowski Robert', 'Gołuch Piotr', 'Gruss Łukasz', 'Gruszczyński Maciej', 'Grządziel Mariusz', 'Gubańska Renata', 
'Gubański Janusz', 'Hachoł Justyna', 'Hadaś Edyta', 'Hadaś Tomasz', 'Hełdak Maria', 'Hordyniec Paweł', 'Idzikowski Rafał', 'Ilnicka Monika', 
'Iwiniak Adam', 'Jakóbiak Agnieszka', 'Jakubczyk Teresa', 'Jamroz Olgierd', 'Jarząbek-Rychard Małgorzata', 'Jawiecki Bartosz', 
'Jaworek-Jakubska Justyna', 'Jełowicki Jan', 'Jóźków Grzegorz', 'Kachniarz Marian', 'Kaczmarek Adrian', 'Kaczmarek Iwona', 
'Kajewska-Szkudlarek Joanna', 'Kajewski Ireneusz', 'Kalbarczyk Robert', 'Kamińska Joanna', 'Kapłon Jan', 'Karczewski Maciej', 'Kasperski Robert', 
'Kazak Jan', 'Kaźmierowski Maciej', 'Kaźmierski Kamil', 'Kempa Olgierd', 'Kilian Wojciech', 'Kołdyńska Iga', 'Kontny Bernard', 'Kowalczyk Tomasz', 
'Krajewski Piotr', 'Krężel Agata', 'Kubicz Justyna', 'Kuchar Leszek', 'Kuchmister Janusz', 'Kulczyk-Dynowska Alina', 'Kuśnierz Magdalena', 
'Kuta Łukasz', 'Lebiedzińska Monika', 'Lejcuś Krzysztof', 'Leśny Jacek', 'Lipsa Joanna', 'Lis Aleksandra', 'Lochyński Paweł', 'Lubańska Aleksandra', 
'Łyczko Wojciech', 'Majchrzak Artur', 'Malczewska Beata', 'Malczyk Tomasz', 'Marczak Daria', 'Markowska Joanna', 'Mastalska-Cetera Barbara', 
'Meissner Małgorzata', 'Michalski Adam', 'Młotek Wioletta', 'Moryl Andrzej', 'Mruklik Agnieszka', 'Nawrocka Sandra', 'Niedźwiecka-Filipiak Irena', 
'Okrasińska-Płociniczak Hanna', 'Olszewska Beata', 'Orzechowska-Szajda Iwona', 'Orzechowski Maciej', 'Orzepowski Wojciech', 
'Owczarek-Wesołowska Magdalena', 'Pardela Łukasz', 'Pawęska Katarzyna', 'Pawłowski Kamil', 'Pawłuszek_Filipiak Kamila', 'Pęczkowski Grzegorz', 
'Piepiora Zbigniew', 'Piotrowicz Michał', 'Piotrowski Maciej', 'Płuciennik Monika', 'Podhajska Ewa', 'Podolska Anna', 'Podkładek Ryszard', 
'Porucznik Sylwia', 'Potyrała Jerzy', 'Przybyła Katarzyna', 'Publikowski Krzysztof', 'Pyszczek Jowita', 'Raczyńska Agnieszka', 'Raszka Beata', 
'Rohm Witold', 'Roszak Bogdan', 'Rubaszek Justyna', 'Rzeszut Sylwester', 'Sawras Marta', 'Sobota Marcin', 'Sośnica Krzysztof', 'Sowa Wojciech', 
'Stacherzak Agnieszka', 'Stanek Paulina', 'Stańczyk Justyna', 'Stodolak Radosław', 'Strugarek Dariusz', 'Swianiewicz Paweł', 'Sylla Marta', 
'Szczepański Jakub', 'Szewrański Szymon', 'Szopińska Elżbieta', 'Szuszkiewicz Tomasz', 'Szydłowska Katarzyna', 'Szymańska-Pulikowska Agata', 
'Śpitalniak Michał', 'Świąder Małgorzata', 'Świerzko Robert', 'Tankiewicz Matylda', 'Tatko Radosław', 'Tokarczyk-Dorociak Kataczyna', 
'Tomczyk Paweł', 'Trojanowicz Marek', 'Trzcina Estera', 'Tymiński Tomasz', 'Tymków Przemysław', 'Uciechowska-Grakowicz Anna', 'Walicka Agata', 
'Walter Ewa', 'Wdowczyk Aleksandra', 'Weber-Siwirska Marta', 'Wiatkowski Mirosław', 'Wiercik Paweł', 'Wilczyńska Izabela', 'Włóka Agata', 
'Wnętrzak Małgorzata', 'Zajdel Radosław', 'Zakęś Filip', 'Zalewska Karolina', 'Zathey Maciej', 'Ziemiańska Monika', 'Zienowicz Magdalena', 
'Zięba Zofia', 'Żuber Marian'];

autocomplete(document.getElementById('people'), people);