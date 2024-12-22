// Create an Object
const one  = {
    firstname: "Ayesha" ,
    lastname : "sardar" ,
    age : 20 
};
// Build a Text
let text = "";
for (let x in one) {
  text += one[x] + " ";
};
// Display the Text
document.getElementById('one').innerHTML = text;