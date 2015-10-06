/**
 * Created by Dorota on 2015-10-05.
 */



var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];


Array.prototype.duplicate = function(){
    return this.concat(this);
}

/* prototype jest globalny i w tym przypadku wywolanie metody duplicate na dowolnej
tablicy w kodzie ją zduplikuje. Np tablica1.prototype.duplicate


 */



console.log([4,5,6,7,7].duplicate());