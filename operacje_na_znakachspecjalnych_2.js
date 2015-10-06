/**
 * Created by Dorota on 2015-10-05.
 */

var add = function(m){
m.toString();
var exit ='';

    var i = m.length;

        for (var n=0; n<i; n++){
            if (m[n]%2==0 && m[n+1] === 0) {
                exit += m[n] + '-';
            }
            else{
                exit += m[n];
            }
        }
     return exit;
}

console.log(5646464564);