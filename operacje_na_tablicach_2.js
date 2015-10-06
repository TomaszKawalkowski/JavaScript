/**
 * Created by Dorota on 2015-10-05.
 */





var add = function(){
    var sum = 0;
    var k =0;
    var i = arguments.length;
    for (var n=0; n<i; n++){

        k = arguments[n];
        sum += k;
    }
    console.log('suma jest rowna:' +sum);
    return sum;

}



add(5,6,8,7,5,5);


