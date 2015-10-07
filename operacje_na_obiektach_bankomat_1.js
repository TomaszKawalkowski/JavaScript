/**
 * Created by Dorota on 2015-10-05.
 */

console.log('hello');

var ATM = (function () {
    var balance = 0;
    var password;
    var m; // +- cash
    var newpassword;
    return {
        withdraw: function (m) {
            if (m < balance) {
                balance = balance + m;
            }
        },
        setpassword: function (newpassword) {
            if (password == undefined) {
                password = newpassword;
            }
        },
        getBalanse: function () {
            return balance;
        }
    };


})();

ATM.withdraw(500);
AtM.getBalanse();