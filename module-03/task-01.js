/*
####Задача 1
Создать имплементацию функции `forEach`, логика работы такая же как и у родного метода.
Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию
*/

function myforEach(arr, cb) {
    if(arguments.length < 2)
        throw new Error("Wrong count of arguments");

    if(!Array.isArray(arr))
        throw new Error("First parameter is not an array");

    if(!typeof cb === 'function')
        throw new Error("Second parameter is not a function");

    for(let i = 0; i < arr.length; i++) {
        cb(arr[i], i, arr);
    }
}

const arr = [1,2,3];

myforEach(arr, function(item, i, arr) {
    console.log(item);
});
