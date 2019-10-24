// Task 1
// Создайте пустой массив arr1, input.u-1, кнопку button.u-2__push. При нажатии
// кнопки, функция читает содержимое input и добавляет содержимое в массив, после
// чего выводит содержимое массива в div.out-1.

let btn_1 = document.querySelector('.u-1__push');
let arr1 = [];
let div_1 = document.querySelector('.out-1');
let inp_1 = document.querySelector('.u-1'); // продумать возможность ввода цифр
btn_1.onclick = () => {
  if (inp_1.value !== '') {
    arr1.push(inp_1.value);
    div_1.innerHTML = arr1;
    inp_1.value = '';
  }
}

// Task 2
// Добавьте к предыдущему заданию кнопку button.u-2__pop, при нажатии которой, к
// массиву arr1 применяется метод pop, после чего массив выводится в div.out-1

let arr2 = [];
let btnPush_2 = document.querySelector('.u-2__push');
let btnPop_2 = document.querySelector('.u-2__pop')
let inp_2 = document.querySelector('.u-2');// продумать возможность ввода цифр
let div_2 = document.querySelector('.out-2');
btnPush_2.onclick = () => {
  if (inp_2.value !== '') {
    arr2.push(inp_2.value);
    div_2.innerHTML = arr2;
    inp_2.value = '';
  }
}
btnPop_2.onclick = () => {
  if (arr2 !== '') {
    arr2.pop();
    div_2.innerHTML = arr2;
  }
}

// Task 3
// Добавьте к заданию 1 кнопку button.u-3__shift, которая применяет к массиву arr1
// метод shift ( читать за метод shift). После применения shift, массив arr1
// выподится в div.out-1.

let arr3 = [];
let btnPush_3 = document.querySelector('.u-3__push');
let btnShift_3 = document.querySelector('.u-3__shift')
let inp_3 = document.querySelector('.u-3');// продумать возможность ввода цифр
let div_3 = document.querySelector('.out-3');
btnPush_3.onclick = () => {
  if (inp_3.value !== '') {
    arr3.push(inp_3.value);
    div_3.innerHTML = arr3;
    inp_3.value = '';
  }
}
btnShift_3.onclick = () => {
  if (arr3 !== '') {
    arr3.shift();
    div_3.innerHTML = arr3;
  }
}

// Task 4
// Добавьте к заданию 1 кнопку button.u-4__unshift, которая применяет к массиву arr1
// метод unshift ( читать за метод unshift). После применения unshift, массив arr1
// выподится в div.out-1. Надеюсь, вы догадаетесь проверять input на пустоту перед
// применением unshift. Надеюсь, вы это сделали и в первой задаче?

let arr4 = [];
let btnPush_4 = document.querySelector('.u-4__push');
let btnShift_4 = document.querySelector('.u-4__shift')
let inp_4 = document.querySelector('.u-4');// продумать возможность ввода цифр
let div_4 = document.querySelector('.out-4');
btnPush_4.onclick = () => {
  if (inp_4.value !== '') {
    arr4.push(inp_4.value);
    div_4.innerHTML = arr4;
    inp_4.value = '';
  }
}
let btn_4 = document.querySelector('.u-4__unshift');
btn_4.onclick = () => {
  if (inp_4.value !== '') {
    arr4.unshift(inp_4.value);
    div_4.innerHTML = arr4;
    inp_4.value = '';
  }
}

// Task 5
//Обьявите массив arr5, добате два элемента input, в первый пользователь может
// ввести индекс элемента, во второй - количество. Добавьте кнопку, по нажатию на
// которую к массиву arr5 применяется метод splice. Результат применения выводите в
// div.out-5.
// let arr5 = [3,14, 15, 92, 6, 54, 123, 87, 66, 43, 12, 90, 'hello'];

let arr5 = [3, 14, 15, 92, 6, 54, 123, 87, 66, 43, 12, 90, 'hello'];
let btn_5 = document.querySelector('.u-5__splice');
btn_5.onclick = () => {
  let inp5_1 = document.querySelector('.inp-5_1');
  let inp5_2 = document.querySelector('.inp-5_2');
  let div_5 = document.querySelector('.out-5')
  arr5.splice(+inp5_1.value, +inp5_2.value);
  inp5_1.value = '';
  inp5_2.value = '';
  div_5.innerHTML = arr5;
}

// Task 6
// СНапишите функцию funcPush, которая эмулирует работу метода push, функция, по нажатию кнопки:
// 1. читает содержимое input в переменную
// 2. вычисляет длину массива
// 3. присваивает массиву новый элемент, а в качестве индекса указывает длину массива
// 4. Выводит массив на страницу

let arr6 = [];
let btn_6 = document.querySelector('.u-6__push');
let inp_6 = document.querySelector('.inp-6');
btn_6.onclick = function funcPush() {
  if (inp_6.value !== '') {
    let div_6 = document.querySelector('.out-6')
    let indx = arr6.length;
    arr6[indx] = inp_6.value;
    inp_6.value = '';
    div_6.innerHTML = arr6;
  }
}

// Task 7
// Напишите функцию funcPop, которая эмулирует работу метода pop, функция, по
// нажатию кнопки:
// 1. удаляет последний элемент массива
// Выводит массив на страницу

let arr7 = [11, 22, 33, 44, 55, 66, 77, 88, 99];
let btn_7 = document.querySelector('.u-7__pop');
let div_7 = document.querySelector('.out-7');
let k7 = arr7.length - 1;
btn_7.onclick = function funcPop() {
  let str_7 = '';
  delete arr7[k7];
  for (let i = 0; i < arr7.length; i++) {
    if (arr7[i] !== undefined) {
      str_7 += arr7[i] + ' ';
    }
    div_7.innerHTML = str_7;
  }
  k7--;
}

// Task 8
// Напишите функцию funcShift, которая эмулирует работу метода shift, функция, по нажатию кнопки:
// 1. Создает новый массив где нулевым элементом выступает первый элемент исходного
// массива
// Выводит массив на страницу

let arr8 = [11, 22, 33, 44, 55, 66, 77, 88, 99];
let btn_8 = document.querySelector('.u-8__shift');
let div_8 = document.querySelector('.out-8');
let str_8 = '';
let k8 = 0;
btn_8.onclick = function funcShift() {
  arr8[k8];
  if (arr8[k8] !== undefined) {
    str_8 += arr8[k8] + ' ';
  }
  div_8.innerHTML = str_8;
  k8++;
}

// Task 9
// Напишите функцию funcUnShift, которая эмулирует работу метода unshift, функция, по нажатию кнопки:
// 1. читает содержимое input в переменную
// 2. создает новый массив где нулевым элементов задает считанную из input строку
// 3. дописывает остальные значения старого массива в новый
// Выводит массив на страницу

// let arr9_old = [11, 22, 33, 44, 55, 66, 77, 88, 99];

let inp_9 = document.querySelector('.u-9__inp');
let btn_9 = document.querySelector('.u-9__unshift');
let out_9 = document.querySelector('.out-9');
let arr9_old = [11, 22, 33, 44];

btn_9.onclick = function funcShift() {
  let arr9_new = [inp_9.value];
  for (let i = 1; i <= arr9_old.length; i++) {
    arr9_new[i] = arr9_old[i - 1];
  }
  arr9_old = arr9_new;
  out_9.innerHTML = arr9_new;
}


// Task 10
// Создайте массив arr10, примените к массиву метод reverse ( читать за метод
// reverse). После применения reverse, массив arr10 выподится в div.out-10.
// let arr10 = [2,4, 6, 8, 10, 'hello'];

let arr10 = [2, 4, 6, 8, 10, 'hello'];
let out_10 = document.querySelector('.out-10');
arr10.reverse();
out_10.innerHTML = arr10;

// Task 11
// оздайте input.u-11__input и кнопку button.u-11__button. Объявите массив arr11. По
// нажатию на кнопку, читайте содержимое input.u-11__input в переменную u11. Потом
// примените к массиву arr11 метод indexOf ( читать за метод indexOf). Результат
// применения indexOf выводите на страницу в div.out-11. Последовательно проверьте
// программу вводя в input числа 1, 3, 5, 12.
// let arr11 = [0, 2, 3, 7, 8, 5, 11];

let inp_11 = document.querySelector('.u-11__inp');
let btn_11 = document.querySelector('.u-11__button');
let out_11 = document.querySelector('.out-11');
function func_11() {
  let arr11 = [0, 2, 3, 7, 8, 5, 11];
  let u11 = +inp_11.value;
  out_11.innerHTML = arr11.indexOf(u11);
}
btn_11.onclick = () => func_11();

// Task 12
// Напишите функцию funcIndexOf, которая эмулирует работу метода indexOf.
// Программа должна: читаеть содержимое input в переменную
// Запускать цикл по массиву и сравнивать каждый элемент массива с введенным.
// Если совпадение есть - останавливать цикл и выводить номер индекса на котором
// произошло совпадение.
// Если совпадения нет выводить -1.

let inp_12 = document.querySelector('.u-12__inp');
let btn_12 = document.querySelector('.u-12__button');
let out_12 = document.querySelector('.out-12');
function func_12() {
  let arr12 = [11, 22, 33, 77, 88, 55, 44];
  for (let i = 0; i < arr12.length; i++) {
    let u12 = +inp_12.value;
    if (u12 == arr12[i]) {
      return out_12.innerHTML = i;
    }
    else {
      out_12.innerHTML = '-1';
    }
  }
}
btn_12.onclick = () => func_12();

// Task 13
// Напишите функцию funcReverse, которая эмулирует работу метода reverse. Программа
// должна:
// 1. Создать новый пустой массив
// 2. Перебирать старый массив с конца (массив создайте сами)
// 3. По очереди по элементу присвоить значения в новый массив.
// 4. Вывести новый массив.

let arr13_old = [11, 22, 33, 44, 55, 66, 77, 88, 99];
let arr13_new = [];
let out_13 = document.querySelector('.out-13');
for (i = 0; i <= arr13_old.length - 1; i++) {
  arr13_new[i] = arr13_old[(arr13_old.length - 1) - i];
}
out_13.innerHTML = arr13_new;

// Task 14
// Создайте инпут, куда пользователь может ввести число элементов в массиве.
// Создайте функцию, которая прочитает введенное число и создаст массив такой длины,
// причем каждый элемент - это случайное число от 0 до 100. Массивы выведите на
// страницу.

let inp_14 = document.querySelector('.u-14__inp');
let btn_14 = document.querySelector('.u-14__button');
let out_14 = document.querySelector('.out-14');
function func_14() {
  let arr14 = [];
  for (let i = +inp_14.value; i > 0; i--) {
    arr14[i - 1] = Math.floor(Math.random() * 100)
  }
  out_14.innerHTML = arr14;
}
btn_14.onclick = () => func_14();

// Task 15
// Создайте массив arr15. Напишите функцию, которая создаст новый массив, в который
// входят только четные элементы массива arr15 (элементы с четным индексом).
// Выведите на экран.

let arr15_old = [0, 11, 22, 33, 44, 55, 66, 77, 88, 99];
let arr15_new = [];
let out_15 = document.querySelector('.out-15');
let k15 = 0;
for (i = 0; i < arr15_old.length; i++) {
  if (i % 2 == 0) {
    arr15_new[k15] = arr15_old[i];
    k15++;
  }
}
out_15.innerHTML = arr15_new;


// Task 16
// Создайте button.u-16__button. Объявите массив arr16_1 и arr16_2. По нажатию на
// кнопку примените к массивам метод concat ( читать за метод concat). Результат
// применения concat выводите на страницу в div.out-16.1
// let arr16_1 = [3, 5, 7 ];
// let arr16_2 = [2, 4, 6 ];

let arr16_1 = [3, 5, 7];
let arr16_2 = [2, 4, 6];
let out_16 = document.querySelector('.out-16');
let btn_16 = document.querySelector('.u-16__button');
btn_16.onclick = () =>
  out_16.innerHTML = arr16_1.concat(arr16_2);


// Task 17
// СНапишите функцию funcConcat, которая эмулирует работу метода concat. Программа
// должна:
// 1. Перебирает второй массив и его элементы добавляет в первый массив.
// 2. Выводит массив на страницу.

let arr17_1 = [3, 5, 7];
let arr17_2 = [2, 4, 6];

let out_17 = document.querySelector('.out-17');
function func_17() {
  let n = arr17_1.length;
  for (let i = 0; i < arr17_2.length; i++) {
    arr17_1[n + i] = arr17_2[i];
  }
  out_17.innerHTML = arr17_1;
}
func_17();


// Task 18
// Создайте button.u-18__button и input.u-18__input. Объявите массив arr18 . По
// нажатию на кнопку примените к массивам метод includes, который проверяет есть ли
// в массиве значение введенное в input. ( читать за метод includes). Результат
// применения includes выводите на страницу в div.out-18.
// let arr18 = [3, 5, 7, 11, 12, 13, 14 ];

let arr18 = [3, 5, 7, 11, 12, 13, 14];
let inp_18 = document.querySelector('.u-18__input');
let btn_18 = document.querySelector('.u-18__button');
let out_18 = document.querySelector('.out-18');
function func_18() {
  out_18.innerHTML = arr18.includes(+inp_18.value);
}
btn_18.onclick = () => func_18();

// Task 19
// Напишите функцию funcIncludes, которая эмулирует работу метода includes. Программа должна:
// Перебирает второй массив и сравнивать если введенный элемент совпал с текущим -
// прекращать работу цикла и выводить true.
// Если совпадений нет - false.

let arr19 = [3, 5, 7, 11, 12, 13, 14];
let inp_19 = document.querySelector('.u-19__input');
let btn_19 = document.querySelector('.u-19__button');
let out_19 = document.querySelector('.out-19');
function funcIncludes() {
  for (let i = 0; i < arr19.length; i++) {
    if (arr19[i] == +inp_19.value) {
      return out_19.innerHTML = true;
    }
    else {
      out_19.innerHTML = false;
    }
  }
}
btn_19.onclick = () => funcIncludes();

// Task 20
// Объявите массив arr20. Создайте кнопку, по нажатию которую к массиву применяется
// метод join ( читать за метод join). Результа выведите на страницу.

let arr20 = [11, 22, 33, 44, 55, 66, 77, 88, 99];
let out_20 = document.querySelector('.out-20');
let btn_20 = document.querySelector('.u-20__button');
btn_20.onclick = () => {
  let a = '';
  a = arr20.join('-');
  out_20.innerHTML = a;
}
