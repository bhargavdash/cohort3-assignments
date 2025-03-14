let todos = document.getElementsByClassName("todo");
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");


let selected = null;

for(let todo of todos){
    todo.addEventListener("dragstart", (e)=>{
        selected = e.target;
        console.log("Selected: ", e.target);
    });
}

box1.addEventListener("dragover", (e) => {
    e.preventDefault();
})
box1.addEventListener("drop", (e) =>{
    if(selected){
        box1.appendChild(selected);
        selected = null;
    }
})
box2.addEventListener("dragover", (e) => {
    e.preventDefault();
})
box2.addEventListener("drop", (e) =>{
    if(selected){
        box2.appendChild(selected);
        selected = null;
    }
})
box3.addEventListener("dragover", (e) => {
    e.preventDefault();
})
box3.addEventListener("drop", (e) =>{
    if(selected){
        box3.appendChild(selected);
        selected = null;
    }
})
box4.addEventListener("dragover", (e) => {
    e.preventDefault();
})
box4.addEventListener("drop", (e) =>{
    if(selected){
        box4.appendChild(selected);
        selected = null;
    }
})

function addTodo(boxId){
    let newTodo = document.createElement("div");
    newTodo.className = "todo";
    let top = document.ge
}