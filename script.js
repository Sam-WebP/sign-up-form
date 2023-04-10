const password = document.querySelector('#password');
const confirmedPassword = document.querySelector('#confirmed-password');
const mainButton = document.querySelector('#main-button');

let checkMatch = (fieldOne, fieldTwo) => {
    if (fieldOne.value === fieldTwo.value) {
        return true;
    }
};

let warnMatch = (fieldOne, fieldTwo) => {
    if (!checkMatch(fieldOne, fieldTwo)) {
        fieldTwo.style.border = "solid 3px red";
       } else {
        fieldTwo.style.border = "solid 3px green";
       }
}

confirmedPassword.addEventListener("input", () => {
    warnMatch(password, confirmedPassword);
});

mainButton.addEventListener("click", (event) => {
    if (!checkMatch(password, confirmedPassword)) {
        warnMatch(password, confirmedPassword);
        event.preventDefault();
        alert("The passwords do not match");
    };
});