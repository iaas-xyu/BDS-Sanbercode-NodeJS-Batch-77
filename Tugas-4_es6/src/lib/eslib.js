// Jawaban Soal Nomor 1
export const kelilingPersegi = (p,l) =>{
    return (2*(p+l));
}

export let luasPersegi = (p,l) => (p*l);


// Jawaban Soal Nomor 2
export const newFunction = (firstName, lastName) => {
    return {
        firstName,
        lastName,
        fullName : function(){
            return(firstName + " " + lastName)
        }
    }
}

// Jawaban Soal Nomor 3 -> selanjutnya di file index.js
export const newObject = {
  firstName: "Muhammad",
  lastName: "Iqbal Mubarok",
  address: "Jalan Ranamanyar",
  hobby: "playing football",
}


// Jawaban Soal Nomor 4
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
export const combined = [...west, ...east];


// Jawaban Soal Nomor 5
const planet = "earth" 
const view = "glass" 
export var before = `Lorem ${view} dolor sit amet, consectetur adipiscing elit, ${planet}`
