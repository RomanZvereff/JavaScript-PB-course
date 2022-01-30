
/*
####Задача 10
Создать имплементацию функции `reverse`, которая принимает массив в качестве параметра, 
а возвращает массив только в обратном порядке.
Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Генерировать ошибку если был передан пустой массив
*/

function myReverse(arr) {
    if(arguments < 1)
        throw new Error("Function should have one parameter");

    if(!Array.isArray(arr) && arr.length == 0)
        throw new Error("Parameter is not an array or empty array");

    let lastIndex = arr.length - 1;

    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[lastIndex];
        arr[lastIndex] = arr[i];
        arr[i] = temp;
        lastIndex--;
    }
  
  return arr;
}

const arr = [7, 6, 5, 4, 3, 2, 1];

console.log(myReverse(arr));
