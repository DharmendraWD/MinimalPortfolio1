// To make hover effect on left side first page button 
document.addEventListener("DOMContentLoaded", function(){
    const b1= document.getElementById("b1");
    const b2= document.getElementById("b2");

    b1.addEventListener("mouseover", function(){
        b2.style.backgroundColor = "#8873EF";
        b1.style.backgroundColor = "white";
    });

    b1.addEventListener("mouseout", function(){
        b2.style.backgroundColor = "";
        b1.style.backgroundColor = "#8873EF";
    });
    
    // Button2 
    b2.addEventListener("mouseover", function(){
        b1.style.backgroundColor = "white";
    });
    b2.addEventListener("mouseout", function(){
        b1.style.backgroundColor = "#8873EF";
    });
});