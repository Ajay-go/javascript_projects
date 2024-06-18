let name = document.getElementById("name");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let text = document.getElementById("area");
const btn = document.getElementById("btn")

let name_error = document.getElementById("name_error");
let phone_error = document.getElementById("phone_error");
let email_error = document.getElementById("email_error");
let text_error = document.getElementById("text_error");






function checkname(){
    let fullname = name.value;
    let len = fullname.length;
    let ind = fullname.indexOf(' ');
    if(ind <= 0 || ind > len){
        name_error.innerHTML="Enter Full Name"
    }else{
        name_error.innerHTML=""
    }
}
function checkphone(){
    let mobile = phone.value;
    let len = mobile.length;
    if( 10 > len || len > 10){
        phone_error.innerHTML="Enter 10 Digits"
    }
    else{
        phone_error.innerHTML=""
    }
    
}
function checkemail(){
    let mail = email.value;
    let len = mail.length;
    let ind1 = mail.indexOf('.');
    let ind2 = mail.indexOf('@');
    if(ind1 <= 0 || ind1 >= len || ind2 <=0 || ind2 >= len || ind2 >ind1){
        email_error.innerHTML="Enter correct email";
    }
    else{
        email_error.innerHTML="";
    }
    
}
function checktext(){
    let txt = text.value;
    let len = txt.length;
    if(len < 25){
        text_error.innerHTML=`${25-len} character required`;
    }
    else{
        text_error.innerHTML="";
    }
    
}
