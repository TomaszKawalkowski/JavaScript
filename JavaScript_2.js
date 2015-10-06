

var r, star = '*';


for (var i=1; i<=5; i++){
    console.log(star);
    star +='*';
    }

var n = 3;
var y = 5;
var sum = 0;
for (var k=1; k<=1000; k++){
    if (k%n == 0||k%y ==0){

        sum += k;

    }

}
console.log(sum)