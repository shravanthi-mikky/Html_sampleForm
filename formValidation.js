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