// // #2
// Data types - number.

// let - изменяемая переменная.
// let number = 5;
// number = 10;
// console.log(number);

// const - неизменяемая переменная.
// const sum = 8;
// console.log(sum);

// data types - string.
// всегда пишется в кавычках.
// let text = 'Hello';
// console.log(text);

// let a = 5;
// let b = '5';
// console.log(a + b);
// выводит строку 55

// let a = 5; 
// let b = 5;
// console.log(a + b);
// выводит сумму переменных

// Логические переменные принимают два значения false/true. 
// Удобно использовать при проверке или при сравнении чего-то с чем-то.
// let logic = true;
// console.log(logic);

// Объектные типы данных - массивы и функции.
// Могут содержать любые типы данных(число, строку), главное писать через запятую.
// Сам масив может содержать в себе массив, даже пустой.
// let arr = [6, 3, 'Laptop', []];
// console.log(arr);

// (4) - это количество элементов в массиве. Если нажать на него, 
// мы можем увидеть список с порядковыми номерами каждого элемента.
// [6, 3, 'Laptop', Array(0)] в конце вместо пустого массива Array(0), 
// это говорит, что в массиве есть пустой массив и его длина равна 0, 
// потому что в нем ничего нет.
// let arr = [6, 3, 'Laptop', []];
// console.log(arr[0]);

// Чтобы вывести какой-то элемент, 
// нужно в console.log после имени массива в [указать его порядковый номер]

// Data types - object
// Чтобы создать объект мы должны объявить его, как const
// const obj = {
//     name: 'Igor',
//     height: 180
// }
// console.log(obj.name);
// // or
// console.log(obj['name']);


// obj - имя объекта, после точки имя ключа,
// которое называется свойством этого объекта 
// и чье значение мы хотим получить
// Объект отличается от массива тем, 
// что имеет ключ(стоит перед :) - значение( после :)


// // #3

// alert('Hello');

// const result = confirm('How are you?');
// console.log(result);

// const answer =prompt('How old are you?', '');
// console.log(answer);

// Ответ будет строкой.
// Если переменная строка, но в ней есть число, можно перести
// в число поставив +prompt(унарный плюс).
// Если вводить строку(текст), то из текста число не получить

// const answer =+42prompt('How old are you?', '');
// console.log(typeof(answer));

// typeof ставится, чтобы узнать тип данных


// // #4
// const name = 'Ian';
// console.log('Hi ' + name);

// Интерполяция - вместо + используем $ и все записываем
// в одних `` кавычках.

// const name = 'Ian';
// console.log(`Hi ${name}`);

// Динамическая генерация ссылок

// const user = 'durov';
// console.log(`https://vk.com/${user}`);

// Существуют операторы:
// инкремент - увеличивает число на единицу,
// декримент - уменьшает.

// let a = 10;
// let b = 10;

// a--;
// b++;
// console.log(a, b);

// Знаки -- / ++ можно писать до переменной или после нее.
// !Но нельзя ставить знаки в console.log(a--, b++) после переменной.
// !Сработает только до --a / ++b.

// let a = 10;
// let b = 10;
// console.log(--a, ++b);

// С помощью % можно проверить число на четность/нечетность
// console.log(5 % 2);

// console.log(2*4 == 8);
// == оператор нестрогого сравнение,
// Так можно сравнить и выведется true/false

// console.log(2*4 === '8')
// === оператор строгого сравнения и выведет false,
// так как нельзя сравнивать число и строку

// Оператор != неравно.
// console.log(2*4 != 9);
// Чтобы вывести true, когда выражение не равно

// const isChecked_1 = true;
// const isChecked_2 = true;

// console.log(isChecked_1 && isChecked_2);
// Убедится, что все действия выполнены используем оперсанд $$
// Для этого оператора важно, чтобы оба события были true

// const isChecked_1 = true;
// const isChecked_2 = true;
// console.log(isChecked_1 || isChecked_2);
// Для оператора || или важно, чтобы хоть какое-то
// значение было true 


// // #5 
// Условия и циклы в js

// const answer = prompt('How old are you?', '');

// if (answer >= 18) {
//     console.log('Welcome');
// } else if (answer < 18) {
//     console.log('You are too young!');
// } else {
//     console.log('Wrong text');
// }

// Цикл while(переменная а вне цикла)
// let a = 1;

// while (a < 100) {
//     console.log(a);
//     a++;
// }

// Цикл for(переменная в самом цикле)
// for (let i = 1; i < 10; i++) {
//     console.log(i);
// }

// Цикл можно использовать, как счетчик, 
// чтобы показать что-то определенное кол-во раз.
// Условия и циклы можно совмещать между собой.
// В цикле можно написать условие и 
// определенное условие записать циклу.



// // #6
// Функции можно переписывать множество раз
// В() можно передать что - то функции, а она выполнит действия внутри себя
// и выдаст результат
// function sayHello() {
//     console.log('Hello');
// }
// sayHello();

// function calc(a, b) {
//     console.log(a+b);
// }
// calc(5, 7);

// Можно значение функции поместить в переменную - return

// let num = 4; 
// function calc(a, b) {
//     return (a+b+num);
// }
// calc(5, 7);

// let sum = calc(5, 7);
// console.log(sum);

// Переменные, которые мы создаем внутри функции, 
// мы можем использовать только внутри нее(а).
// А переменные вне функции(num), мы можем использовать повсеместно

// const ray = function(){
//     console.log('Hello');
// }

// Одна из фишек js, что мы можем функцию держать, как переменную 
// и такую функцию можно только после ее объявления.
// А вот обычные функции - function - использовать можно еще до объявления,
// даже если она будет в конце файла, а мы ее вызовем в первой строчке.

// Стрелочная функция
// const summer = (a, b) => {
//     a+b;
// };
// summer(2, 3);



// // #7
// Методы и cвойства строк и чисел

// const str = 'test';
// console.log(str.length);

// Тоже самое св-во можно применить к массиву. 
// Мы можем текс в const заменить на массив из 3-х чисел
// const str = [1, 2, 3];
// console.log(str.length);

// Можем вывести отдельный элемент массива
// или отдельную букву
// const str = [1, 2, 3];
// console.log(str[2]);

// const str = 'text';
// console.log(str[2]);

// Методы строк и чисел(Их больше, чем свойств)
// Их отличие в том, что в конце указываем пустые скобки

// Смена регистра текста
// const str = 'text';
// console.log(str.toUpperCase());

// Метод проверки, есть ли кусочек текста в переменной

// const str = 'text';
// console.log(str.toUpperCase());

// Помогает понять с какого символа начинается текст
// const str = 'text';
// const log = 'hello world'; 

// console.log(log.indexOf('world'));
// выведет 6, потому что слово начинается с 6 символа

// Можно также определить, присутствует ли слово в строчке
// const str = 'text';
// const log = 'hello'; 

// console.log(log.indexOf('world'));
// выведет -1, так как слова начинается

// Вырезать слово - slice
// Такая команда из одного слово вырежит его целиком
// const str = 'text';
// const log = 'hello world'; 
// console.log(log.slice(6));

// Можно указать с какого по какое число нужно 
// вырезать слово

// const str = 'text';
// const log = 'hello world'; 
// console.log(log.slice(6, 10));

// Можно указать и отрицательное значение, 
// но порядок будет наоборот

// const str = 'text';
// const log = 'hello world'; 
// console.log(log.slice(6, 10));



// // #8
// Callback функции и зачем они нужны - эти функции можно
// вызывать только в тот момент, 
// когда предыдущая функция завершила свою работу.
//  function first () {
//     console.log('Hello');    
//  }
//  function second () {
//     console.log('world');    
//  }
//  first();
//  second();
//  Выводит оба слова.
//  Можно заложить условие срабатывания второй функции-
//  нужно в качестве аргумента указать callback(как домино) в первой функции
//  и в этой же функции в конце тела вызвать ее(как обычно).
//  function first (callback) {
//     console.log('Hello');   
//     callback(); 
//  }
//  function second () {
//     console.log('world');    
//  }
//  first(second);

//  Если нужно удалить св-во из object,
//  нужно указать delete object.св-во. 
//  const object = {
//     name: 'Ivan',
//     age: 18
//  }
//  delete object.name;
//  console.log(object);

// Переборы в объектах. Объекты, их св-ва и возможности
// const object = {
//     name: 'Ivan',
//     age: 18,
//     height: 180,
//     weigth: 70
//  }
//  for (let key in object) {
//     console.log(`Свойство ${key} имеет значение${object[key]}`);
//  }
//  console.log(object);

//  Можно получить все ключи объекта
//  const object = {
//     name: 'Ivan',
//     age: 18,
//     height: 180,
//     weigth: 70
//  }
//  for (let key in object) {
//     console.log(`Свойство ${key} имеет значение${object[key]}`);
//  }
//  console.log(Object.keys(object).length);

// Деструктуризация - применяется, если нужно вытащить из object
// какие-то данные и потом использовать в коде, но не прибегать 
// к постоянному вызову объекта.
// const {name, age} = object;
// console.log(name, age);



// // #9
// Массивы, методы к ним и их копирование
// Push - добавление элемента в конец массива 
// const massive = [1, 2, 3];
// massive.push(10);
// console.log(massive);

// Pop - удаление последнего элемента в массиве
// const massive = [1, 2, 3];
// massive.push(10);
// massive.pop();
// console.log(massive);

// Join - из массива сделать строку
// const massive = [1, 2, 3];
// massive.push(10);
// console.log(massive.join(' ,'));

// Клонирование и копирование массивов
// const massive = [1, 2, 3];
// const massive2 = massive; ссылка на массив, поверхностная копия
// console.log(massive, massive2);
// massive2.push(5);

// Массивы, объекты, функции - сложный тип данных и 
// они просто не копируются

// Строка, число - простой тип данных

// Метод slice возьмет наш массив, разделит на элементы
// (в нашем случае на 3 элемента) и заново склеит их в массив, но уже новый
// const massive = [1, 2, 3];
// const massive2 = massive;
// console.log(massive, massive2);

// massive2.push(5);
// console.log(massive, massive2);

// const massive3 = massive.slice();
// massive3.push(6);
// console.log(massive, massive2, massive3);

// const massive2 = [...massive];
// massive2.push(2);
// console.log(massive, massive2);

// Так можно объединить несколько массивов сразу
// const a = [1, 2, 3];
// const b = [1, 5, 8];
// const c = [3, 5, 6];

// const sum = [...a, ...b, ...c, 34, 56];
// console.log(sum);


// #10 
// ООП - объектно-ориентированное програмирование
// Прототип - общее понятие, что объединяет, что есть у всех
// const sedan = {
//     color: 'grey'
// }

// Подкатегория
// const bmw = {
//     enginePower: 200
// }
// const toyota = {
//     enginePower: 120
// }

// Object.setPrototypeOf(bmw, sedan);
// Object.setPrototypeOf(toyota, sedan);
// console.log(bmw.color);
// console.log(toyota.color);

// Object bmw унаследовал св-во color у sedan 


// // #11
// Динамическая типизация - преобразование переменных 
// из одного типа данных в другой
// 1)перевод переменной num в string
// let num = 10;
// console.log(num + '');

// 2)склеивание num с px
// let num = 10;
// console.log(num + 'px');

// 3)перевод строки '15' в число
// console.log(+'15'); унарный + перед кавычками

// 4)убрать px можно с помощью parseInt
// console.log(parseInt('10px', 10));

// Все, что пользовптель вводит на сайте,
// приходит к нам в виде string

// // #12
// querySelector - Получение элементов и взаимодействие с ними
// Получение элемента по id
// const box = document.querySelector('#box');
// console.log(box);

// Получение элемента по тегу
// const button = document.querySelector('button');
// console.log(button);

// Если на странице несколько элементов одинаковых 
// по классу или по тэгу, нужно использовать 
// querySelectorAll - мы получим несколько переменных сразу и у нас 
// появится возможность выводить тот элемент, 
// который нужен(выводим в [])
// const button = document.querySelectorAll('button');
// console.log(button[1]);

// Получение элемента по классу
// const circle = document.querySelector('.circle');
// console.log(circle);
// Это псевдомассив

// Действия над элементами
// Смена стилей
// box.style.height = '200px';

// box.style.backgroundColor = 'grey';

// Если есть несколько стилей,которыми
// хотите наделить элемент, 
// то лучше использовать cssText
// box.style.cssText = 'height: 200px; background-color: grey;';

// Можно добавлять элементы на страницу
// const div = document.createElement('div');
// div.classList.add('button-red');
// document.body.append(div); Элемент добавится в конце кода

// const div = document.createElement('div');
// div.classList.add('button-red');
// document.body.prepend(div); 
// Элемент добавится в начале кода
// Таким образом можно создать пустые элементы

// innerHTML - помогает наполнить наш элемент кодом
// dispatchEvent.innerHTML = '<h1>Hello</h1>'

// Можно удалять элементы со страницы
// div.remove();



// #13
// События и их обработчики
// const button = document.querySelector('button');
// const link = document.querySelector('.link');
// const buttons = document.querySelectorAll('button');

// buttons.forEach(item => {
//     item.addEventListener('click', (event) => {
//         event.targer.remove();
//     });
// });

// Чтобы функция сработала только один раз
// buttons.forEach(item => {
//     item.addEventListener('click', (event) => {
//         event.targer.remove();
//     }, {once: false});
// });

// mouseenter - кнопка исчезает при соприкосновении с курсором
// button.addEventListener('mouseenter', (item) => {
//     console.log('hello');
//     item.target.remove();
// });


// preventDefaul - позволяет, чтобы ссылка никуда не переходила
// link.addEventListener('click', (event) => {
//     event.preventDefault();
//     console.log('Hello');
// });

// #14
// Таймер
// const  timer = setTimeout(function() {
//     console.log('Прошло 2 секунды');
// }, 2000);

// function logger() {
//     console.log('Прошло 5 секунд');
// }
// const timerLogger =  setTimeout(logger, 5000);

// Отключить таймер
// clearInterval(timerLogger);

// Чтобы таймер работал интервально, меняем const на let
// let timerLogger =  setTimeout(logger, 5000);
// timerLogger = setInterval(logger, 2000);

// #15
// Функции-конструкторы
// Имя функции с заглавной буквы
// По деталькам собираем функцию,
// чтобы потом запустить новый объект
// function User(name, id, age) {
//     this.name = name;
//     this.id = id;
//     this.age = age;
//     this.admin = false;
//     this.hello = function() {
//         console.log(`Hello ${this.name}`);
//     };
// }

// const igor = new User('Igor', 13, 18);
// console.log(igor.hello());

// User.prototype.exit = function() {
//     console.log(`Goodbye ${this.name}`);
// };
// console.log(igor);

// Нужны для создания новых однотипных объектов,
// новых пользователей сайта.


// // Operators
// // 1. Arithmetic (+ - / * % ++ -- **)

// // ++ Increment (+1)
// // -- Decrement (-1)
// const a = 10;
// const b = 5;
// let c = 1;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a ** b); // возведение в степень, а возводим в степень b
// console.log(a % b);

// // 2. Приоритеты арифметики

// // 3. + for string
// console.log(5 + 5); // 10
// console.log('5' + '5'); // 55

// // 4. Assignment - Присваивания(= += -= /= *=)
// let z = 0;
// z = z + 1;// same with -
// z += 1;   //


// // 5. Comparison - сравнения(== != === !== > >= < <=)

// // === по значению и типу
// // == по значению(но лучше не использовать-устаревшее)

// // 6. Unary - унарные(+ -)
// console.log(+'5');    // unary + changes the string in the number
// console.log(+'5' + 5);//

// const z = -5;   // unary - reverses the number 
// console.log(-z);// 

// // 7. Logic (&& || !)


// // 8. in
// const obj = {
//     name: 'Alex',// check obj have key or no
//     age: 51,
// };
// console.log('age' in obj);

// BOOK'S TASKS

// alert('I am JavaScript!');

// let userName = prompt("What is your name?", "");

// alert(userName); 

// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);

// alert(+a + +b); // 12

// let company = prompt('Какое «официальное» название JavaScript?')

// if (company == 'ECMAScript') {
//     alert('Верно!')
// } else {
//     alert('Не знаете? ECMAScript!');
// }


// let a = prompt('Enter your number', 0);

// if (a > 0) {
//    alert(1)
// } else if (a < 0) {
//     alert(-1)
// }if (a == 0) {
//     alert(0)
// }


// let a = prompt('Enter your number');
// let b = prompt('Enter your number')
// let result = (a + b < 4) ? 
// 'Мало' : 'Много'
// alert(result);

// result = (a + b < 4) ? 'Мало' : 'Много'; // textbook solution


// let message = (login == 'Emploee') ? 'Hi' :
// (login == 'Director') ? 'Hello' :
// (login == '') ? 'No login' : '';

// let message = (login == 'Сотрудник') ? 'Привет' : // textbook solution
//   (login == 'Директор') ? 'Здравствуйте' :
//   (login == '') ? 'Нет логина' : '';


// if (age >= 14 && age <= 90);
// alert(age);
// if (age < 14 || age > 90);
// alert(age);

// Выполнится.
// Результат -1 || 0 = -1, в логическом контексте true
// if (-1 || 0) alert( 'first' );

// Не выполнится
// -1 && 0 = 0,  в логическом контексте false
// if (-1 && 0) alert( 'second' );

// Выполнится
// оператор && имеет больший приоритет, чем ||
// так что -1 && 1 выполнится раньше
// вычисления: null || -1 && 1  ->  null || 1  ->  1
// if (null || -1 && 1) alert( 'third' );

// __________________________________________

// let userName = prompt("Кто там?", '');
// if (userName === 'Админ') {
//   let pass = prompt('Пароль?', '');
//   if (pass === 'Я главный') {
//     alert( 'Здравствуйте!' );
//   } else if (pass === '' || pass === null) {
//     alert( 'Отменено' );
//   } else {
//     alert( 'Неверный пароль' );
//   }
// } else if (userName === '' || userName === null) {
//   alert( 'Отменено' );
// } else {
//   alert( "Я вас не знаю" );
// }

// _____________________________________

// const number = +prompt('Enter a number between 0 and 3', '');
// switch(number) {
//   case 0:
//     alert('You entered 0');
//     break;
//   case 1:
//     alert('You entered 1');
//     break;    
//   case 2:
//   case 3:  
//     alert('You entered 2, and maybe 3');
//     break;
// }

// __________________________________________

// let browser = prompt('What browser do you use?', '');
// if (browser == "Edge") {
//   alert("You've got the Edge!");
// } else if (browser == "Chrome" 
// || browser == "Firefox" 
// || browser == "Safari" 
// || browser == "Opera") {
//   alert("Okay we support these browsers too");
// } else {
//   alert("We hope that this page looks ok!");
// }

// ____________________________________

// Оба варианта функций работают одинаково, отличий нет.
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     // ...
//     return confirm('Родители разрешили?');
//   }
// }

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   }
//   // ...
//   return confirm('Родители разрешили?');
// }

// ____________________________________

// function checkAge(age) {
//   return (age > 18) ? true : confirm('Родители разрешили?');
// }

// function checkAge(age) {
//   return (age > 18) || confirm('Родители разрешили?');
// }

// _________________________________________

// Same function
// function min(a,b) {
//   return(a < b) ? a : b;
// }
// alert(min(-21, 5));

// function min(a, b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// _____________________________________________

// Same
// 1 строка: создаешь функцию pow, которая принимает аргументы x и n
// 2 строка: создаешь переменную result и тут же присваиваешь ей значение x
// 4 строка: с помощью цикла for, в котором итерации повторяются от 1 до числа n не включительно.
// 5 строка: умножение result на x. Это действие повторяется столько же, сколько происходит итераций.
// 8 строка: функция возращает результат.
// function pow(x, n) {
//   let result = x;

//   for (let i = 1; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

// let x = prompt("x?", '');
// let n = prompt("n?", '');

// if (n < 1) {
//   alert(`Степень ${n} не поддерживается, используйте натуральное число`);
// } else {
//   alert( pow(x, n) );
// }

// ________________________________________-













    


















































