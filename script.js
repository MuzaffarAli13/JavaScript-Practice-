// // ARRAYS
// // 1. Declare an empty array using JS literal notation to store student names in future.
// let students_name = [];
// console.log(students_name);


// // 2. Declare an empty array using JS object notation to store student names in future.
// let students_names = new Array()
// console.log(students_names);


// // 3. Declare and initialize a strings array.
// let fruits = ["apple","banana","orange"];
// console.log(fruits);


// // Declare and initialize a numbers array.
// let nums = [12,34,23,12,3,412]
// console.log(nums);


// // Declare and initialize a boolean array.
// let boolean = [true,false,true]
// console.log(boolean);


// // . Declare and initialize a mixed array
// let mixed_array = ["Muzaafar Ali",true,19]
// console.log(mixed_array);


// // Declare and Initialize an array and store available mobile networks in Pakistan.
// let mobile_networks = ["Jazz","Ufone","Zong","Telenor"]
// console.log(mobile_networks);


// // Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:
// let education = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"]
// console.log("Qualifications");
// education.map((value,index)=>{
//      console.log(`${index+1}: ${value}`);
// })
// console.log("for loop");


// for (let index = 0; index < education.length; index++) {
//     console.log(`${index} ${education[index]}`);
// }

// console.log("For in loop");


// for (const index in education) {
//        console.log(`${index} ${education[index]} `);
// }


// // 9. Declare and initialize an empty array to store top movies of 2015. Add movies one by one in an array. Display the elements & length of array in your browser. (Use array’s length method)
// let top_movies = []
// top_movies.push("Inside Out",)
// top_movies.push("The Revenant")
// top_movies.push("Mad Max: Fury Road")
// top_movies.push("Star Wars: The Force Awakens")
// console.log("\nTop Movies of 2015");
// for (const key in top_movies) {
//     console.log(`${key}: ${top_movies[key]}`);
// }
// console.log(`Length of the Array ${top_movies.length}`);



// // Declare and Initialize an array with your favorite cars. Show 
// // a. First index of the array 
// // b. Car at first index of the array 
// // c. Last index of the array
// // Car at last index of the array

// let cars = ["Audi","BRV","fortuner","BMW"]
// console.log(cars);
// console.log(`First index of the array `+ 0);
// console.log(`Car at first index of the array  ${cars[0]}`);
// console.log(`Last index of the array ${cars.length-1}`);
// console.log(`Car at last index of the array ${cars[cars.length-1]}`);


// // Write a program to store 3 student names in an array. Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:
// let student_names = ["Muzaffar Ali","Hassnain Ali","Hamzah Syed"]
// let student_score = [400,200,450]
// let total_marks = 500
// console.log("Marks");

// for (const key in student_names) {
//       let result = student_score [key] / total_marks * 100
//       console.log(`Score of ${student_names[key]} is ${total_marks}. Parsontage ${result}%`);
// }


// // Initialize an array with color names. Display the array elements in your browser.
// let color_names = ["Green","Red","Yellow"];
// console.log(color_names);
// // a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.
// let user_color_start = prompt("Enter Color Name:")
// color_names.unshift(user_color_start)
// console.log(color_names);
// // b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.
// let user_color_end = prompt("Enter Color Name:")
// color_names.push(user_color_end)
// console.log(color_names);
// // c. Add two more color to the beginning of the array. Display the updated array in your browser.
// let user_color_start_2 = prompt("Enter two more colors name");
// let user_color_start_3 = prompt("Enter two more colors name");
// color_names.unshift(user_color_start_2)
// color_names.unshift(user_color_start_3)
// console.log(color_names);
// // d. Delete the first color in the array. Display the updated array in your browser.
// color_names.shift();
// console.log(color_names);
// // e. Delete the last color in the array. Display the updated array in your browser.
// color_names.pop();
// console.log(color_names);
// // f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.
// let user_color_index = prompt(" which index he/she wants to add a color")
// let user_color_name = prompt("Enter color name.")
// color_names.splice(user_color_index,0,user_color_name)
// console.log(color_names);
// // g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser
// let user_color_del = prompt("which index he/she wants to delete color(s)")
// let user_color_dels = prompt("how many colors he/she wants to delete.")
// color_names.splice(user_color_del,user_color_dels)



// 13.Write a program to store student scores in an array & sort  the array in ascending order using Array’s sort method.
let student_scores = [400,500,200,300]
console.log(`Score of Students ${student_scores}`);
console.log(`Ordered Score of Students ${student_scores.sort()}`);

//14 Write a program to sort the below mentioned array: 
// var fruits = [“strawberry”, “apple”, “orange”, “banana”]
let fruits = ["strawberry", "apple", "orange", "banana"]
console.log(`\nFruits List ${fruits}`);
console.log(`Ordered Fruits List ${fruits.sort()}`);


//15 Write a program to initialize an array with city names. Copy  3 array elements from cities array to selectedCities array.
let city_names = ["Karachi","Islamabad","Ghotki","Sukkur"]
let selectedCities = city_names.slice(1,3)
console.log(`City List ${city_names}`);
console.log(`Selected City List ${selectedCities}`);


// 16 Write a program to create a single string from the below mentioned array: 
// var arr = [“This ”, “ is ”, “ my ”, “ cat”]; 
// (Use array’s join method)
let arr = ["This","is","my","cat"]
console.log("Array");
console.log(arr);
console.log("String");
console.log(arr.join(" "));


// Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out) 
