// ARRAYS
// 1. Declare an empty array using JS literal notation to store student names in future.
let students_name = [];
console.log(students_name);


// 2. Declare an empty array using JS object notation to store student names in future.
let students_names = new Array()
console.log(students_names);


// 3. Declare and initialize a strings array.
let fruits = ["apple","banana","orange"];
console.log(fruits);


// Declare and initialize a numbers array.
let nums = [12,34,23,12,3,412]
console.log(nums);


// Declare and initialize a boolean array.
let boolean = [true,false,true]
console.log(boolean);


// . Declare and initialize a mixed array
let mixed_array = ["Muzaafar Ali",true,19]
console.log(mixed_array);


// Declare and Initialize an array and store available mobile networks in Pakistan.
let mobile_networks = ["Jazz","Ufone","Zong","Telenor"]
console.log(mobile_networks);


// Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:
let education = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"]
console.log("Qualifications");
education.map((value,index)=>{
     console.log(`${index+1}: ${value}`);
})
console.log("for loop");


for (let index = 0; index < education.length; index++) {
    console.log(`${index} ${education[index]}`);
}

console.log("For in loop");


for (const index in education) {
       console.log(`${index} ${education[index]} `);
}


// 9. Declare and initialize an empty array to store top movies of 2015. Add movies one by one in an array. Display the elements & length of array in your browser. (Use array’s length method)
let top_movies = []
top_movies.push("Inside Out",)
top_movies.push("The Revenant")
top_movies.push("Mad Max: Fury Road")
top_movies.push("Star Wars: The Force Awakens")
console.log("\nTop Movies of 2015");
for (const key in top_movies) {
    console.log(`${key}: ${top_movies[key]}`);
}
console.log(`Length of the Array ${top_movies.length}`);



// Declare and Initialize an array with your favorite cars. Show 
// a. First index of the array 
// b. Car at first index of the array 
// c. Last index of the array
// Car at last index of the array

let cars = ["Audi","BRV","fortuner","BMW"]
console.log(cars);
console.log(`First index of the array `+ 0);
console.log(`Car at first index of the array  ${cars[0]}`);
console.log(`Last index of the array ${cars.length-1}`);
console.log(`Car at last index of the array ${cars[cars.length-1]}`);


// Write a program to store 3 student names in an array. Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:
let student_names = ["Muzaffar Ali","Hassnain Ali","Hamzah Syed"]
let student_score = [400,200,450]
let total_marks = 500
console.log("Marks");

for (const key in student_names) {
      let result = student_score [key] / total_marks * 100
      console.log(`Score of ${student_names[key]} is ${total_marks}. Parsontage ${result}%`);
}


// Initialize an array with color names. Display the array elements in your browser.
let color_names = ["Green","Red","Yellow"];
console.log(color_names);
// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.
let user = prompt("Enter Color Name:")
color_names.push(user)

// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.

// c. Add two more color to the beginning of the array. Display the updated array in your browser.

// d. Delete the first color in the array. Display the updated array in your browser.

// e. Delete the last color in the array. Display the updated array in your browser.

// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.

// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser

