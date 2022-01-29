/*
####Задача 5
Создать имплементацию функции `reduce`, логика работы такая же как и у родного метода.
Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию
- Третий параметр обязателен и может принимать только строку или число
*/

function myReduce(arr, cb, start) {
    if(arguments.length < 2)
        throw new Error("Wrong count of arguments");

    if(!Array.isArray(arr))
        throw new Error("First parameter is not an array");

    if(!typeof cb === 'function')
        throw new Error("Second parameter is not a function");

    for(let i = 0; i < arr.length; i++) {
        start = cb(arr[i], start);
    }
    return start;
}

const arr = [1,2,3];
const acc = 0;

myReduce(arr, function(item, acc) {
    return (acc + item);
}, 0);
