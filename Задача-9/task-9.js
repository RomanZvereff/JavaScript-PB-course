/*
#### Задача 9
Отсортировать массив по убыванию.
**Внимание**!
- Не разрашается использовать специальные методы массивов.
*/
var arr = [1,2,3,4,5,6];
var sorted = false;

while(!sorted) {
    sorted = true;
    for(var i = 1; i <= arr.length; i++) {
        var temp;
        if(arr[i - 1] < arr[i]) {
            sorted = false;
            temp = arr[i];
            arr[i] = arr[i - 1];
            arr[i - 1] = temp; 
        }
    }    
}
