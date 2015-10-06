/**
 * Created by Dorota on 2015-10-05.
 */



var tablica = [-5, 6, 9,45, 98,-63];

var minTable = function (tablica){
    for (var key in tablica){
        var parset = parseFloat(key);
        var n = tablica[parset+1];
        var k = tablica[key];

        if (tablica[key]< k ){
            k = tablica[key+1];

        }
    }    console.log('min  number is' +k);
}

minTable(tablica);

