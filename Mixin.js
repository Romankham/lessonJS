////1) Примеcm
// let sayHiMixin = {
//     sayHi() {
//         console.log(`Hello, ${this.name}`);
//     },
//     sayBye() {
//         console.log(`Bye, ${this.name}`);
//     }
// };

// //использование
// class User {
//     constructor(name) {
//         this.name = name;
//     }
// }

// //копируем методы
// Object.assign(User.prototype, sayHiMixin);

// //теперь User может сказать Hello
// new User("Vasya").sayHi();
//2) Наследование примеси
let sayMixin = {
    say(phrase) {
        console.log(phrase);
    }
};

let sayHiMixin = {
    __proto__: sayMixin, //(или мы можем использовать Object.create для задания прототипа)
    sayHi() {
        //вызываем метод родителя
        super.say(`Hello, ${this.name}`); // (*)
    },
    sayBye() {
        super.say(`Bye, ${this.name}`); // (*)
    }
};
class User {
    constructor(name) {
        this.name = name;
    }
}

//копируем методы
Object.assign(User.prototype, sayHiMixin);

//теперь User может сказать ПРивет
new User("Vasya").sayBye();

//3) События примеси 
let eventMixin = {
        /**
   * Подписаться на событие, использование:
   * menu.on('select', function(item) { ... }
   */
  on(eventName, handler) {
      if (!this._eventHandlers) this._eventHandlers = {};
      if (!this._eventHandlers[eventName]) {
          this._eventHandlers[eventName] = [];
      }
      this._eventHandlers[eventName].push(handler);
  },

  /**
   * Отменить подписку, использование:
   * menu.off('select', handler)
   */
  off(eventName, handler) {
      let handlers = this._eventHandlers && this._eventHandlers[eventName];
      if (!handlers) return;
    for (let i = 0; i < handlers.length; i++) {
        if (handlers[i] === handler) {
            handlers.splice(i--, 1);
        }
    }
  },
  /**
   * Сгенерировать событие с указанным именем и данными
   * this.trigger('select', data1, data2);
   */
  trigger(eventName, ...args) {
      if (!this._eventHandlers || !this._eventHandlers[eventName]) {
          return; // обработчиков для этого события нет
      }
    //вызовем обработчик
    this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
  }
};

class Menu {
    choose(value) {
        this.trigger("select", value);
    }
}
//Добавимь примесь с методами для события
Object.assign(Menu.prototype, eventMixin);

let menu = new Menu();

//добавим обработчик, который будет вызван при событии "select":
menu.on("select", value => console.log(`Выбраное значение: ${value}`));

//Генерирует событие => обработчик выше запускается и выводит:
menu.choose("123");