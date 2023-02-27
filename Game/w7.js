function processForm(){
document.getElementById("userInfo").style.display = "";
document.getElementById("firstName").innerText = document.getElementById("fname").value;
document.getElementById("lastName").innerText = document.getElementById("lname").value;
document.getElementById("guildAffiliation").innerText = document.getElementById("gname").value;
document.getElementById("health").innerText = document.getElementById("hname").value;
document.getElementById("attack").innerText = document.getElementById("aname").value;

}