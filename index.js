const emailInput = document.getElementById("exampleFormControlInput1");
const passInput = document.getElementById("inputPassword5");
const submitbtn = document.getElementById("submitbtn");
const loginSubmitBtn = document.getElementById("loginSubmitBtn");


submitbtn?.addEventListener("click", () => {
    fetch("http://localhost:8000/signup", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            email: emailInput.value,
            password: passInput.value
        })
    })
        .then((value) => {
            return value.json()
        })
        .then((val) => {
            console.log(val)
        })
        .catch((err)=>{
            console.log("Error Occured:")
            console.log(err)
        })
})

loginSubmitBtn?.addEventListener("click",()=>{
    fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            email: emailInput.value,
            password: passInput.value
        })
    })
        .then((value) => {
            return value.json()
        })
        .then((val) => {
            console.log(val)
        })
        .catch((err)=>{
            console.log("Error Occured:")
            console.log(err)
        })
})