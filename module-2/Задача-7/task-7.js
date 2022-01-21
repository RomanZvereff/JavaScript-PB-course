/*
####Задача 7
Сделайте функцию `getDivisors`, которая параметром принимает число и возвращает массив его делителей 
(чисел, на которое делится данное число начиная от 1 и заканчивая самим собой). 
Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только число больше 0.
*/

function getDivisors(number) {
    var arr = [];
    if(typeof number !== 'number')
        throw new Error("Error: parameter type is not a Number");

    if(number < 0)
        throw new Error("Error: parameter can't be a 0");

    for (var i = 1; i <= number; i++) {
        if (number % i == 0) {
            arr.push(i);
        }
    }

    return arr;
}
