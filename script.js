// generate random #
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

// set cookie with a random #
function setCookie() {
    var randomNumber = generateRandomNumber();
    document.cookie = "randomNumber=" + randomNumber;
    console.log("Cookie set: randomNumber=" + randomNumber);
}

// call setcookie function when the html is loaded
window.onload = setCookie;
