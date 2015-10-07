/**
 * Created by Dorota on 2015-10-05.
 */


var btnSave = document.getElementById('save');
var btnLoad = document.getElementById('load');

btnSave.addEventListener('click', function(event){
    event.preventDefault()
    var textareaValue = document.getElementById('area');
    var textareaValue = area.value;

    window.localStorage.setItem('area-text', textareaValue);
    //dodanie do local storage text z textarea z kluczem area-text
    console.log('zapisano tekst do localStorage');
});


btnLoad.addEventListener('click', function(event){
    event.preventDefault();
    var toLoad = window.localStorage.getItem('area-text');
    //zapisujemy do zmiennej pobrane dane z local storage z kluczem area text dodanym wyżej
    var textareaValue = document.getElementById('area');
   area.value = toLoad;
    //ustawiamy wartość textarea na dane pobrane z localStorage
    console.log('Załadowano tekst do textarea');
});

/**zadanie domowe zmienić TODO list wykorzystując local storage :
 * w local storage przechowyjemy tablice wszystkich li (domyślnie jest ona pusta)
 * przy dodawaniu kolejnego li do ul pobieramy aktualną tablicę z localstorage dodajemy now element i zapisujemy
 * dodajemy button który z eventlistenererm pobiera nam tablicę li z local Storage
 */
/**W local storage przechowujemy tablice wszytskich li (domyślnie ona jest pusta)

przy dodawaniu kolejnego li do ul pobieramya ktualna tablicę z localstorage dodajemy nowy element I zapisujemy

dodajemy button który z eventlistenerem pobiera nam tablice li z localStorage I poprzez innerHtml dodaje do ul
 (można zrobić przez appendChild (w pętli po tablicy z LS))**/


