/**
 * Created by Dorota on 2015-10-05.
 */

console.log('hello');

var button = document.getElementById('todoAdd');
var text = document.getElementById('todoText');
var ullist = document.getElementById('todo');
var removeTodoButtons;

button.addEventListener('click', function (event) {
    event.preventDefault();
    if (text.value != '') {
        console.log('kliknięty buton');
        var todoText = text.value;
        console.log('chcemy dodac zadanie:' + todoText);
        text.value = '';
        var li = document.createElement('li'); // tworzy nowy element listy <li></li>
        li.appendChild(document.createTextNode(todoText));//dodaje text do elementu listy <li> </li>
        ullist.appendChild(li);

        var delButton = document.createElement('button'); //<button></button>
        delButton.appendChild(document.createTextNode('usuń zlisty'))// <button> usuń z listy </button>
        delButton.classList.add('removeTodo');// <button class="removeTodo">usuń zlisty</button>
        li.appendChild(delButton); //do li doklejamy nowy button, który jest wyżej zdefinowany

        //po dodaniu li i buttona aktualizujemy zmienną o aktualną listę buttonów
        removeTodoButtons = document.getElementsByClassName('removeTodo');

        //dodajemy nasłuchiwanie kliknięcia dla kadego buttona
        for (var a = 0; a < removeTodoButtons.length; a++) {
            removeTodoButtons[a].removeEventListener('click', function () { //usuwa stare nasluchiwanie
            });

            removeTodoButtons[a].addEventListener('click', function (event) {
                event.preventDefault();
                console.log('kliknięto usunięcie li');
                this.parentNode.remove();
            });

        }
    }
});

