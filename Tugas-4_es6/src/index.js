import { before, combined, luasPersegi, newFunction, newObject } from "../dist/lib/eslib";
import { kelilingPersegi } from "./lib/eslib";

// jawaban no 1
console.log("Keliling persegi: ", kelilingPersegi(3,2));
console.log("Luas Persegi: ", luasPersegi(3,2));


// jawaban nomor 2
console.log(newFunction("wiliam", "Imoh").fullName());


// jawaban no 3
const {firstName, lastName, address, hobby} = newObject;
console.log(firstName, lastName, address, hobby);


// Jawaban no 4
console.log(combined);


// jawaban no 5
console.log(before);