/*
#### Задача 10
Отсортировать массив по возрастанию.
**Внимание**!
- Не разрашается использовать специальные методы массивов.
*/

var arr = [6,5,4,3,2,1];
var sorted = false;

while(!sorted) {
    sorted = true;
    for(var i = 1; i <= arr.length; i++) {
        var temp;
        if(arr[i - 1] > arr[i]) {
            sorted = false;
            temp = arr[i];
            arr[i] = arr[i - 1];
            arr[i - 1] = temp; 
        }
    }    
}
