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

