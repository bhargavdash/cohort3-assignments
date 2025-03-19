document.getElementById("show-sign-in").addEventListener('click', () =>{
    document.getElementById("signupId").style.display = "none";
    document.getElementById("signinId").style.display = "block";
})

document.getElementById("show-sign-up").addEventListener('click', () =>{
    document.getElementById("signinId").style.display = "none";
    document.getElementById("signupId").style.display = "block";
})


async function getTodos(){
    const token = localStorage.getItem("token");

    const response = await axios.get('http://localhost:3000/todos/get', {
        headers: {
            token: token
        }
    })
    console.log(response.data);
    const parent = document.getElementById("addTodoField")
    parent.innerHTML = "";
    response.data.todos.forEach(todo => {
        const ele = document.createElement("li");
        ele.innerHTML = todo.title;
        parent.appendChild(ele);
    });
}

async function addTodo(){
    const title = document.getElementById("todo-title").value;
    const timestamp = new Date().toLocaleString();
    const token = localStorage.getItem("token");

    const response = await axios.post(
        'http://localhost:3000/todos/create',
        {
            title: title,
            isDone: false,
            timestamp: timestamp
        }, 
        {
        headers: {
            token: token
        }
        }
    )

    console.log(response.data);
    getTodos();    
}

async function handleSignUp(){
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;

    const response = await axios.post("http://localhost:3000/users/signup", {
        username: username,
        password: password
    })

    console.log(response.data);
}

async function handleSignIn(){
    const username = document.getElementById("signin-username").value;
    const password = document.getElementById("signin-password").value;

    const response = await axios.post("http://localhost:3000/users/signin", {
        username: username,
        password: password
    })
    console.log(response.data.token)
    localStorage.setItem("token", response.data.token);

    document.getElementById("todoInterfaceId").style.display = "block"
    document.getElementById("logout-btn").style.display = "block"
    document.getElementById("signupId").style.display = "none"
    document.getElementById("signinId").style.display = "none"

    getTodos();
}

function logout(){
    localStorage.removeItem("token");
    document.location.reload();
}

