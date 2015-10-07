/**
 * Created by Dorota on 2015-10-05.
 */


function checkDate() {
    var userDate = prompt('Wprowadż datę w formacie MM.DD.YYYY');
    var userDateObj = new Date(userDate);
    var currentDateObj = new Date();


    if (currentDateObj > userDateObj) {
        alert('wprowdziłeś datę z przeszłości');

    }
    else if (currentDateObj > userDateObj) {
        alert('wprowdziłeś dtę z przyszłości');
    }

    else {
        alert('wprowdzłeś datę dzisiejszą');
    }
}


checkDate();

//fajny plugin do dat - momentsjs.com;