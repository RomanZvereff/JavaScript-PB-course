/*
####Задача 4
Сделайте функцию `f`, которая принимает параметром число от 1 до 7, а затем возвращает день недели на русском языке. 
Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только числа от 1 до 7.
*/

function f(number) {
    if(typeof number !== 'number')
        throw new Error("Error: parameter type is not a Number");

    if(number < 1 || number > 7)
        throw new Error("Error: parameter should be in the range of 1 to 7");

    switch(number) {
        case 1 :
            return "Воскресенье";
        case 2 :
            return "Понедельник";
        case 3 :
            return "Вторник";
        case 4 :
            return "Среда";
        case 5 :
            return "Четверг";
        case 6 :
            return "Пятница";
        case 7 :
            return "Суббота";
    }
}
