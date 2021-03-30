/*
Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
*/
/*let start = ['a', 'b', 'c'];
let str = '';
for (let i = 0; i < start.length; i++) {
    str = str + start[i];
}
console.log(str);*/
/*
Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.*/
/*let arr = ['a', 'b', 'c'];
let str = '';
let i = 0;
while (i < arr.length){
    str = str + arr[i];
    i++;
}
console.log(str);*/
/*
 Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
*/
/*
let rose = [ 'a', 'b', 'c'];
let row = '';
for (const rowElement of rose) {
    row = row + rowElement;

}
console.log(row);
*/
/*
Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
*/
/*let exp = ['a', 'b', 'c'];

for (let i = 1; i <=3; i++) {
    exp.push(i)
}
console.log(exp);*/

/*
 Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
*/
/*let numb = [1,2,3];
let revnumb = numb.reverse();
console.log(revnumb);*/
/*
Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
*/

/*
let end = [1,2,3];
for (let i = 4; i <=6; i++) {
    end.push(i);
}
console.log(end);
*/
/*
Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
*/
/*let smart = [1,2,3];

for (let i = 6; i >= 4; i--) {
    smart.unshift(i);
}
console.log(smart);*/

/*
Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
*/
/*const mix = ['js', 'css', 'jq'];
console.log(mix);
const one = mix.shift();
console.log('one',one);
console.log('mix',mix);*/
/*
Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
*/
/*const mix = ['js', 'css', 'jq'];
console.log(mix);
const one = mix.pop();
console.log('one',one);
console.log('mix',mix);*/
/*
Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
*/
/*const numb = [1, 2, 3, 4, 5];
console.log(numb.slice(3,6));*/
/*
 Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
*//*
const numb = [1, 2, 3, 4, 5];
console.log(numb.slice(0,2));*/
/*
 Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
*/
/*const numb = [1, 2, 3, 4, 5];
console.log(numb.splice(1,2));
console.log(numb);*/
/*
Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
*/
/*const numb = [1, 2, 3, 4, 5];

console.log(numb.splice(-2,0,'a','b','c'));
console.log(numb);*/
/*
Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
*/
/*const numb = [1, 2, 3, 4, 5];

console.log(numb.splice(1,4,'a','b',2,3,4,'c',5,'e'));
console.log(numb);*/

/*
Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
*/
/*let trouble = [23,52,85,65,10,12,41,56,17,49];
for (let i = 0; i < trouble.length; i++)
  { if (trouble[i]%2===0) {
      console.log(trouble[i]);
  }
}*/
/*Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
    За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший*/
/*
let trouble = [23,52,85,65,10,12,41,56,17,49];
let double = [];
for (let i = 0; i < trouble.length; i++) {
   double.push(trouble[i]);

}
console.log(double);*/
/*Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
    За допомогою будь-якого циклу скопіювати значення одного масиву в інший.*/

/*let trouble = [23,52,85,65,10,12,41,56,17,49];
let double = [];
for (let i = 0; i < trouble.length; i++) {
    double[i] = (trouble[i]);

}
console.log(double);*/
/*
зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та
*/
let hat =  [2,17,13,6,22,31,45,66,100,-18];
/* перебрати його циклом while*/
/*let i =0;
while (i<hat.length){
    console.log(hat[i]);
    i++;
}*/
/*
 перебрати його циклом for
*/
/* for (let i = 1; i <hat.length; i++) {
     console.log(hat) ;
 }*/

/*
 перебрати циклом for та вивести  числа тільки з непарним індексом
*/
/*for (let i = 1; i < hat.length; i++)
{
    if (hat[i] % 2) {
        console.log(hat[i]);
    }
}*/

/*
 перебрати циклом for та вивести  числа тільки парні  значення
*/

/*for (let i = 0; i < hat.length; i++)
{ if (hat[i]%2===0) {
    console.log(hat[i]);
}}*/
/*
замінити кожне число кратне 3 на слово "okten"
*/
/*for (let i = 0; i < hat.length; i++) {
  if ( hat[i]%3===0) {
      hat [i] = 'okten'
  }
}
console.log(hat);*/
/* вивести масив в зворотньому порядку*/
/*for (let i = hat.length -1; i>= 0 ;i--) {
    console.log( hat[i]);
}*/


/*.створити пустий масив та :
    заповнити його 50 парними числами за допомоги циклу.*/

/*
let numbOne=[];
let numbTwo = [];*/
/*for (let i = 0; i < 50; i++) {
    i%2 === 0 ? numbOne[i]=i : numbTwo[i]=i

}
console.log(numbOne);
console.log(numbTwo);*/
/*
заповнити його 50 непарними числами за допомоги циклу.*/
/*
for (let i = 0; i < 50; i++) {
   numbOne[i]=i*2 ;
   numbTwo[i]=i*2+1 ;

}
console.log(numbOne);
console.log(numbTwo);*/
