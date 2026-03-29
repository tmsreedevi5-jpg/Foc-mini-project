let a = document.getElementById("abcd");
a.innerHTML = "Welcome to BootCamp";
a.classList.add("change");

a.addEventListener("mouseover",function(){
    a.innerHTML = "CSE-B2";
});
