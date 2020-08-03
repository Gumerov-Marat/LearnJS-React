// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello = function () {
//     console.log('Hello' + this.name);
//   }
// }

// User.prototype.exit = function (name) {
//   console.log('Пользователь ' + this.name + ' ушел');
// }
// let ivan = new User('Ivan', 25),
//     alex = new User('Alex', 20);

// class User {
//   constructor (name, id) {
//       this.name = name;
//       this.id = id;
//       this.human = true;
//   }

//   hello() {
//    console.log('Hello' + this.name);
//   }

//   exit(name) {
//    console.log('Пользователь ' + this.name + ' ушел');
//  }
// }

function hello() {
  console.log('hello', this);
}


// const person = {
//   name: 'Vladilen',
//   age: 25,
//   sayHello: hello
// };

// ВМЕСТО THIS мы молучаем обьект слева от точки

/*
   Создаем объект в объекте  
*/

// const person = {
//   name: 'Vladilen',
//   age: 25,
//   sayHello: hello,
//   sayhelloWindow: hello
// };

// любые объекты это объекты со своими функциями а значит и у хелло есть

// const person = {
//   name: 'Vladilen',
//   age: 25,
//   sayHello: hello,
//   sayhelloWindow: hello.bind(window)
// };

// const person = {
//   name: 'Vladilen',
//   age: 25,
//   sayHello: hello,
//   sayhelloWindow: hello.bind(window),
//   logInfo: function () {
//     console.log(`Name is ${this.name}`);
//     console.log(`Name is ${this.age}`);
//   }
// };


//   const lena = {
//     name: 'Elena',
//     age: 23
//   };

// person.logInfo.bind(lena)(); // метод байнд не вызывает функцию а возвращет функцию с новым контексом
//------------------------------------------------------------------

const person = {
  name: 'Vladilen',
  age: 25,
  sayHello: hello,
  sayhelloWindow: hello.bind(window),
  logInfo: function (job, phone) {
    console.group(`${this.name} info`);
    console.log(`Name is ${this.name}`);
    console.log(`Name is ${this.age}`);
    console.log(`Job is ${job}`);
    console.log(`Phone is ${phone}`);
    console.groupEnd();
  }
};