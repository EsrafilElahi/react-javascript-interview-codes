// =====================================
function foo() {
  console.log(this);
}
foo(); // window

// =====================================
var name = "David";
function getName() {
  console.log(this.name);
}
getName();

// =====================================
const name = "David";
function getName() {
  console.log(this.name);
}
var obj = {
  name: "John",
  print: getName,
};
obj.print();

// =====================================
var name = "David";
var person = {
  name: "John",
  getName: function () {
    console.log(this.name);
  },
};
var getName = person.getName;
getName();
person.getName();

// =====================================
const person = {
  getName() {
    return this.name;
  },
};
const personA = {
  name: "John Doe",
};
console.log(person.getName.apply(personA));

// =====================================
("use strict");
function edge() {
  return this;
}
console.log(edge()); // undefined

// =====================================
var name = "John";
const person = {
  name: "David", // in var const let nadare pas globale

  printName: () => {
    alert(this.name);
  },
};

person.printName();
