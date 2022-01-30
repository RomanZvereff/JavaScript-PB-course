/*
####Задача 9
Сделайте функцию `arrayFill`, которая будет заполнять массив заданными значениями. 
Первым параметром функция принимает значение, которым заполнять массив, а вторым — сколько элементов должно быть в массиве.
Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только число, строку, объект, массив
- Второй параметр обязателен и может принимать только число

```javascript
arrayFill('x',5); // [x,x,x,x,x]
```
*/

function arrayFill(value, arrLength) {
    if(arguments.length < 2) 
        throw new Error("Count of parameters is not match");

    if(typeof value !== 'number' && typeof value !== 'string' && typeof value !== 'object' && !Array.isArray(value))
        throw new Error("Type error: value parameter should be number, string, object or array");
        
    if(typeof arrLength !== 'number')
        throw new Error("Type error: arrLength parameter should be a number");
    
        let arr = new Array(arrLength);

    for (let i = 0; i < arr.length; i++) {
        arr[i] = value;
    }

    return arr;
}

console.log(arrayFill('x',5));
