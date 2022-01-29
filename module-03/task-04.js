/*
Создать имплементацию функции `some`, логика работы такая же как и у родного метода.
Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию
```javascript
const arr = [1,2,3];
some(arr, function(item, i, arr) {});
```
*/

function mySome(arr, cb) {
    if(arguments.length < 2)
        throw new Error("Wrong count of arguments");

    if(!Array.isArray(arr))
        throw new Error("First parameter is not an array");

    if(!typeof cb === 'function')
        throw new Error("Second parameter is not a function");

    for(let i = 0; i < arr.length; i++) {
        if(cb(arr[i], i, arr)) {
            return true;
        };
    }
    return false;
}

const arr = [1,2,3];

mySome(arr, function(item, i, arr) {
    return item >= 1;
});
