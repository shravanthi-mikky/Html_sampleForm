const text=document.querySelector("#name");
let errorMsg=document.querySelector(".errorMsg");
text.addEventListener('input',function(){
    let regexSample=RegExp('^[A-Z]{1}[a-z]{2}$');
    if(regexSample.test(text.value)){
        errorMsg.textContent="";
    }
    else
    {
        errorMsg.textContent="Given name is Invalid";
    }
})