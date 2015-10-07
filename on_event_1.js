/**
 * Created by Dorota on 2015-10-05.
 */

console.log('hello');

var menu = document.getElementById('my-menu');
var = document.querySelector('.btn-toggle');

menu.addEventListener('click', function(){
    console.log('kliniety');
    menu.classList.toggle('active');
});

var links = document.getElementsByTagName('a');
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (event){
        event.preventDefault(); ///zapobiega przekierowaniu po evencie
        this.remove();// == links[i].remove();

    });
}