/**
 * Created by Dorota on 2015-10-05.
 */

console.log('hello');


var a = function(start, end){
    var b = [];
    for (var n= start; n <= end; n++){

        b.push(n);

    }
    return b;
}

//console.log(a(1,50));

var res1=a(1,10);
console.log(res1);

var c = function(b){
    var t = 0;
    var k = b.length;
    for (var n=0; n<k; n++){
        t += b[n];

    }
    return t;

}

console.log(c(res1));