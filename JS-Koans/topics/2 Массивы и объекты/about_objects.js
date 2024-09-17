
describe("About Objects (about_objects.js)", function() {
  it("object type", function() {
    let emptyObject = {};
    // what is the type of an object?
    expect("object").toBe(typeof(emptyObject)); // Тип объекта - "object"
  });

  it("object literal notation", function() {
    let person = {
      name: "Amory Blaine", 
      age: 102 
    };
    // what is the person's name?
    expect("Amory Blaine").toBe(person.name); // Проверка имени
    // what is the person's age?
    expect(102).toBe(person.age); // Проверка возраста
  });

  it("dynamically adding properties", function() {
    let person = {};
    person.name = "Amory Blaine"; // Динамическое добавление имени
    person.age = 102; // Динамическое добавление возраста
    // what is the person's name?
    expect("Amory Blaine").toBe(person.name); // Проверка имени
    // what is the person's age?
    expect(102).toBe(person.age); // Проверка возраста
  }); 

  it("adding properties from strings", function() {
    let person = {};
    person["name"] = "Amory Blaine"; // Добавление имени с использованием строки
    person["age"] = 102; // Добавление возраста с использованием строки
    // what is the person's name?
    expect("Amory Blaine").toBe(person.name); // Проверка имени
    // what is the person's age?
    expect(102).toBe(person.age); // Проверка возраста
  });

  it("adding functions", function() {
    let person = {
      name: "Amory Blaine",
      age: 102,
      toString: function() {
        return `I ${this.name} am ${this.age} years old.`; // Используем this для доступа к имени и возрасту
      }
    };
    // what should the toString function be?
    expect("I Amory Blaine am 102 years old.").toBe(person.toString()); // Проверка функции toString
  });

  it("property enumeration", function() {
    let keys = [];
    let values = [];
    let person = {name: 'Amory Blaine', age: 102, unemployed: true};
    for(let propertyName in person) {
      keys.push(propertyName); // Добавляем имя свойства
      values.push(person[propertyName]); // Добавляем значение свойства
    }
    // what are the property names of the object?
    expect(keys).toEqual(["name", "age", "unemployed"]); // Проверяем имена свойств
    // what are the property values of the object?
    expect(values).toEqual(["Amory Blaine", 102, true]); // Проверяем значения свойств
  });
}); 
