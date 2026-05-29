"use strict";

var _eslib = require("../dist/lib/eslib");
var _eslib2 = require("./lib/eslib");
// jawaban no 1
console.log("Keliling persegi: ", (0, _eslib2.kelilingPersegi)(3, 2));
console.log("Luas Persegi: ", (0, _eslib.luasPersegi)(3, 2));

// jawaban nomor 2
console.log((0, _eslib.newFunction)("wiliam", "Imoh").fullName());

// jawaban no 3
var firstName = _eslib.newObject.firstName,
  lastName = _eslib.newObject.lastName,
  address = _eslib.newObject.address,
  hobby = _eslib.newObject.hobby;
console.log(firstName, lastName, address, hobby);

// Jawaban no 4
console.log(_eslib.combined);

// jawaban no 5
console.log(_eslib.before);