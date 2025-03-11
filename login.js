function myfun(){
    var user=document.getElementById("username").value;
    var pass=document.getElementById("passname").value;

    if(user=="love" && pass=="code")
    {
        alert("Login sucess");
        window.open("mafter.html");
        return false;

    }
    else
    {
        alert("No user found with")
        alert(user);
        alert(pass);
    }
}