let quotes=[
    "The greatest glory in living lies not in never falling, but in rising every time we fall",
    "The way to get started is to quit talking and begin doing",
    "Success is not final, failure is not fatal: It is the courage to continue that counts",
    "The future belongs to those who believe in the beauty of their dreams",
    "You miss 100% of the shots you don't take - Winston Churchill",
    "You only live once, but if you do it right, once is enough",
    "If you tell the truth about yourself, you don't have to remember anything else"


]

function show(){
    let text=document.getElementById("quote");

    text.innerHTML=quotes[Math.floor(Math.random()*quotes.length)];
 
}

setInterval(function(){
    show();
} ,1000)