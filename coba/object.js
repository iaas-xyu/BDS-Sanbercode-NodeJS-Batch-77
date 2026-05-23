// object.js
// Array to Object


var now = new Date()
var thisYear = now.getFullYear() // 2025 (tahun sekarang)


function arrayToObject(arr){
    for (var i=0; i < arr.length; i++){
        if (arr[i][3] <= 2025 ) {
            age = thisYear - arr[i][3]
        } else if (arr[i][3] >= thisYear || arr[i][3] === undefined){
            age = "Invalid birth year";
        }
        const person = {
            FirstName: arr[i][0],
            LastName: arr[i][1],
            gender: arr[i][2],
            age: age,
        }
        console.log(i+1 +"."+ arr[i][0] +" "+ arr[i][1] +": ");
        console.log(JSON.stringify(person, null, 2));
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
