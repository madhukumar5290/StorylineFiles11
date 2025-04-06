//Welcome to the JavaScript practice file! You can learn more and request help in our free instructional design community (sign up at https://www.devlinpeck.com/id)

//Workflow tip: Go to claude.ai/new and start a new chat with Claude, an AI assistant that's great at coding. Use this prompt: "You are a professional software engineering coach and you specialize in helping beginners learn JavaScript. I need help [insert your goal here]". If you're confused about anything in this file or as you watch the video, pause and ask Claude.

//Log information to the browser console; you can access your browser's console by pressing F12, Cmd+Opt+J (Mac), Ctrl+Shift+J (Windows), or right-click somehwere empty and click "Inspect" then click "Console". This is very useful for debugging and testing.
console.log("Hello, world!");

//JavaScript is case sensitive! The following line of code would not work:
Console.log("This will not work"); //This won't work because Console.log is undefined; we need to access console.log



//Double forward-slashes creat a single-line comment; comments are useful to define what's happening with your code, both for yourself and other developers

/* 
   You can create a
   multi-line comment
   by using a forward slash + asterisk
   to start the multi-line comment
   and an asterisk followed by a
   forward slash to end the
   multi-line comment 
*/




//Beginner JavaScript data types: Strings, numbers, booleans, arrays, objects, undefined, null

//Strings are any combo of characters representing text. Can be enclosed by single quotes, double quotes, or backticks (be consistent)
"I am a string"
'I am also a string 918767108*!&(*!*'
`I am a string, too! And I can have a quote: "It was the best of times, it was the worst of times"` //Backticks are used for template literals or multi-line strings, which we'll cover later
"Don't use the same symbol for quotes that you're using for your string: "Don't do this""
'Be wary of apostrophes if you're using them to define your string'
' //Added this to avoid 

//Homework: Fix the strings above

//Numbers are self-explanatory; they are not enclosed in quotes
10
978.82
1
-287

//Booleans can be equal to true or false; no quotations
true
false

//Arrays are collections of data, enclosed by square brackets and separate by commas
["Devlin", 30, "Pancakes"]
["kale", "eggs", "oat milk"]

//Objects store collections of key-value pairs, enclosed by curly brackets
{
    name: "Devlin",
    age: 30,
    role: "Insructional Designer"
}

//You get the undefined data type when you declare a variable but don't give it a value, and you can use null data type when you want to intentionally leave an absence of a value; not important right now, though!





//Variables let you store data so that you can access or update it at a later time

//Use let when you are creating a variable whose data can change, and use const when you're creating a variable who value will not change. Don't use var, as that is outdated
const name = "Devlin Peck";
let age = 30;

//To access a variable, you just write it's name without any quotes or brackets. Note that some keywords are reserved, like const, let, and function.
console.log(age) //This would log 30 to the console.

//Variables are case sensitive, too.
console.log(Age) //This would return undefined

//Use camelCase for variables, and always be descriptive with your variable names for readability
const firstName = "Devlin";
const lastName = "Peck";
let favoriteProgrammingLanguage = "JavaScript";

//

//When you're updating variables, you do not use the let keyword again, you just update it.
age = 31;

//When you want to embed your variable's value within a string, you can use a template literal. It uses backticks to create the string and ${variableName} to embed variable values.
let message = `My name is ${firstName} and I am ${age} years old.`;

//Homework: Create three variables: myName, myAge, and myFavoriteFood. Then create a myMessage variable that says "My name is (your name), I am (your age) years old, and my favorite food is (your favorite food)" Use the variables that you created to populate the data. After that, write a line of code that logs the message to the console.





//Operations: + for addition, - for subtraction, * for multiplication, / for division, and % for remainder. https://www.w3schools.com/jsref/jsref_operators.asp
let x = 5;
let y = 1;
//x + y = 6

//You can use parantheses just as you would in a math problem
(x + y) * 2 //returns 12

//Homework: Write a line of code that uses x and y to return 30



//When you add strings, it just gets concatenated or essentially 'tacked on' to whatever you're adding it to.
let stringX = "5";
let stringY = "1";
//stringX + stringY = "51"

//++ adds one to the variable, -- subtracts one from the variable
let newNum = 0;
newNum++;
//Now newNum will be equal to 1
newNum--;
//Now newNum will be equal to 0 again

//You can also use += to add whatever's on the right side of the equal sign to the left side of the equal sign, same with other operations
let myScore = 0;
myScore += 5;
//myScore is equal to 5 now
myScore -= 5;
//Now myScore is equal to 0 again




//You can also compare values; you can check if they're equal with == (this will ignore type differences) or === (enforces type differences)
const correctAnswer = 5;
let userAnswer = "5";
correctAnswer == userAnswer; //returns true because it converts the string to a number before comparing
correctAnswer === userAnswer; //returns false because it does not convert the values to the same data type

//You can check if two values are NOT equal by adding an exclamation point in front of the equal sign != (for no type enforcement) and !== (for type enforcement)
correctAnswer != userAnswer //returns false because the two values are equal when there's no type enforcement
correctAnswer !== userAnswer //returns true because the two values are NOT equal when there is type enforcement

//You can use >, <, >=, and <= operators, too.
3 < 4; //returns true because 3 is less than 4
5 >= 10; //returns false because 5 is not greater than or equal to 10
5 <= 10; //returns true because 5 is less than or equal to 10


//The ! symbol (also called the NOT operator) is useful for checking if a variable holds any data, since undefined is considered false and a value is considered true
let dummyVariable;
!dummyVariable; //returns true, becuase dummyVariable is not set to any value...undefined is not considered a value

dummyVariable = 30;
!dummyVariable; //returns false, because userAge is equal to a value

//You can check if multiple values are present or true by using && (the and operator) and you can check if at least one value is present or true using || (the OR operator)
let funnyVariable;
dummyVariable && funnyVariable; //returns false because funnyVariable is undefined
dummyVariable || funnyVariable; //returns true because dummyVariable is equal to a value, and only one needs to be true in an OR statement


//Homework: Create 3 new variables: course1, course2, and course3. Leave course3 undefined. Write 2 statements that include all 3 of the variables. The first statement should use the && operator and return false; the second should use the || operator and return true.




//Now let's dive deeper into arrays. These are useful for holding collections of data. They are creatd with square brackets, and the values are separated by commas.
const availableCourses = ["Introduction to JavaScript", "AI for Instructional Designers", "Introduction to Instructional Design"];

//Arrays are 0-indexed, which means the first item in the array is considered to be at the 0 position, the second item is considered to be at the 1 position, etc. You can get the value of one of the items by using the following format: variableName[position]
availableCourses[0]; //This will return "Introduction to JavaScript"

//You can check an array's length with the array.length method
availableCourses.length; //This returns 3, the total number of items included in the array. Homework: What would availableCourses[3] return?

//Homework: Write a line of code to return "Introduction to Instructional Design" by accessing that element of the array.



//You can add an item to the end of an array with the .push() method. You enter the data you want to add within the parentheses.
availableCourses.push("Storyline 360 Fundamentals"); //This will add "Storyline 360 Fundamentals" to the end of the array.

//You can remove the last item in an array with the .pop() method (nothing included within the parentheses)
availableCourses.pop(); //This removes the "Storyline 360 Fundamentals" string that we had just added

//Notice that we are able to add and remove stuff to the array, even though the variable is defined with const...the variable binds to the array itself, not the contents of the array

//Homework: Write 3 lines of code to add 3 new courses to the availableCourses array.




//forEach() lets you run a function on each item in the array
availableCourses.forEach(course => { //We will cover functions and this syntax later, but you should know that methods exist to perform actions on items in an array.
    console.log(`Available course: ${course}`);
}); //This logs each course name to the console

//There are many more array methods that you can use to perform operations on items in an array (.map(), .filter(), .find(), etc.), but we're not going to dive deeper into them here.





//Now let's dive deeper into objects, perhaps the most useful and most important data type in JavaScript. Objects are made up of key:value pairs enclosed by curly brackets {}. Let's create a variable and set it equal to an object.

const introCourse = {
    name: "Introduction to JavaScript",
    credits: 3,
    topics: ["JavaScript Fundamentals", "Working with APIs", "JavaScript Syntax"],
    description: "In this course, users will learn how to write basic JavaScript functions following proper syntax."
}

//Now when we want to access values within the object, we can use dot notation (basically just putting a period after between the name of the object, in this case the variable that defines it, and the key that we want to get the value from)

introCourse.name; //this will return "Introduction to JavaScript"
introCourse.topics[0]; //this will return "JavaScript Fundamentals"

//You can also update values in an object using dot notation
introCourse.name = "JavaScript 101"; //Now this value will be permanently updated in the object

//Create a new property on the object like this:
introCourse.studentCount = 1,500;

//You could also access values in an object using bracket notation, similar to how we did with arrays
introCourse["credits"]; //this returns 3, and it's the same as saying introCourse.credits (there are some edge cases where you'd need to use brackets instead of dot notation)

//You can also nest objects within objects.
const studentDetails = {
    name: "Devlin",
    address: {
        street: "123 Bell St.",
        city: "Portland",
        state: "Oregon"
    }
}

//Homework: Create an object in a myDetails variable, and include your name, your age, your address (included as a nested object like the example above), and your hobbies (included as an array of strings). You can optionally included a familyDetails nested object that includes details about your family members (include multiple levels of nesting if you'd like extra practice)




//JSON is JavaScript Object Notation, and it's a stricter way to format JavaScript objects that turns them into one big string so it's easier to send data back and forth across the web...very important for APIs. JSON is essentially a JavaScript object converted into a string. For example:

const schoolInfo = `{
    "schoolName": "Peck Academy",
    "schoolAddress": "123 View Street",
    "schoolCatalogVersion": 1
}`;

//As you can see, JSON objects need to have their properties (or "keys") enclosed by double quotes. The whole object is enclosed by backticks, too, since this is a multi-line string (and not necessarily a requirement for JSON...the whole object just needs to be enclosed in a string). Properties also cannot be equal to functions or some other advanced data types for JSON objects, which we'll explore later. 

//You can easily convert a JavaScript object into JSON with the JSON.stringify() method, which is built into your browser, and you can convert it back into a JavaScript object with JSON.parse().
const parsedSchoolInfo = JSON.parse(schoolInfo);
/* This sets parsedSchoolInfo equal to the following:
const parsedSchoolInfo = {
  schoolName: "Peck Academy",
  schoolAddress: "123 View Street",
  schoolCatalogVersion: 1
}
*/

//We can then turn it back into a JSON string with the following:
const jsonSchoolInfo = JSON.stringify(parsedSchoolInfo);

//All you need to know is that you can use JSON.parse() and JSON.stringify() to convert JSON into a JavaScript object and vice versa. JSON objects are strings, so they're safer and easier to send to and receive from servers (which we'll explore more later)

//Homework: Create a JavaScript object called favoriteThings. Give it a few properties, such as favoriteBook, favoriteMovie, and favoriteSeason. Then create a jsonFavoriteThings variable and make it convert your favoriteThings object into JSON. After that, create a variable called finalFavoriteThings and convert jsonFavoriteThings back into a JavaScript object.





//Now let's move on to functions; these are re-usable blocks of code that perform specific tasks. Here's the general format:

function functionName(parameters) {
    //your code goes shere
}

//You start with the function keyword, then you name your function, then you include any parameters you need, if any (we'll cover parameters soon). Then you include the function's code within curly brackets. Here's a simple function example that prints "Hello, world!" to the console:
function logToConsole() {
    console.log("Hello, world!");
}
//Once you've defined a function, you can call it like this functionName(parameters). The function above doesn't include any parameters, so we'd call it like this:
logToConsole(); //This will print "Hello, world!" to the console

//If you want to return data instead of just "do something" like use console.log(), we need to use the return keyword. For example:

function return5() {
    return 5;
} //This function is basically pointless, but whenever we call it, it will return the number 5. If we didn't use the return keyword, it would return undefined (the equivalent to creating a variable and setting it equal to nothing)




//Now let's cover parameters. Parameters are inputs that the function needs to do its job (you can think of parameters like function-specific variables). Here's an example:
function add5(number) {
    return number + 5;
}
//Now if we want to add 5 to a number, we can call this code:
add5(20); //returns 25

//We can name the parameters whatever we want. They just serve as placeholders that we can re-use in the code. We can also have multiple parameters, separated by commas:

function addNumbers(num1, num2) {
    return num1+num2;
}

//Now we can use this code to add any two numbers together:
addNumbers(30, 50); //returns 80

//When we pass data into parameters, they're called arguments. So in the example above, we're passing two arguments (30 and 50) into the addNumbers() function.

//Homework: Create a function called printUserDetails that accepts two parameters, userName and userAge. The function should log to the console an introduction stating the user's name and age. Then call the function 3 different times, each time using a different name and age.




//With modern JavaScript, you can write arrow functions to make your code cleaner. You essentially create a variable, then set it equal to (parameters) => {code goes here}. Like so:

const add20 = (number) => {
    return number + 20;
}

//To make one-line functions even cleaner, you could just write them on one line and drop the return keyword:
const add50 = (number) => number+50;

//Homework: Write a one-line arrow function called multiplyMe that takes 2 numbers and multiplies them by each other, returning the result. Keep your code as concise as possible!





//Let's return to JavaScript Objects to discuss properties and methods. We've already explored properties...these are just the keys that hold data as values, such as:
const myObject = {
    name: "Devlin",
    age: 30,
    favoriteHobby: "Gaming"
} //name, age, and favoriteHobby are all properties of the myObject object

//However, JavaScript objects can also include functions. When a function is included within a JavaScript object, it's referred to as a method. Let's add a method to the myObject object:
myObject.printMyName = function() {
    console.log(`My name is ${this.name}`)
}

//The code above may look confusing at first. We accessed the myObject object, then we created a new method (titled printMyName) and we set it equal to a function that logs the name property of the object. The this keyword can be quite confusing and we don't need to get too deep into it, but in this case, it's accessing the object itself (this) and then grabbing the name property. If we tried to do the same with an arrow function, it wouldn't work because the "this" keyword is treated differently in arrow functions. Not important now! Now the full object looks like this:

/*
const myObject = {
    name: "Devlin",
    age: 30,
    favoriteHobby: "Gaming",
    printMyName: function() {
      console.log(`My name is ${this.name}`)}
    }
*/

//So name, age, and favoriteHobby are all properties of myObject, and printMyName is a method of myObject. We can call the method with the following:
myObject.printMyName(); //Does this remind you of anything? 

//If you said console.log(), you're correct! We're essentially accessing a console object that's available in all browsers, and then we're accessing the log() method on the console object that prints data to the console. We're basically using a JavaScript function (or method) that's already been written for us.

//Homework: Create an object called bookCollection that includes an owner property, a books array that includes a few books, and an addBook method that takes a book name as an argument and adds the book to books array.





//Now let's talk about variable scope. When you define a variable using const or let outside of a function or block of code, it's available anywhere else in the code file. For example:

const globalVariable = "You can access this variable within functions or at the root level of the file."; //This is how we've been defining variables so far.

//However, you can also create variables within a function, and those variables are only accessible within that function.

function returnNumber() {
    let numberToReturn = 25;
    return numberToReturn;
}

console.log(numberToReturn); //This will return an error because numberToReturn is not defined at the global scope.

//You can then re-use the numberToReturn variable in other functions and it will have no impact on that variable in the other function.

function returnNewNumber() {
    let numberToReturn = 30;
    return numberToReturn;
}

returnNewNumber(); //This will return 30 and there will be no errors

//You can also redefine variables within functions that have already been declared at the global scope.

const devsName = "Devlin";

function printMyName() {
    const devsName = "Devlin Peck";
    console.log(devsName);
}

printMyName();//This will run without any issues, because the function checks for locally defined variables before checking the global scope. It will return "Devlin Peck"

//If you use a variable within a function that's not defined in that function, it will check the global scope for that variable. For example, if we deleted "const devsName = 'Devlin Peck'" from the printMyName() function above, then it would get the globally defined devsName variable, which is equal to "Devlin".





//Now let's dive into conditionals, which are crucial for controlling the flow of logic in your JavaScript code. Put simply, they are if / else statements that decide which code to run based on the "truthiness" of a statement. Here's the format:

if (true) { //you can replace "true" on this line with any expression you want to evaluate
    //execute this code if true
} else {
    //execute this code if false
}

//Here's another example
let currentUser = "Devlin";
if (currentUser == "Devlin") { //remember that we need to use 2 or 3 equals signs
    console.log("This is Devlin!"); //this code would run since currentUser is indeed equal to "Devlin"
} else {
    console.log("This is not Devlin.") //this code would not run unless we change the value of currentUser to something else first
}

//Sometimes, there may be multiple conditionals that you want to check. You can do this with the "else if" keyword, like so:
let currentScore = 80;
if (currentScore === 100) {
    console.log("Congratulations, you got a perfect score!");
} else if (currentScore >= 80) {
    console.log("Congratulations, you passed!") //This code would execute since currentScore is equal to 80
} else {
    console.log("Uh oh...you did not pass. Try again.")
}

//To make your if statements more concise, you can use the ternary operator. It follows this format (condition to evaluate) ? what to return if true : what to return if false
let perfectScore = currentScore == 100 ? true : false; //returns true if the currentScore is equal to 100 and returns false if not
let userGrade = currentScore >= 90 ? "A" : currentScore >= 80 ? "B" : currentScore >= 70 ? "C" : "F"; //You can use multple colons to simulate else if statements
console.log(userGrade); // "B"
//The ternary operator approach is best for simple, quick expressions that you want to evaluate. Complex logic is best handled with the traditional approach to make it more readable.

//Homework: Create a new JavaScript object called myCourseDetails, and give it 3 properties: name, duration, and description. Then create an if statement that logs "This course is ready for production" if the name, duration, and description are all set, and have it log "This course is not ready for production" if any of those details are not set. Don't forget about dot notation and the && operator!






//Sometimes, you know in advance what the potential values are for the variable you want to execute conditional logic for. In these cases, it may be easier to use a switch statement, which uses the following format:
let day = "Monday";
switch(day) {
    case "Monday":
      console.log("Start of work week"); //This code would execute since day is equal to "Monday"
      break;
    case "Friday":
      console.log("Almost weekend!");
      break;
    default:
      console.log("It's another day");
}

//You MUST use break statements after each case or else the code will just keep executing; the break tells it to execute the switch code block.


//Homework: What would be logged to the console if day were equal to "Tuesday"?





//Another way to control the flow of logic is with something called loops. Loops will execute the code within their code block as long as a condition remains true. 

//First, let's cover for loops. They follow a specific format. You use the for keyword, then within parentheses you need to include 3 different elements separated by semicolons. First, initialize the loop with a variable, then write an expression that determines how long the loop will run (it stops when the expression is false), and then write an increment to run after each iteration of the loop. In the following example, we create a variable i and set it equal to 0, we tell the loop to run as long as the variable's value is less than 5, and we add 1 to i after each iteration of the loop. It will run console.log 4 times (it will log 0, then 1, then 2, then 3, then 4, stopping after that because i will be equal to 5, which makes i < 5 no longer evaluate to true) 
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//You can also use while loops (though for loops like in the example above are more common). While loops continue executing as long as the condition within the parentheses evaluates to true, and you need to manually increment or adjust that value within the loop, like so:
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

//Homework: Create a for loop with a conditional inside of it: it should start at 0 and log to the console "I am less than 3" when the value is less than 3, and it should log "I am greater than 3" when its value is greater than 3. It should stop after 6 runs.




//Now let's explore how to execute JavaScript within Storyline 360! This lets you extend Storyline's functionality with custom code. The primary way to interact with Storyline is by getting and setting Storyline variables.

//First, we set a variable called player equal to the GetPlayer() method; this method lets us access additional Storyline methods to get and set Storyline variables.
const player = GetPlayer();

//Now let's imagine we have a Storyline 'number' variable titled quizScore. We can access it with JavaScript using the GetVar('variableName') method, which is accessible only after we execute GetPlayer().

let currentQuizScore = player.GetVar("quizScore"); //We're creating a new JavaScript variable and setting it equal to the value of the quizScore Storyline variable.
//The Storyline variable name is always referenced as a string. And player.GetVar() is the same as GetPlayer().GetVar() since we set the player variable equal to GetPlayer() above.

//You can set a Storyline variable by using the SetVar('variableName', value) method. Keep in mind that if you're setting a number or true/false variable, you don't use quotes, and if you're setting a text variable, you must set it equal to a string.
player.SetVar("quizScore", 100) //This sets the quizScore Storyline variable equal to 100.

//Let's go over to Storyline and create two buttons: one that sets the quizScore to 100 and another that sets the quizScore to 0. Note that Execute JavaScript triggers in Storyline have their own scope, so you cannot access variables in one Execute JavaScript trigger from another Execute JavaScript trigger.

GetPlayer().SetVar("quizScore", 100); //execute this when the user clicks the Pass button in Storyline
GetPlayer().SetVar("quizScore", 0); //execute this when the user clicks the Fail button in Storyline


//Homework: Add code to each of the Execute JavaScript triggers so that when the user's score is 100, it sets the Storyline feedbackText variable equal to a congratulations message, and when the user's score is less than 100, it sets the feedbackText message equal to an encouraging try again message.





//Now let's explore working with APIs within Storyline; this is where the fun begins! We can communicate with external systems to bring dynamic data into eLearning projects. First, we need to cover the fetch API. fetch lets us send an API request to another server, get data from it or send data to it (along with some other stuff that we'll cover in a future video.) Think of fetch as a messenger service.

//When we send a fetch request, it will take some time to receive data back. The data doesn't appear instantly because the server needs time to process our request and respond to it. When this happens, JavaScript returns a Promise object. It essentially makes a "promise" to us that something will happen once it's done processing. The fetch method waits for this promise to resolve, then we can make something else happen using the .then() method. .then() takes an arrow function as an argument where we define what it should do with the data once it's done processing.

//In this example below, we send a request to a random cat fact API, then we wait for the response and parse out the body as JSON using the .json() method. From there, we wait for that to happen and then console.log the data. This can be really confusing at first, but the important thing to realize with this common pattern is that we're getting data from a server and then parsing it into a JavaScript object so that we can work with the data.
fetch('https://catfact.ninja/fact')
  .then(response => response.json())
  .then(data => console.log(data));

//When we run that code, we see that it returns an object in the following format: (we can also see this from the API docs, which are a crucial part of working with APIs: https://catfact.ninja/#/Facts/getRandomFact)
{
    "fact": "string",
    "length": 0
}

//So to access the fact itself, we'd need to log data.fact (instead of the whole data object), like so:
fetch('https://catfact.ninja/fact')
  .then(response => response.json()) //The .json() method parses the body of the response, since the full response contains other info we don't need right now.
  .then(data => console.log(data.fact));

//Also keep in mind that the "response" and "data" variables can be set to whatever we want in those arrow functions as long as we're consistent, but using these keywords is best practice and good for readability.

//Let's modify the code so that it updates a Storyline variable called catFact with the fact that gets returned. 
fetch('https://catfact.ninja/fact')
  .then(response => response.json())
  .then(data => { //Added curly brackets to make the final code that we're executing easier to read (rather than just executing it on one line)
    GetPlayer().SetVar("catFact", data.fact)
});
//Now we can execute this code whenever the user clicks on the Generate Fact button in Storyline to update the Storyline catFact variable with a random cat fact (and display it on the screen in a text box)





//When you’re doing operations that may be prone to fail, such as making API calls, you can include your code within try / catch blocks so that error handling is easier. Here's the format:
try {
    //Code that might cause an error goes here
    console.log(undefinedVariable); //This will cause an error becaused undefinedVariable doesn't exist...we never defined it.
} catch (error) {
    //This code runs if an error occurs in the try block
    console.log("An error occurred: " + error.message);
    //Instead of crashing, we can handle the error appropriately
}
//When you use this approach, the argument that you pass into the catch block (often named 'error') will be equal to the error object that gets returned by any error that may occur in the try block. You can access the error objects message with dot notation: error.message.

//Homework: Make an API call to the cat fact generator within a try block, and if an error is caught, log the error's message.





//We can get way more advanced with working with APIs, but we'll save that for another video. If you're eager to learn more about this, you should know that the fetch() method can take an additional argument (which is a JavaScript object including deeper options such as what type of request to send, which headers and authorization to include, etc. This is where you would include an API key if needed)

//I hope that you enjoyed this tutorial! To show your support, I'd really appreciate you liking the Introduction to JavaScript video and subscribing to the Devlin Peck YouTube channel. There are many more free tutorials on the way :D.