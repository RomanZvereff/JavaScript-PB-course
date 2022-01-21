/*
####Задача 1
Напишите функцию `f`, которая возвращает куб числа. Число передается параметром. 
Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только число.
*/

function f(number) {
    if(typeof number !== 'number') 
        throw new Error("Error: parameter type is not a Number");

    return number * number * number;
}
