// looping.js
// Soal 1 Looping While
console.log("LOOPING PERTAMA");

i = 1;
angka = 20;
while (i <= angka){
    if (i % 2 == 0){
        console.log(i + " - I Love Coding");
    }
    i++;
}


console.log("LOOPING KEDUA");
i = 1;
while (angka >= i){
    if (angka % 2 == 0){
        console.log(angka + " - I will become a mobile developer");
    }
    angka--;
}




// Soal 2 Looping For

angka2 = 20;
for(var i=1 ; i <= angka2 ; i++ ){
    if (i % 3 == 0 && i % 2 == 1){
    console.log(i + " -  I Love Coding");
    } else if (i % 2 == 1){
        console.log(i + " - Santai");
    } else if (i % 2 == 0){
        console.log(i + " - Berkualitas");
    }
}