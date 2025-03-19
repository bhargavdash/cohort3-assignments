document.getElementById("show-sign-in").addEventListener('click', () =>{
    document.getElementById("signupId").style.display = "none";
    document.getElementById("signinId").style.display = "block";
})

document.getElementById("show-sign-up").addEventListener('click', () =>{
    document.getElementById("signinId").style.display = "none";
    document.getElementById("signupId").style.display = "block";
})

let signedIn = false;

