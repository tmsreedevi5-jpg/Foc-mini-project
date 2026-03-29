let a = document.getElementById("abcde");
let b = document.getElementById("ab");
a.addEventListener("mouseover",function(){
    a.innerHTML = "tiger";
    

});
a.addEventListener("mousedown",function(){
    a.innerHTML = "Dog";
});
setTimeout(function(){
    b.innerHTML = "Welcome to the Animal Page!";
},3000);
