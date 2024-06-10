//1.///1.///1.////
let password = [];
const view1 = document.getElementById("view1");
const view2 = document.getElementById("view2");
function signIn() {
    view1.style.display = "none";
    view2.style.display = "block";
}
///2. section view2 /// 2. section view2 //// 2. section view2 //////
function setPass() {
    let newPass = document.getElementById("new-pass").value;
    let rePass = document.getElementById("re-pass").value;
    //console.log(newPass);
    //console.log(rePass);
    if (newPass === rePass) {
        password.push(newPass);
        localStorage.setItem("mystore1", JSON.stringify(password))
    }
    else {
        alert("password don't match!");
        newPass = "";
        rePass = "";
    }
    console.log(password);
}
























