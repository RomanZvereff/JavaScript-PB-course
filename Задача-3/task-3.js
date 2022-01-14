/*
####Задача 3
Перепишите код, заменив оператор `switch` на оператор `if..else`:
*/

var val;

if (val === 'a') {
    console.log( 'a' );
} else if ((val === 'b') || (val === 'c') || (val === 'd') || (val === 'e')) {
    console.log( 'others' );
} else {
    console.log( 'unknown' );
}
