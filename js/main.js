// #2
Data types - number.

let - изменяемая переменная.
let number = 5;
number = 10;
console.log(number);

const - неизменяемая переменная.
const sum = 8;
console.log(sum);

data types - string.
всегда пишется в кавычках.
let text = 'Hello';
console.log(text);

let a = 5;
let b = '5';
console.log(a + b);
выводит строку 55

let a = 5; 
let b = 5;
console.log(a + b);
выводит сумму переменных

Логические переменные принимают два значения false/true. 
Удобно использовать при проверке или при сравнении чего-то с чем-то.
let logic = true;
console.log(logic);

Объектные типы данных - массивы и функции.
Могут содержать любые типы данных(число, строку), главное писать через запятую.
Сам масив может содержать в себе массив, даже пустой.
let arr = [6, 3, 'Laptop', []];
console.log(arr);

(4) - это количество элементов в массиве. Если нажать на него, 
мы можем увидеть список с порядковыми номерами каждого элемента.
[6, 3, 'Laptop', Array(0)] в конце вместо пустого массива Array(0), 
это говорит, что в массиве есть пустой массив и его длина равна 0, 
потому что в нем ничего нет.
let arr = [6, 3, 'Laptop', []];
console.log(arr[0]);

Чтобы вывести какой-то элемент, 
нужно в console.log после имени массива в [указать его порядковый номер]

Data types - object
Чтобы создать объект мы должны объявить его, как const
const obj = {
    name: 'Igor',
    height: 180
}
console.log(obj.name);
// or
console.log(obj['name']);


obj - имя объекта, после точки имя ключа,
которое называется свойством этого объекта 
и чье значение мы хотим получить
Объект отличается от массива тем, 
что имеет ключ(стоит перед :) - значение( после :)


// #3

alert('Hello');

const result = confirm('How are you?');
console.log(result);

const answer =prompt('How old are you?', '');
console.log(answer);

Ответ будет строкой.
Если переменная строка, но в ней есть число, можно перести
в число поставив +prompt(унарный плюс).
Если вводить строку(текст), то из текста число не получить

const answer =+42prompt('How old are you?', '');
console.log(typeof(answer));

typeof ставится, чтобы узнать тип данных


// #4
const name = 'Ian';
console.log('Hi ' + name);

Интерполяция - вместо + используем $ и все записываем
в одних `` кавычках.

const name = 'Ian';
console.log(`Hi ${name}`);

Динамическая генерация ссылок

const user = 'durov';
console.log(`https://vk.com/${user}`);

Существуют операторы:
инкремент - увеличивает число на единицу,
декримент - уменьшает.

let a = 10;
let b = 10;

a--;
b++;
console.log(a, b);

Знаки -- / ++ можно писать до переменной или после нее.
!Но нельзя ставить знаки в console.log(a--, b++) после переменной.
!Сработает только до --a / ++b.

let a = 10;
let b = 10;
console.log(--a, ++b);

С помощью % можно проверить число на четность/нечетность
console.log(5 % 2);

console.log(2*4 == 8);
== оператор нестрогого сравнение,
Так можно сравнить и выведется true/false

console.log(2*4 === '8')
=== оператор строгого сравнения и выведет false,
так как нельзя сравнивать число и строку

Оператор != неравно.
console.log(2*4 != 9);
Чтобы вывести true, когда выражение не равно

const isChecked_1 = true;
const isChecked_2 = true;

console.log(isChecked_1 && isChecked_2);
Убедится, что все действия выполнены используем оперсанд $$
Для этого оператора важно, чтобы оба события были true

const isChecked_1 = true;
const isChecked_2 = true;
console.log(isChecked_1 || isChecked_2);
Для оператора || или важно, чтобы хоть какое-то
значение было true 


// #5 
Условия и циклы в js

const answer = prompt('How old are you?', '');

if (answer >= 18) {
    console.log('Welcome');
} else if (answer < 18) {
    console.log('You are too young!');
} else {
    console.log('Wrong text');
}

Цикл while(переменная а вне цикла)
let a = 1;

while (a < 100) {
    console.log(a);
    a++;
}

Цикл for(переменная в самом цикле)
for (let i = 1; i < 10; i++) {
    console.log(i);
}

Цикл можно использовать, как счетчик, 
чтобы показать что-то определенное кол-во раз.
Условия и циклы можно совмещать между собой.
В цикле можно написать условие и 
определенное условие записать циклу.



// #6
Функции можно переписывать множество раз
В() можно передать что - то функции, а она выполнит действия внутри себя
и выдаст результат
function sayHello() {
    console.log('Hello');
}
sayHello();

function calc(a, b) {
    console.log(a+b);
}
calc(5, 7);

Можно значение функции поместить в переменную - return

let num = 4; 
function calc(a, b) {
    return (a+b+num);
}
calc(5, 7);

let sum = calc(5, 7);
console.log(sum);

Переменные, которые мы создаем внутри функции, 
мы можем использовать только внутри нее(а).
А переменные вне функции(num), мы можем использовать повсеместно

const ray = function(){
    console.log('Hello');
}

Одна из фишек js, что мы можем функцию держать, как переменную 
и такую функцию можно только после ее объявления.
А вот обычные функции - function - использовать можно еще до объявления,
даже если она будет в конце файла, а мы ее вызовем в первой строчке.

Стрелочная функция
const summer = (a, b) => {
    a+b;
};
summer(2, 3);



// #7
Методы и cвойства строк и чисел

const str = 'test';
console.log(str.length);

Тоже самое св-во можно применить к массиву. 
Мы можем текс в const заменить на массив из 3-х чисел
const str = [1, 2, 3];
console.log(str.length);

Можем вывести отдельный элемент массива
или отдельную букву
const str = [1, 2, 3];
console.log(str[2]);

const str = 'text';
console.log(str[2]);

Методы строк и чисел(Их больше, чем свойств)
Их отличие в том, что в конце указываем пустые скобки

Смена регистра текста
const str = 'text';
console.log(str.toUpperCase());

Метод проверки, есть ли кусочек текста в переменной

const str = 'text';
console.log(str.toUpperCase());

Помогает понять с какого символа начинается текст
const str = 'text';
const log = 'hello world'; 

console.log(log.indexOf('world'));
выведет 6, потому что слово начинается с 6 символа

Можно также определить, присутствует ли слово в строчке
const str = 'text';
const log = 'hello'; 

console.log(log.indexOf('world'));
выведет -1, так как слова начинается

Вырезать слово - slice
Такая команда из одного слово вырежит его целиком
const str = 'text';
const log = 'hello world'; 
console.log(log.slice(6));

Можно указать с какого по какое число нужно 
вырезать слово

const str = 'text';
const log = 'hello world'; 
console.log(log.slice(6, 10));

Можно указать и отрицательное значение, 
но порядок будет наоборот

const str = 'text';
const log = 'hello world'; 
console.log(log.slice(6, 10));




// #9
Массивы, методы к ним и их копирование
Push - добавление элемента в конец массива 
const massive = [1, 2, 3];
massive.push(10);
console.log(massive);

Pop - удаление последнего элемента в массиве
const massive = [1, 2, 3];
massive.push(10);
massive.pop();
console.log(massive);

Join - из массива сделать строку
const massive = [1, 2, 3];
massive.push(10);
console.log(massive.join(' ,'));

Клонирование и копирование массивов
const massive = [1, 2, 3];
const massive2 = massive; ссылка на массив, поверхностная копия
console.log(massive, massive2);
massive2.push(5);

Массивы, объекты, функции - сложный тип данных и 
они просто не копируются

Строка, число - простой тип данных

Метод slice возьмет наш массив, разделит на элементы
(в нашем случае на 3 элемента) и заново склеит их в массив, но уже новый
const massive = [1, 2, 3];
const massive2 = massive;
console.log(massive, massive2);

massive2.push(5);
console.log(massive, massive2);

const massive3 = massive.slice();
massive3.push(6);
console.log(massive, massive2, massive3);

const massive2 = [...massive];
massive2.push(2);
console.log(massive, massive2);


Так можно объединить несколько массивов сразу
const a = [1, 2, 3];
const b = [1, 5, 8];
const c = [3, 5, 6];

const sum = [...a, ...b, ...c, 34, 56];
console.log(sum);




























