// Выражение 
// Функций
// Объект   
// Практический все сущности в JavaScript это - объекты. Объект - набор свойств "Имя(Ключ): Значение"

// Массив - это объект
// Функция - это объект
// Число - это объект*   ведут себя как объекты    (Примитивные значение)
// Строка - это объект*  ведут себя как объекты    (Примитивные значение)

// console.log('Hello world');  - вывод в консоль   console - объект. log - метод. Точка - синтаксис Js (точечная запись) Скобки - вызов метода, внутри это аргумент

// Выражение всегда возвращает значение

// Имена переменных
// 1. PascalCase - типы и классы
// 2. DB_PASSWORD - Значение извесный до запуска приложения и не меняются 
// 3. camelCase - Все остальные переменные


//                                           Ссылочный тип

// const objectA = {
//   a: 10,
//   b: true
// }

// const copyOfA = objectA

// copyOfA.c = 'abc'
// objectA.d = 'Абдулла'
// console.log(copyOfA, objectA);




//                               Статическая и динамическая типизация


// String a = 'abc'
// Int b = 10
// Статическую типизацию нельзя переорпеделить


// a = 'abc' // String
// a = 10    // Number
// JavaScript Динамический типизируемый объект
      // Динамическая типизация в JS


// function abc() {
//   console.log('Hey there');
// }

// abc()
// abc = 10
// a() // Error

// const - позволяет предотвратить возможные проблемы, связанные с динамической типизацией



//                                        Объекты



// const myCity = {
//   city: 'New York',
//   popular: true,
//   country: 'USA'
// }

// myCity.name = 'Abdu'
// myCity['age'] = 26

// const countryPropertyName = 'countryTwo'
// myCity[countryPropertyName] = 'Kz'

// console.log(myCity);

// const myCity = {
//     city: 'New York',
//     info: {
//       isPopular: true,
//       country: 'USA'
//     }
//   }

// const name = 'Abdu'
// const postsQty = 23

// const userProfile = {
//   name: name,
//   postsQty: postsQty,
//   hasSignedAgreement: false
// }

// Метод - свойство объекта, значение которого - функция






//                        Избежать мутаций


// Вариант 1
// const person = {
//   name: "Bob",
//   age: 25
// }

// const personTwo = Object.assign({}, person)
// Если у объекта есть вложенные объекты, то ссылки на них сохраняются


// personTwo.age = 27
// console.log(person);
// console.log(personTwo);

// Вариант 2

// const personThree = {
  // ...person
  // ... - оператор разделения объекта на свойства
// }
// Если у объекта есть вложенные объекты, то ссылки на них сохраняются
// personThree.name = 'aKabyl'

// console.log(person, personThree);
// Вариант 3 
// const personFour = JSON.parse(JSON.stringify(person))
// personFour.name = 'Alice'






//                                        FUNCTION

/*

let a = 5
let b = 4

function sum(a, b){
  const c = a + b
  console.log(c);
}
sum(a, b)

*/

/* Функция может быть:
    1.  Именованной
    2.  Присвоена переменной 
    3.  Анонимной
    4.  аргументом при вызове другой функций 
    5.  значением свойства (метода) объекта
*/
// const personOne = {
//   name: 'Abdu',
//   age: 26
// }

// function increasePersonAge(person) {
//   person.age += 1
//   return person
// }

// increasePersonAge(personOne)
// console.log(personOne);
// Внутри функций не рекомендуется мутировать внешние объекты

// function increasePersonAge(person) {
//   const updatePerson = Object.assign({}, person)
//   updatePerson.age +=1
//   return updatePerson
// }

// const updatePersonOne = increasePersonAge(personOne)
// console.log(personOne);
// console.log(updatePersonOne);

/*
Callback function - в теле одной функций вызывает другую функцию
*/
// function anotherFunction() {
//   // Действия ...
// }
// function fnWithCallback(callbackFunction){
//   callbackFunction()
// }
// fnWithCallback(anotherFunction)

/*
function printMyName(){
  console.log('Abdu');
}
setTimeout(printMyName, 1000)


                              Правила роботы с Функциями

1. Называть функций исходя из выполняемых задач
2. Одна функция должна выполнять одну задачу
3. Не рекомендуется изменять внешние относительно функций переменные  

*/




//                                        Области видимости

// let a
// let b

// function myFn(){
//   let b = 22;
//   a = 33
//   b = true
//   console.log(b);
// }

// myFn()
// console.log(a);
// console.log(b);


// const a = 5;
// function myFn(){
//   function innerFn(){
//     console.log(a);
//   }
//   innerFn()
// }
// myFn()

// 'use strict'      -- запрещает использование необъявленных переменных



//                                        Операторы

/*

Унарные и Бинарные 
Операнды
Инфиксная, Префиксная и Постфиксные записи

*/

/*
    Арифмитические
      +
      -
      *
      /
    Сравнение
      ===      - Равно
      !==      - Неравно
      <=       - меньше или равно
      >=       - больше или равно
    Логические
      !        - Не
      &&       - И
      ||       - Или     
    Присваивание
      =

    Текстовые операторы
      typeof              - Проверить тип того или иного значение
      instanceof          - Проверка принадлежности объекта тому или иному классу
      new                 - 
      delete              - Удалить свойства в объекте
*/


// a = 10    a это операнд и значение 10 тоже является операндом
//  У Унарных операторов всегда один операнд (аргумент)
/*

a++
+a
delete obj.a
typeof a
new Object()

*/

// У Бинарных операторов всегда два операнда (аргумента)

/*

Инфиксная запись  операторы находятся между операндами
  a + b
  a = b
Префиксная запись  операторы находятся в начале
  typeof a
  ++a
Постфиксная запись операторы находятся за операндом
  a++
  myFunction()

*/

/* Ложные значение    
    false
    0
    ''
    undefined
    null

*/


// let b = 10
// let c = ''
// b && console.log('Выполнено!');
// c || console.log('Выполнено!');

// const button = {
//   width: 200,
//   text: 'Buy'
// }
// const redButton = {
//   ...button,
//   color: 'red'
// }

// console.log(button);
// console.log(redButton);
// console.table(redButton)

// const hello = 'Hello'
// const world = 'World'
// const greeting = `${hello} ${world}`
// console.log(greeting);

// const multByFactor = function(value, multiplier = 1){
//   return value * multiplier
// }
// const fnCalc = (value, multiplier = 1) => {
//   return value + multiplier
// }
// let calcResult = fnCalc

// console.log(calcResult(22, 15)); 

// multByFactor(10, 2)
// multByFactor(5)


// const newPosts = (post, addedAt = Date()) => ({
//   ...post,
//   addedAt,
// })
// const firstPost = {
//   id: 1,
//   author: 'Abdu',
// }

// console.log(newPosts(firstPost))

// const lastPosts = (postTwo, addedAt = Date()) => {
//   const objectA = {
//     ...postTwo,
//     addedAt,
//   }
//   return objectA
// }
// console.log(lastPosts(firstPost, '02/06/1997'));




// const fnWithError = () => {
//   throw new Error('Some error')
// }


// try {
//   fnWithError()
  
// } catch (error){
//   console.error(error)
//   console.log(error.message);
//   console.log('Continue...');

// }

// Выражение всегда возвращает значение
// Инструкций пример инструкций это объявление переменной с помощью ключевого слова let (ВЫПОЛНЯЕТ ДЕЙСТВИЕ)
// Выражение - Инструкция 

// const myArray = [1, 2, 3]
// console.log(myArray);

// const myArray2 = new Array(1, 2, 3)
// console.log(myArray2);

// const resultArr = typeof myArray === typeof myArray2
// const resultArr2 = myArray === myArray2
// console.log(resultArr);
// console.log(resultArr2);

/*
    Методы массивов
      push()        - Новый элемент в конец массива           
      pop           - Удаляет элемент в конеце массива, можно присвоить переменную (возвращает элемент)
      unshift       - Новый элемент в начале массива
      shift         - Удаляет элемент в начале массива можно присвоить переменную (возвращает элемент)
      forEach       - Перебор элементов в массиве и выполнение определенного дейсвия но не возвращает ничего
                      (undefinied)  callback function
      map           - CALLBACK FN возвращает новый массив

*/

// myArray.push(true)
// myArray.unshift('Zarafshan')
// console.log(myArray);
// myArray.pop()
// myArray.shift()
// myArray.push(10)
// const res = myArray.forEach(el => console.log(el * 2))

// const newArray = myArray.map((el) => {
//   return el * 3 // return явно 
// })
// console.log(newArray);
// console.log(myArray, res);



//                    Деструктуризация

// const userProfile = {
//   name: 'Abdu',
//   commentsQty: 23,
//   hasSignedAgreement: false,
// }

// const {name, commentsQty} = userProfile
// // Объявление новых переменных и присваивание значение на основе значений свойств объекта
// const {hasSignedAgreement} = userProfile
// console.log(name);
// console.log(commentsQty);


// const fruits = ['Apple', 'Banana']
// const [fruitOne, fruitTwo] = fruits
// console.log(fruitOne);
// console.log(fruitTwo);

// const userInfo = ({name, commentsQty}) => {
//   if (!commentsQty) {
//     return `User ${name} has no comments`
//   }
//   return `User ${name} has ${commentsQty} comments`
// }

// console.log(userInfo(userProfile))

// const sumPositiveNumbers = (a, b) => {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     return 'One of the arguments is not a number'
//   }
//   if(a <= 0 || b <=0){
//     return 'Numbers are not positive'
//   }
//   return a + b
// }

// const month = 12

// switch (month) {
//   case 12:
//     console.log('Декабрь');
//     break;
  
//   case 1:
//     console.log('Январь');
//     break;
//   case 2:
//     console.log('Февраль');
//     break
//   default:
//     console.log('Это не зимний месяц');
// }

// let a = 2
// let b = 3
// const c = a !== b ? a + b : a - b
// console.log(c);

// for (let i = 0; i < 5; i++){
//   console.log(i);
// }

// const myArray = ['first', 'second', 'third']
// for (let i = 0; i < myArray.length; i++){
//   console.log(myArray[i]);
// }
// myArray.forEach((element, index) => {
//   console.log(element, index);
// })

// Цикл while
// let i = 0
// while (i <= 5) {
//   console.log(i);
//   i++
// }

// for (key in Object) {}

// const myObject = {
//   x: 10,
//   y: true,
//   z: 'abc'
// }


// for ( const key in myObject) {
//   console.log(key, myObject[key]);
// }

// Object.keys(myObject).forEach(key => {
//   console.log(key, myObject[key]);
// })

// Object.values(myObject).forEach(value => {
//   console.log(value);
// })

// const myString = 'Hey'

// for (const letter of myString) {
//   console.log(letter);
// }

// class Comment {
//   constructor(text) {
//     this.text = text
//     this.votesQty = 0
//   }
  
//   upvote() {
//     this.votesQty += 1
//   }
// }

// const firstComment = new Comment('First comment')
// const secondComment = new Comment('Second comment')
// const thirdComment = new Comment('Third comment')

// firstComment instanceof Comment
// firstComment instanceof Object
// firstComment.upvote()
// console.log(firstComment.votesQty);
// firstComment.upvote()
// console.log(firstComment.votesQty);


// console.log(firstComment);
// secondComment.upvote()
// console.log(secondComment);
// thirdComment.upvote()
// console.log(thirdComment);

// Проверка принадлежности свойств экземпляру объекта
// console.log(
//   firstComment.hasOwnProperty('text'),
//   firstComment.hasOwnProperty('votesQty'),
//   firstComment.hasOwnProperty('upvote'),
//   firstComment.hasOwnProperty('hasOwnProperty')
// );


// class NumbersArray extends Array {
//   sum(){
//     return this.reduce((el, acc) => acc += el, 0)
//   }
// }
// const myArray = new NumbersArray(2, 5, 7)

// console.log(myArray);
// myArray.sum()



//  Промисы 

// Состояние промиса
//   Ожидание
//   Исполнен
//   Отклонен

// const myPromise = new Promise((resolve, reject) => {
  /*
  * Выполнение асинхронных действий 
  *
  * Внутри этой функций нужно в результате вызвать одну из функций resolve или reject


  */
// })


// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => {
//     console.log(response);
//     return response.json()
//   })
//   .then(json => console.log(json))
//   .catch(error => console.error(error));
//

// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => response.json())
//   .then(json => console.log(json))
//   .catch(error => console.error(error))

  
// const getData = (url) =>
//   new Promise((resolve, reject) =>
//     fetch(url)
//       .then(response => response.json())
//       .then(json => resolve(json))
//       .catch(error => reject(error))
//   )

// getData('https://jsonplaceholder.typicode.com/todos')
//   .then(data => console.log(data))
//   .catch(error => console.log(error.message))


// const asyncFn = async () => {
//   // return 'Succes'
//   await Promise
// }
// asyncFn()

// const timerPromise = () => 
//   new Promise((resolve, reject) => 
//     setTimeout(() => resolve(), 2000))

// const asyncFn = async () => {
//   console.log('Timer starts')
//   const startTime = performance.now()
//   await timerPromise()
//   const endTime = performance.now()
//   console.log('Timer ended', endTime - startTime);
// }

// asyncFn()


// const getData = async (url) => {
//   const res = await fetch(url)
//   const json = await res.json()
//   return json
// }

// getData('https://jsonplaceholder.typicode.com/todos')
//   .then(data => console.log(data))
//   .catch(error => console.log(error.message))
// const url = 'https://jsonplaceholder.typicode.com/todos'

// try {
//   const data = await getData(url)
//   console.log(data);
// }catch(error) {
//   console.log(error.message);
// }



/*
            Главное в ASYNC/AWAIT

    1. ASYNC/AWAIT - ЭТО СИНТАКСИЧЕСКАЯ НАДСРОЙКА НАД ПРОМИСАМИ И НЕ БОЛЕЕ
    2. AWAIT СИНТАКСИС ВОЗМОЖЕН ТОЛЬКО ВНУТРИ ASYNC ФУНКЦИЙ
    3. ASYNC ФУНКЦИЯ ВСЕГДА ВОЗВРАЩАЕТ PROMISE
    4. ASYNC ФУНКЦИЯ ОЖИДАЕТ РЕЗУЛЬТА ИНСТРУКЦИЙ AWAIT И НЕ ВЫПОЛНЯЕТ ПОСЛЕДУЮЩИЕ ИНСТРУКЦИЙ

*/













