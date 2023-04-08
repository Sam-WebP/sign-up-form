const password = document.querySelector('#password');
const confirmedPassword = document.querySelector('#confirmed-password');

let checkMatch = (fieldOne, fieldTwo) => {
    if (fieldOne.value === fieldTwo.value) {
        alert("There is a match");
    };
};

confirmedPassword.addEventListener("input", function() {
    checkMatch(password, confirmedPassword);
});
