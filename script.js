let emailInput=document.getElementById('email');
let passwordInput=document.getElementById('pasd');
let button=document.getElementById('sbtn');
let messageDiv=document.getElementById('message');
emailInput.addEventListener("change",validate);
passwordInput.addEventListener("change",validate)

let messagemaildiv=document.getElementById('messageemail');
let messagepassworddiv=document.getElementById('messagepassword');
//button.onclick=geek();
//button.addEventListener("onclick",geek)
emailInput.onchange=validate();
passwordInput.onchange=validate();
function seek()
{

let email=emailInput.value;
    //email.onchange=validate();

    let password=passwordInput.value;
    //pasword.onchange=validate();

    if(email !="" && email.includes("@") && email.length>3 && email.includes(".") && password != "" && password.length>8) {
       
       
        if(password != "" && password.length>8)
       {
          //  console.log("Email & password are valid")
            messageDiv.innerText="All good to go!";
            messageDiv.style.color="green";
           // button.removeAttribute("disabled");

        messagemaildiv.innerText="";
        messagepassworddiv.innerText="";
       // button.onclick=geek();
       if(confirm()==true)
   {
       alert("successfull signup!")
   }
   if(confirm()==false)
   {
       emailInput.value="";
       passwordInput.value=""
       messageDiv.innerText=""
   }

        }
    }


  /* if(confirm()==true)
   {
       alert("successfull signup!")
   }
   if(confirm()==false)
   {
       emailInput.value="";
       passwordInput.value=""
       messageDiv.innerText=""
   }
   //if()
   // var r=confirm("")
  /* if(r==ok)
   {
       alert("sucessfully signed up");
   }*/
}

function validate()
{

    let email=emailInput.value;
    //email.onchange=validate();

    let password=passwordInput.value;
    //pasword.onchange=validate();

    if(email !="" && email.includes("@") && email.length>3 && email.includes(".") && password != "" && password.length>8) {
       
       
        if(password != "" && password.length>8)
       {
          //  console.log("Email & password are valid")
            messageDiv.innerText="All good to go!";
            messageDiv.style.color="green";
           // button.removeAttribute("disabled");

        messagemaildiv.innerText="";
        messagepassworddiv.innerText="";
       // button.onclick=geek();
       

        }
        else{
            // messageDiv.innerText="Email & password validation failed";
            // messageDiv.style.color="red";
            messageDiv.innerText="";
             messagemaildiv.innerText="Make sure email is more than 3 characters and has @ and a.";
             messagemaildiv.style.color="red";
             messagepassworddiv.innerText=" Make sure password is more than 8 characters.";
             messagepassworddiv.style.color="red";
     
             console.log("Email or password is invalid");
         }
     
    }

  //  if(email !="" && email.includes("@") && email.length>3 && email.includes(".") && password != "" && password.length>8) {
       
       
        else(password != "" && password.length>8)
      {
    if(email !="" && email.includes("@") && email.length>3 && email.includes(".") && password != "" && password.length>8){
          //  console.log("Email & password are valid")
            messageDiv.innerText="All good to go!";
            messageDiv.style.color="green";
           // button.removeAttribute("disabled");

        messagemaildiv.innerText="";
        messagepassworddiv.innerText="";
      //  button.onclick=geek();
       

        }
        else{
            // messageDiv.innerText="Email & password validation failed";
            // messageDiv.style.color="red";
            messageDiv.innerText="";
             messagemaildiv.innerText="Make sure email is more than 3 characters and has @ and a.";
             messagemaildiv.style.color="red";
             messagepassworddiv.innerText=" Make sure password is more than 8 characters.";
             messagepassworddiv.style.color="red";
     
             console.log("Email or password is invalid");
         }
     
    }

    /*else{
       // messageDiv.innerText="Email & password validation failed";
       // messageDiv.style.color="red";
       messageDiv.innerText="";
        messagemaildiv.innerText="Make sure email is more than 3 characters and has @ and a.";
        messagemaildiv.style.color="red";
        messagepassworddiv.innerText=" Make sure password is more than 8 characters.";
        messagepassworddiv.style.color="red";

        console.log("Email or password is invalid");
    }*/

}
