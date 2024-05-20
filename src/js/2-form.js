const formData = {
    email: "",
    message: "",
}

const form = document.querySelector(".fb-form");
const email = document.querySelector(".fb-form > label > input");
const message = document.querySelector(".fb-form > label > textarea");
const button = form.children[2];

form.addEventListener("input", () => {
    formData.email = email.value.trim();
    formData.message = message.value.trim();
    localStorage.setItem("fb-form-state", JSON.stringify(formData));
})

form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    if (email.value === "" || message.value === "") {
        alert("Fill please all fields");
    } else {
        console.log(formData);
        localStorage.removeItem("fb-form-state");
        form.reset();
    }
}
)

const fillInputs = () => {
    const savedData = localStorage.getItem("fb-form-state");
    if (savedData !== null) {
        const data = JSON.parse(savedData);
        formData.email = data.email;
        formData.message = data.message;
        email.value = formData.email;
        message.value = formData.message;
    }
};



window.addEventListener("load", fillInputs);