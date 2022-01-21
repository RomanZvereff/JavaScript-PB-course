/*
####Задача 2
Напишите функцию `f` которая возвращает сумму всех параметров. 
Количество параметров может быть любым. 
Данная функция должна обязательно содержать проверку входных параметров, потому что принимать она может только числа.
*/

function f(...args) {
    let result = 0;
    for(let i of args) {
        if(typeof i !== 'number')
            throw new Error("Error: all parameters type should be a Number");

        result += i;
    }

    return result;
}
