/**
 * Created by Dorota on 2015-10-05.
 */

var array1 = [12,5,6,6,8,7,9,2,2,2,-5,-5,66,8,54,45,65,95];


array1.sort(function(a, b){ return a-b; });

console.log(array1);


var result = function() {
    var g =[];
    for (var n = 0; n < array1.length; n++) {
        if (array1[n] == array1[n+1]){

            g.push(array1[n]);
        }
            }
    console.log(g);
    }

result(array1);
