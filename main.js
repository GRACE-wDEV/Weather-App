

// let datenow = new Date();//to show date NOOOWWW
// console.log(datenow);
// console.log(Date.now)//date in meliseconds from Jan 1, 1970

// let birthday = new Date("May 24, 2008");
// console.log(birthday.getDate());// output: 24
// console.log(birthday.getDay())//output: 6, represents saturday

// let dateNow = new Date();
// let dateDiff = dateNow - birthday;
// console.log((dateDiff)/1000/60/60/24/365);

// console.log(dateNow.getTime());

// console.log(dateNow.getFullYear());
// console.log(1+(dateNow.getMonth()));
// console.log(dateNow.getDay()+1);//



let dateNow = new Date();
// console.log(dateNow);
// console.log("#".repeat(60));
// dateNow.setTime(0);
// console.log(dateNow);
// dateNow.setDate(1);// makes it june 1, not june 21!(now)
// console.log(dateNow);
// Set year to 2025 and month to 13 (which is February 2026, since months are 0-based)
dateNow.setFullYear(2025, 13);
console.log(dateNow); // Logs the updated date object
console.log(Date.parse("May 24, 2008"));// gives meli seconds from Jan 1 1970 to May 24, 2008
// console.log(Date.parse("May 24, 2008")/1000/60/60/24/365);// gives years from Jan 1 1970 to May 24, 2008
console.log(new Date(1211576400000)) // converts milliseconds to date, 1211576400000 is the milliseconds for May 24, 2008

console.log(new Date("1982-05-24T06:10:00Z"));// converts string to date, Z means UTC time and T means time starts
console.log(new Date("1982-05-24T06:10:00+02:00"));// converts string to date, +02:00 means 2 hours ahead of UTC time
// function* generateNumbers()
// {
//   yield 1;
//   // alert("Hello"); // This will not work in Node.js, as alert is a browser-specific function
//   yield 2;
//   yield 3;
//   yield 4;
// }
// console.log(generateNumbers());
// let generator = generateNumbers();
// for(let value of generator)
// {
//   console.log(value);// outputs 1, 2, 3, 4
// }

//Generate infinite numbers
function* generateInfiniteNumbers() {
  let num = 0;
  while (true) {
    yield num++;
  }
}// This generator will yield numbers starting from 0 and incrementing by 1 each time
let infiniteGenerator = generateInfiniteNumbers();
for (let i = 0; i < 10; i++) {
  console.log(infiniteGenerator.next().value); // Outputs numbers from 0 to 9
}

// JSON => JavaScript Object Notation
// JSON is a lightweight data interchange format that is easy to read and write for humans and machines.
/*
  JSON Syntax:
  - Data is represented as key-value pairs.
  - Keys are strings enclosed in double quotes.
  - Values can be strings, numbers, objects, arrays, booleans, or null.
  - Objects are enclosed in curly braces {}.
  - Arrays are enclosed in square brackets [].
  - Example:
    {
      "name": "John",
      "age": 30,
      "isStudent": false,
      "courses": ["Math", "Science"],
      "address": {
        "street": "123 Main St",
        "city": "New York"
      }
    }
*/

// API (Application Programming Interface) is a set of rules and protocols for building and interacting with software applications. It allows different software systems to communicate with each other, enabling developers to access the functionality of one application from another.
                  
// parse and stringify JSON
let jsonString = '{"name": "John", "age": 30, "isStudent": false}';
let jsonObject = JSON.parse(jsonString); // Converts JSON string to JavaScript object
console.log(jsonObject); // Outputs: { name: 'John', age: 30, isStudent: false }
let newJsonString = JSON.stringify(jsonObject); // Converts JavaScript object to JSON string
console.log(newJsonString); // Outputs: {"name":"John","age":30,"isStudent":false}

// Asynchronous & Synchronous programming
// Synchronous programming executes code sequentially, blocking the execution of subsequent code until the current operation completes.
// Asynchronous programming allows code to run in the background, enabling other code to execute while waiting for a response or operation to complete.

// Example of synchronous code
// console.log(1);
// console.log(2);
// alert("This is synchronous code");
// console.log(3);
// Example of asynchronous code using setTimeout
// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 1000); // This will execute after 1 second
// console.log(3);
// AJAX (Asynchronous JavaScript and XML) is a technique used in web development to send and receive data asynchronously without refreshing the entire page. It allows web applications to update parts of a web page without reloading the whole page, improving user experience and performance.
let req = new XMLHttpRequest();
console.log(req);
// req.open("GET", "https://jsonplaceholder.typicode.com/posts", true); // Asynchronous request

// real request on API

// req.open("GET", "https://api.github.com/users/elzerowebschool/repos", true); // Asynchronous request
// req.send(); // Send the request
//Ready State: Status of the request
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready
// Status
// 200: Response is OK
// 404: Not Found
// req.onreadystatechange = function () 
// {
//   // console.log(req.readyState);
//   // console.log(req.status);
//   if(this.readyState==4 && this.status==200)
//   {
//     console.log(this.responseText); // Outputs the response text from the server
//   }
// }

//locally
// let myReq = new XMLHttpRequest();//https://api.github.com/users/elzerowebschool/repos
// myReq.open("GET", "https://api.github.com/users/elzerowebschool/repos", true); // Asynchronous request to a local JSON file
// myReq.send();
// myReq.onreadystatechange = function()
// {
//   if(this.readyState==4 && this.status==200)
//   {
//     // console.log(this.responseText);
//     let jsData = JSON.parse(this.responseText); // Parse the JSON response
//     for(let i =0; i<jsData.length; i++)
//     {
//       let div = document.createElement("div");
//       let repoName = document.createTextNode(jsData[i].full_name);
//       div.appendChild(repoName);
//       document.body.appendChild(div);
//     }
//   }
// }; 

// callback hell || pyramid of doom
// a function that takes a callback function as an argument and calls it after a delay


//promises
// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// It allows you to write asynchronous code in a more manageable way, avoiding callback hell.


// let myPromise = new Promise((resolve, reject) =>
// {
//   let connect = true;
//   if(connect)
//   {
//     resolve("Connected Successfully");
//   }else
//   {
//     reject("Failed, niggar");
//   }
// });
// console.log(myPromise)
// myPromise.then(
//   (successMessage) =>
//   {
//     console.log(successMessage);
//   }
//   ,(error)=>{console.log(error)}
// );

// then, catch, finally
let myPromise = new Promise((resolve, reject) =>{
  let employees = ["ahmed", "mahmoud", "omr"];
  if(employees.length == 4)
  {
    resolve(employees);
  }else reject(Error("Number of Employees isn't 4 xD"));
});

myPromise.then((resolved)=>{
  resolved.length = 2;
  return resolved;
}).then((resolved)=>{
  resolved.length = 1;
  return resolved;
}).then((resolved)=>{
  console.log(`The employeeedd person isss>>> ${resolved}`);
}).catch((rejected)=>console.log(rejected)).finally(()=>{console.log("The operation is DONNNEEE")});

// promises and XHR

// function getData(apiLink)
// {
//   return new Promise((resolve, reject) =>{
//     let myRequest = new XMLHttpRequest;
//     myRequest.open("GET", apiLink);
//     myRequest.send();
//     myRequest.onload = function()
//     {
//       if(this.readyState == 4 && this.status == 200)
//         resolve(JSON.parse(this.responseText));
//       else
//         reject(Error("Data NOT FOUNddd:)"));
//     }
//   })
// }
// getData("https://api.github.com/users/elzerowebschool/repos").then((resolved)=>{
//   resolved.length = 10;
//   return resolved;
// }).then((resolved)=>{
//   console.log(resolved[2].name);
// }).catch((rej)=>{console.log(rej)});

// fetch can do of the above!
fetch("https://api.github.com/users/elzerowebschool/repos").then((response)=>{
  return response.json();
}).then((data)=>{
  data.length=10;
  return data;
}).then((tenDatas)=>{
  console.log(tenDatas[5].name);
});

// promise: all, all_settled, race
// let myFirstPromise = new Promise((res, rej)=>{
//   setTimeout(() => {
//     res("I'm the First Promise");
//   }, 5000);
// });
// let mySecondPromise = new Promise((res, rej)=>{
//   setTimeout(()=>{
//     res("I'm the Second Promise");
//   }, 1000);
// });
// let myThirdPromise = new Promise((res, rej)=>{
//   setTimeout(()=>{
//     rej("I'm the Third Promise")
//   }, 2000);
// });

//All
// Promise.all([myFirstPromise, mySecondPromise, myThirdPromise]).then((resolves)=>{
//   console.log(resolves);
// });// retruns an array of all resolved. if one is "rej", it rej with this one's specefic value

// Promise.allSettled([myFirstPromise, mySecondPromise, myThirdPromise]).then((resolves)=>{
//   console.log(resolves);
// })//returns all promises anyway! fullfilled or rejected: all settled 

// Promise.race([myFirstPromise, mySecondPromise, myThirdPromise]).then((resolve)=>{
//   console.log(resolve);
// })//returns the fastest executed promise's res or rej.


// Using 'async' in front of a function to make it return a Promise!

// function getData1()
// {
//   let users = ["ahmed"];
//   if(users.length>0)
//     return Promise.resolve("Users Found");
//   else
//     return Promise.reject(Error("no users found at allll:)"))
// }
// getData1().then((res)=>console.log(res))


//but with async??
async function getData1()
{
  let users = [];
  if(users.length>0)
    return "Users Found";
  else
    throw new Error("no users found at allll:)");
};
getData1().then(
  (res)=>console.log(res),
  (rej)=>console.log("rejjjj " + rej)
);
// await
// used inside ascnced functions to tell JS to wait untill the promise response executes

let MYPROMISE = new Promise((res,rej)=>{
  setTimeout(()=>{
    // res("I'm the Good Promise, trust Me!!!!!!");
    rej(Error("I'm the Bad Promise, but also TRUST MEEEE!!!!!!"))
  }, 2000)
});
async function readData()
{
  console.log("before promise");
  // console.log(MYPROMISE.then((res)=>console.log(res)));
  // console.log(await MYPROMISE)
  console.log(await MYPROMISE.catch((err)=>err));
  console.log("after promise");
}
readData();
//Try, catch, and finallyyyyy with fetchhh

async function fetchData()
{
  console.log("before Fetch")
  try{
    let myData = await fetch("https://api.github.com/users/elzerowebschool/repos");
    console.log(await myData.json())
  }
  catch (reason)
  {
    console.log(`Reason: ${reason}`)
  }
  finally
  {
    console.log("After fetch");
  }
}
fetchData();

