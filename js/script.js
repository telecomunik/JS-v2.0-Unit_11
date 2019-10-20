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
    console.log(arr1); // удалить перед сдачей
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
    console.log(arr2);// удалить перед сдачей
  }
}
btnPop_2.onclick = () => {
  if (arr2 !== '') {
    arr2.pop();
    div_2.innerHTML = arr2;
    console.log(arr2);// удалить перед сдачей
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
    console.log(arr3);// удалить перед сдачей
  }
}
btnShift_3.onclick = () => {
  if (arr3 !== '') {
    arr3.shift();
    div_3.innerHTML = arr3;
    console.log(arr3);// удалить перед сдачей
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
    console.log(arr4);// удалить перед сдачей
  }
}
let btn_4 = document.querySelector('.u-4__unshift');
btn_4.onclick = () => {
  if (inp_4.value !== '') {
    arr4.unshift(inp_4.value);
    div_4.innerHTML = arr4;
    inp_4.value = '';
    console.log(arr4);
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
  console.log(arr5);
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
    console.log(arr6);
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
  console.log(arr7); //удалить перед сдачей
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
  console.log(arr8); //удалить перед сдачей
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

// Task 10
// Создайте массив arr10, примените к массиву метод reverse ( читать за метод
// reverse). После применения reverse, массив arr10 выподится в div.out-10.
// let arr10 = [2,4, 6, 8, 10, 'hello'];

// Task 11
// оздайте input.u-11__input и кнопку button.u-11__button. Объявите массив arr11. По
// нажатию на кнопку, читайте содержимое input.u-11__input в переменную u11. Потом
// примените к массиву arr11 метод indexOf ( читать за метод indexOf). Результат
// применения indexOf выводите на страницу в div.out-11. Последовательно проверьте
// программу вводя в input числа 1, 3, 5, 12.

// let arr11 = [0, 2, 3, 7, 8, 5, 11];

// Task 12
//Напишите функцию funcIndexOf, которая эмулирует работу метода indexOf. Программа
// должна:
// читает содержимое input в переменную
// Запускать цикл по массиву и сравнивать каждый элемент массива с введенным.
// Если совпадение есть - останавливать цикл и выводить номер индекса на котором
// произошло совпадение.
// Если совпадения нет выводить -1.

// Напишите функцию funcReverse, которая эмулирует работу метода reverse. Программа
// должна:
// 1. Создать новый пустой массив
// 2. Перебирать старый массив с конца (массив создайте сами)
// 3. По очереди по элементу присвоить значения в новый массив.
// 4. Вывести новый массив.

// Task 14
// Создайте инпут, куда пользователь может ввести число элементов в массиве.
// Создайте функцию, которая прочитает введенное число и создаст массив такой длины,
// причем каждый элемент - это случайное число от 0 до 100. Массивы выведите на
// страницу.

// Task 15
// Создайте массив arr15. Напишите функцию, которая создаст новый массив, в который
// входят только четные элементы массива arr15 (элементы с четным индексом).
// Выведите на экран.

// Task 16
// Создайте button.u-16__button. Объявите массив arr16_1 и arr16_2. По нажатию на
// кнопку примените к массивам метод concat ( читать за метод concat). Результат
// применения concat выводите на страницу в div.out-16.1
// let arr16_1 = [3, 5, 7 ];
// let arr16_2 = [2, 4, 6 ];

// Task 17
// СНапишите функцию funcConcat, которая эмулирует работу метода concat. Программа
// должна:
// 1. Перебирает второй массив и его элементы добавляет в первый массив.
// 2. Выводит массив на страницу.

// Task 18
// Создайте button.u-18__button и input.u-18__input. Объявите массив arr18 . По
// нажатию на кнопку примените к массивам метод includes, который проверяет есть ли
// в массиве значение введенное в input. ( читать за метод includes). Результат
// применения includes выводите на страницу в div.out-18.
// let arr16_1 = [3, 5, 7, 11, 12, 13, 14 ];

// Task 19
// Напишите функцию funcIncludes, которая эмулирует работу метода includes. Программа должна:
// Перебирает второй массив и сравнивать если введенный элемент совпал с текущим -
// прекращать работу цикла и выводить true.
// Если совпадений нет - false.

// Task 20
// Объявите массив arr20. Создайте кнопку, по нажатию которую к массиву применяется
// метод join ( читать за метод join). Результа выведите на страницу.