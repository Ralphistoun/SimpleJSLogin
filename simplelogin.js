let userName = prompt("Who's there","");a

if (userName === 'Admin') {
let passWord = prompt("Password?");
if (passWord === 'TheMaster') {
alert("Welcome!")
} else if (passWord === null) {
alert("Canceled")
} else {
alert("Wrong Password")
}

} else if (userName === null) {
alert ("Canceled");
} else {
alert("I dont know you");
}
