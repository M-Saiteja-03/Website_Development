var foods=['paneer','biryani','mango dal'];
function display(){
    document.getElementById("favfoods").innerHTML=foods
}
function append(){
    food=prompt("what's your favourite food?");
    foods[foods.length]=food;
    document.getElementById('favfoods').innerHTML=foods;
}