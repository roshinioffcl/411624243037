console.log("Hello");

// Variable declaration
// let - function scope - only inside a function not outside of it - can use redeclare and reassign
// var - block scope - inside a block only - cannot redeclare and reassign
// const - block - cannot redeclare and reassign

const first = 1;
const second = 2;
console.log(first);
const str = "Rose";
console.log(str);

// Array
const fruits = ["Apple","Banana","Grapes"];
console.log(fruits[0]);
// replace
fruits[1] = "Orange";
console.log(fruits[1]);
// in javascript array can store multiple element with different data type
const arr = [1,"Name", false, 2.4];
console.log(arr);
// Access array with for loop
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

const fourth = document.getElementById("ptag");
fourth.innerHTML = "This is my fourth class";

// function declaration
// syntax
// function functionName(){ }
function newFunction(){
    console.log("I am writing something....");
}

// Important topics
// 1. Event - 
// 2. Event handler - handles the event 
// 3. Event listener - something that wait for a event to happen

const input = document.getElementById("eventListener");
const output = document.getElementById("Ptag");
input.addEventListener("input", () =>{
    // writing a function directly
    output.textContent = input.value
})

// create a p tag without using html
// const new_var = document.createElement("h1");
const new_var = document.createElement("p");
new_var.textContent = "New paragraph";
document.body.appendChild(new_var);
new_var.remove()
