/**
 * Created by Dorota on 2015-10-05.
 */


function data (){


var dateObj = new Date ();

var h = dateObj.getHours();
var m = dateObj.getMinutes();
var s = dateObj.getSeconds();

var y = dateObj.getFullYear();
var month = dateObj.getMonth()+1;
var day = dateObj.getDay();



    if (h < 10){
        h = '0'+h;
    }

    if (m < 10){
        m = '0'+m;
    }
    if (s < 10){
        s = '0'+s;
    }
    if (month < 10){
        month = '0'+month;
    }
    if (day < 10){
        day = '0'+day;
    }




    document.getElementById('time').innerHTML = y+'.'+month+'.'+day+'||'+h+':'+m+':'+s;
    setInterval(data, 999);
   }

data();