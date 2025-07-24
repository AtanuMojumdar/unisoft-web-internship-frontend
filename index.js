const emailInput = document.getElementById("exampleFormControlInput1");
const passInput = document.getElementById("inputPassword5");
const submitbtn = document.getElementById("submitbtn");
const loginSubmitBtn = document.getElementById("loginSubmitBtn");


submitbtn?.addEventListener("click", () => {
    let success = false;
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
            if (val.message == "success") {
                success = true
                window.localStorage.setItem("USERIN","TRUE")
            }
        })
        
        .then(() => {
            if (success) {
                window.location.href = "http://localhost:5500/home.html"

            }
        })
})

loginSubmitBtn?.addEventListener("click", () => {
    let success = false;
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
            if (val.message == "success") {
                success = true
                window.localStorage.setItem("USERIN","TRUE")
            }

        })
        .then(() => {
            if (success) {
                window.location.href="http://localhost:5500/home.html"
            }
        })
})