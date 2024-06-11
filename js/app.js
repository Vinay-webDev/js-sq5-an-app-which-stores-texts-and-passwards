//1.///1.///1.////
let password = [];
const view1 = document.getElementById("view1");
const view2 = document.getElementById("view2");
const view3 = document.getElementById("view3");
function newUser() {
    if(localStorage.length === 0) {
        view1.style.display = "none";
        view2.style.display = "block";
        /* In this state when we refresh the password array is said to be empty
        so we can again sign up which inaccurate wrong working so need to do something 
        */
    }
    else {
        alert("you already have password!");
    }
}
///2. section view2 /// 2. section view2 //// 2. section view2 //////
function setPass() {
    let newPass = document.getElementById("new-pass").value;
    let rePass = document.getElementById("re-pass").value;
    //console.log(newPass);
    //console.log(rePass);
    if (newPass === "" || rePass === "") {
        alert("please enter password!");
    }
    else if (newPass === rePass) {
        password.push(newPass);
        /* we need to convert data JSON*/
        localStorage.setItem("mystore1", JSON.stringify(password));
        view2.style.display = "none";
        view1.style.display = "block";
        /*newPass = " ";
        rePass = " "; */
    }
    else {
        alert("password don't match!");
        newPass = "";
        rePass = "";
    }
    console.log(password);
}
//3. section view3 ///3. section view3 ///3. section view3

function logIn() {
    let logInPassword = document.getElementById("login-pass").value;
    /* need to get the log-in password from mystore1 */
    /* remember we need to parse the JSON data from localStorage */
    //const password = localStorage.getItem("mystore1") 
    const localData = JSON.parse(localStorage.getItem("mystore1"));
    //console.log(localData);
    const password = localData[0];
    //console.log(password);
    if (logInPassword === "") {
        alert("please enter password!");
    }
    else if (logInPassword === password) {
        view1.style.display = "none";
        view3.style.display = "block";
    }
    else {
        alert("wrong password!");
    }
}





















