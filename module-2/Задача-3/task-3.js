/*
####Задача 3
Сделайте функцию `f`, которая отнимает от первого числа второе и делит на третье. 
Данная функция должна обязательно содержать проверку входных параметров, потому что принимать она может только числа.

```js
f(9,3,2); // 3
f('s',9,3) // Error: all parameters type should be a Number
```
*/

function f(num1, num2, num3) {
    if(typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number')
        throw new Error("Error: all parameters type should be a Number");

    return (num1 - num2) / num3;
}
