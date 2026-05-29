"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newObject = exports.newFunction = exports.luasPersegi = exports.kelilingPersegi = exports.combined = exports.before = void 0;
// Jawaban Soal Nomor 1
var kelilingPersegi = exports.kelilingPersegi = function kelilingPersegi(p, l) {
  return 2 * (p + l);
};
var luasPersegi = exports.luasPersegi = function luasPersegi(p, l) {
  return p * l;
};

// Jawaban Soal Nomor 2
var newFunction = exports.newFunction = function newFunction(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: function fullName() {
      return firstName + " " + lastName;
    }
  };
};

// Jawaban Soal Nomor 3 -> selanjutnya di file index.js
var newObject = exports.newObject = {
  firstName: "Muhammad",
  lastName: "Iqbal Mubarok",
  address: "Jalan Ranamanyar",
  hobby: "playing football"
};

// Jawaban Soal Nomor 4
var west = ["Will", "Chris", "Sam", "Holly"];
var east = ["Gill", "Brian", "Noel", "Maggie"];
var combined = exports.combined = [].concat(west, east);

// Jawaban Soal Nomor 5
var planet = "earth";
var view = "glass";
var before = exports.before = "Lorem ".concat(view, " dolor sit amet, consectetur adipiscing elit, ").concat(planet);