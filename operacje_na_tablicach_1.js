/**
 * Created by Dorota on 2015-10-05.
 */



var tablica = ['pol', 'scroll', 'doll','kroll', 'moll','troll'];

var joiny = function(tablica){
    var a1 = tablica.join();
    var a2 = tablica.join(',');
    var a3 = tablica.join('+');

    console.log(a1);
    console.log(a2);
    console.log(a3);
}


joiny(tablica);