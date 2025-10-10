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



// // 13.Write a program to store student scores in an array & sort  the array in ascending order using Array’s sort method.
// let student_scores = [400,500,200,300]
// console.log(`Score of Students ${student_scores}`);
// console.log(`Ordered Score of Students ${student_scores.sort()}`);

// //14 Write a program to sort the below mentioned array: 
// // var fruits = [“strawberry”, “apple”, “orange”, “banana”]
// let fruits = ["strawberry", "apple", "orange", "banana"]
// console.log(`\nFruits List ${fruits}`);
// console.log(`Ordered Fruits List ${fruits.sort()}`);


// //15 Write a program to initialize an array with city names. Copy  3 array elements from cities array to selectedCities array.
// let city_names = ["Karachi","Islamabad","Ghotki","Sukkur"]
// let selectedCities = city_names.slice(1,3)
// console.log(`City List ${city_names}`);
// console.log(`Selected City List ${selectedCities}`);


// // 16 Write a program to create a single string from the below mentioned array: 
// // var arr = [“This ”, “ is ”, “ my ”, “ cat”]; 
// // (Use array’s join method)
// let arr = ["This","is","my","cat"]
// console.log("Array");
// console.log(arr);
// console.log("String");
// console.log(arr.join(" "));


//17 Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out) 
// let devices = []
// devices.push("Keyboard")
// devices.push("Mouse")
// devices.push("Pointer")
// devices.push("Monitor")

// console.log(`Devices \n${devices}`);

// for(let i = devices.length;i > 0;i--){
//      console.log(`Out`);
//      console.log(`${devices.shift()}`);
// }



// Write a program to store phone manufacturers (Apple,  Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method:
// Array of phone manufacturers
// let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// for(let i = 0;i<phoneManufacturers.length;i++){
//     let opt = document.getElementById("phone");
//     opt.innerHTML += "<option>" + phoneManufacturers[i] + "</option"
// }

// // 20. Declare and initialize an empty multidimensional array.  (Array of arrays)
// let matrix = [[],[]]

// //21 Declare and initialize a multidimensional array representing the following matrix:  
// let manufacturers = [[0,1,2,3],[1,0,1,2],[2,1,0,1]]
// for(let i = 0;i < manufacturers.length;i++){
//     console.log(manufacturers[i]);
// }



// # Getting Started Exercises with TypeScript and Node.js  by Sir Zia Khan (Giaic And Piaic)


// 2. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

// let person_name = "Muzaffar Ali";
// console.log(`Hello ${person_name}`);




// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase,and titlecase.

// let person_name = "Muzaffar Ali";
// console.log(person_name.toLocaleLowerCase());
// console.log(person_name.toUpperCase());
// let titlecase = person_name.split(" ")
// titlecase.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLocaleLowerCase()).join("");
// console.log(titlecase);




// // 4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// let famous_Quote = "Allama Iqbal"
// let quote = "You are a falcon, your flight is your work; there are other skies before you"
// console.log(`${famous_Quote} once said, ${quote}`);



// // 5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
// let famous_person = "Ronaldo"
// let message = "Hello Dear"
// console.log(`${message} ${famous_person}`);



// 6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
// let person_name = "   Muzaffar Ali   ";
// console.log(`with whitespace:\n${person_name}`);
// console.log(`without whitespace:\n${person_name.trim()}`);


// 7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results. 
// let num = 2
// console.log(num + 6);
// console.log(10 - num);
// console.log(num * 4);
// console.log(16 / num);

// 8. You should create four lines that look like this:

// _____________________________________________

// console.log(5 + 3)

// _____________________________________________

// console.log("_".repeat(20));
// console.log(5 + 3);
// console.log(10 - 2);
// console.log(16 / 2);
// console.log(2 * 4);
// console.log("_".repeat(20));


// 9. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
// let favorite_num = 100;
// console.log(`My favorite Number is ${favorite_num}`);

// 10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write
// because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence
// describing what the program does.
// let current_date = new Date()
// console.log(current_date.toDateString())
// ;


// Class practie 17 \9\2025 
// childNodes
// console.log(document.childNodes[1].childNodes[2].childNodes[4].nodeName);
// // parent
// console.log(document.childNodes[0].parentNode);

// let childs = document.childNodes
// console.log(childs);

// class practie 19/9/2025
// let div = document.getElementById("div1").childNodes[5]
// let div = document.getElementById("div1").nextSibling
// console.log(div);

// let bod = document.getElementById("body")
// let div = document.createElement("div")
// let atrribute = document.createElement("h1"); //.innerText = "Hello world"
// let text = document.createTextNode("Hello World");
// atrribute.appendChild(text)
// div.append(atrribute)

// let atrribute2 = document.createElement("h1"); //.innerText = "Hello world"
// let text2 = document.createTextNode("Hello Hassnain");
// atrribute2.appendChild(text2)

// div.append(atrribute2)
// bod.append(div)


// div.removeChild(atrribute)


// let div2 = document.getElementById("div2");
// let para = document.getElementById("div2").childNodes[1]
// div2.removeChild(para)

// end 

// TODO LIST CLI BASED
// console.log("=".repeat(40));
// console.log("CLI BASED TODO LIST APP");
// console.log("1. Add Task");
// console.log("2. Delete Task");
// console.log("3. View Task");
// console.log("4. Update Task");
// console.log("5. Exit");
// console.log("=".repeat(40));


// let all_Task = ["Nimaz","Reading","Listning"]

// function Add_Task(task){
//     all_Task.push(task)
//     console.log("-".repeat(40));
//     console.log(`${task} Added Your Task`);
// }

// function Delete_Task(num){
//     rem = all_Task.splice(num,1)
//     console.log("-".repeat(40));
//     console.log(`${rem} Remove Your Task.`);    
// }

// function View_Task(){
//     for(let i=0; i < all_Task.length;i++){
//         console.log(`${i+1} ${all_Task[i]}`);
//     }
// }

// function Update_Task(num1,data){
//     console.log("Before ");
//     console.log(all_Task);
//     all_Task.splice(num1,0,data)
//     console.log(`${data} added succesfully`);
//     console.log("After");
//     console.log(all_Task);
// }
// // user prompt
// let user = 1;
// let user_task = "khan";
// let data = "Kalwar"

// // decision making 
// if(user === 1){
//     console.log("Added Task");
//     Add_Task(user_task)
// }

// else if(user === 2){
//     console.log("Delete Task");
//     Delete_Task(user_task)
// }
// else if(user === 3){
//     console.log("View Task");
//     View_Task()
// }
// else if(user === 4){
//     console.log("Update Task");
//     Update_Task(user_task,data)
// }
// else{
//     console.log("please Enter Valid Input");
// }

// Todo list End 23/9/2025   time raat ko 12:29 am


// 45 assignments start again
// 11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
// let names = ["babar","rizwan","Ali"]
// names.sort();
// for(let i=0;i < names.length;i++){
//      console.log(names[i]);     
// }

// 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message
// should be the same, but each message should be personalized with the person’s name.
// let names = ["babar", "rizwan", "Ali"];

// for (let i = 0; i < names.length; i++) {
//   console.log(`Hello ${names[i]}, you are my best friend!`);
// }



// 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list
// to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

// let favorite_transportation = ["Honda Car","BRV","GLI"]
// favorite_transportation.map(item =>{
//      console.log(`I would like to own a ${item}.`);
// })

// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to
// invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
// let guest_list = ["Aleeza","Ghazala","Daraiba"]

// for(let i=0;i < guest_list.length;i++){
//      console.log(`Dear ${guest_list[i]}, you are invited to dinner!`);    
// }



// Class Revision Smit

// function CheckCapmus(){
//      let roll_number = Number(document.getElementById("rollno").value)
     

//      let campus_id = document.getElementById("campus"); 

//      switch (roll_number) {
//           case 100:
//                campus_id.value = "zaitoon"
//                break;
//           case 200:
//                campus_id.value = "PAIC"
//                break;
//           case 300:
//                campus_id.value = "GIAIC"
//                break;
//           default:
//                break
//      }
     
     
// }



// 15. Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.


// Quiz Preparation SMIT 10/10/2025

// switch

let day = "Friday";

switch (day){
    case "Monday":
        console.log("Monday is OFF");
       
    case "Tuesday":
        console.log("Tuesday is OFF");
       
    case "Wednesday":
        console.log("Wednesday is OFF");
       
    case "Friday":
        console.log("Friday is On");
       
    default :
    console.log("no more days");
}

// 2nd multiplte condition 
// let num = 20;

// switch(true){
//     case (num > 0 && num < 10):
//         console.log("0 to 10");
//         break;
//     case (num > 11 && num <= 20):
//         console.log("11 to 20");
//         break;
//     default:
//         console.log("other numbers");
// }

