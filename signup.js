function myfun()
{
    var user =document.getElementById("username").value;
    var pass =document.getElementById("passname").value;
    var em   =document.getElementById("email");
    
    if( user=="000" ||  pass == "111")
    {
        alert("User already Exist");
        return false;
    }
    else
    {
    alert("Sign up sucess");
 
    }
  
 
}