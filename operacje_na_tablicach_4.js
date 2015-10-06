/**
 * Created by Dorota on 2015-10-05.
 */

var array1 = [12,5,6,6,8,7,9,2,2,2,-5,-5,66,8,54,45,65,95];

var m = 5;





var result = function(array1, m) {
    var g =[];
    if (m < array1.length){
    for (var n = array1.length-1; n >= (array1.length - m); n--) {

        g.push(array1[n]);
        }
    return g;

    }

    else {
    for (var n = array1.length-1; n >= 0; n--) {

    g.push(array1[n]);
}
    return g;


}
}

console.log(result(array1,m));
