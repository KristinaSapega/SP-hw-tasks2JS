//1
const numbs = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbs.length; i++) {
    if (numbs[[i]] ===10) {
        console.log(numbs[i]);
        break
    }
    console.log(numbs[i]);
}

//2
/* Дан массив: 
[1, 5, 4, 10, 0, 3].
Найдите позицию числа 4 в этом массиве.*/

const numbs2 = [1, 5, 4, 10, 0, 3];
const index = numbs2.indexOf(4);
console.log(index);

//3
/*Дан массив чисел: [1, 3, 5, 10, 20].
С помощью метода join выведите элементы массива
через пробел (пустую строку ' ').*/

let numbs3 = [1, 3, 5, 10, 20];
numbs3 = numbs3.join(' ');
console.log(numbs3);

//4
/*С помощью вложенных циклов создайте многомерный массив вида: 
[[1, 1, 1], [1, 1, 1], [1, 1, 1]].*/

const arr = [];
for (let i = 0; i < 3; i++) {
    arr [i] = [];
    for (let j = 0; j < 3; j++) {
        arr[i][j] = 1;
    }
}
console.log(arr);

//5
/* Дан массив: [1, 1, 1].
Добавьте в конец массива значения 2, 2, 2.*/

let arr2 = [1, 1, 1];
arr2.push (2, 2, 2);
console.log(arr2);

//6




