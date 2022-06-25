const text=document.getElementById('name');
let errorMsg=document.querySelector(".errorMsg");
text.addEventListener('input',function(){
    let regexSample=RegExp('^[A-Z]{1}[a-z]{2,}$');
    if(regexSample.test(text.value)){
        errorMsg.textContent="";
    }
    else
    {
        errorMsg.textContent="Given name is Invalid";
    }
})
//validation for email
const emailSample=document.getElementById('email');
let errorMsgForEmail=document.querySelector(".errorMsgEmail");
emailSample.addEventListener('input',function(){
    let regexSample=RegExp('^[A-Za-z0-9](.[a-z0-9])@[a-z].[a-z]{2,4}(.[a-z]{2,4})$');
    if(regexSample.test(emailSample.value)){
        errorMsgForEmail.textContent="";
    }
    else
    {
        errorMsgForEmail.textContent="Given email is Invalid";
    }
})
//validation for phone
const phoneSample=document.getElementById('contact');
let errorMsgForphone=document.querySelector(".errorMsgPhone");
phoneSample.addEventListener('input',function(){
    let regexSample=RegExp('^[0-9]{2}\\s[6-9]{1}[0-9]{9}$');
    if(regexSample.test(phoneSample.value)){
        errorMsgForphone.textContent="";
    }
    else
    {
        errorMsgForphone.textContent="Given phone Number is Invalid";
    }
})
/*
//validation for Password rule-1 uc4
const passwordSample=document.getElementById('password');
let errorMsgForPassword=document.querySelector(".errorMsgPassword");
passwordSample.addEventListener('input',function(){
    let regexSample=RegExp('^[a-zA-Z]{8,}$');
    if(regexSample.test(passwordSample.value)){
        errorMsgForPassword.textContent="";
    }
    else
    {
        errorMsgForPassword.textContent="Password is Invalid";
    }
})
*/
const passwordSample2=document.getElementById('password');
let errorMsgForPassword2=document.querySelector(".errorMsgPassword");
passwordSample2.addEventListener('input',function(){
    let regexSample=RegExp('^(?=.*[@#$%0-9A-Z])[@#$%0-9a-zA-Z]{8,}$');
    if(regexSample.test(passwordSample2.value)){
        errorMsgForPassword2.textContent="";
    }
    else
    {
        errorMsgForPassword2.textContent="Password is Invalid";
    }
})
/*
function validate(){
    var phoneNumber = document.getElementById('contact').value;
    var  name= document.getElementById('name').value;
    var phoneRGEX = RegExp('^[0-9]{2}[0-9]{8}');
    var regexSample=RegExp('^[A-Z]{1}[a-z]{2,}$');
    var phoneResult = phoneRGEX.test(phoneNumber);
    var nameResult = regexSample.test(name);
    //alert("phone:"+phoneResult + "name :"+nameResult);
    if(phoneResult == false)
    {
        alert('Please enter a valid phone number');
        return false;
    }

    if(nameResult == false)
    {
        alert('Please enter a valid name');
        return false;
    }

    return true;
  }
  */