// object.js
// Array to Object


var now = new Date()
var thisYear = now.getFullYear() // 2025 (tahun sekarang)


function arrayToObject(arr){
    for (var i=0; i < arr.length; i++){
        console.log("FirstName: "+ arr[i][0]);
        console.log("LastName: "+ arr[i][1]);
        console.log("gender: "+ arr[i][2]);
        if (arr[i][3] <= 2025 ) {
            console.log("Age: "+ (2026 - arr[i][3]));
        } else if (arr[i][3] >= 2026 || arr[i][3] === undefined){
            console.log("Age: Invalid birth year")
        }
        console.log(" ");
    }
}

// Driver Code
var people = [ 
                ["Bruce", "Banner", "male", 1975], 
                ["Natasha", "Romanoff", "female"] 
            ]
arrayToObject(people);


var people2 = [ 
                ["Tony", "Stark", "male", 1980], 
                ["Pepper", "Pots", "female", 2026] 
            ]
arrayToObject(people2);
