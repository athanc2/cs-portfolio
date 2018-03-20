var steve = document.getElementById("steve");
var alex = document.getElementById("alex");
var display = document.getElementById("display");

steve.addEventListener("click", function(){
    display.innerHTML = "<span style='font-size:35px'> Steve is the main protagonist of the famous video game Minecraft. Very little is specifically known about Steve and who or what it is, where it orignated from, what its goal is, and if it's even human.</span>"
})

alex.addEventListener("click", function(){
    display.innerHTML = "<span style='font-size:35px'> Alex is the main deuteragonist of the famous video game Minecraft. She is the female counterpart of Steve added during The Bountiful Update. She has all of the abilities as Steve. </span>"  
})