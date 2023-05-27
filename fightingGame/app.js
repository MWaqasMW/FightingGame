var player1 = document.getElementById("player1");
console.log(player1)
document.addEventListener ("keypress" , function (event) {

function change(){
player1.src ="images/iori_act_rest.gif";
player1.style.width = "240px ";

}



var pad = 30;
 moveLef += 30   
if(event.key === "w"){
 player1.src = "images/iori_act_up.gif";//Keyup change img
 player1.style.width = "300px"
setTimeout(change, 1500);
}
else if(event.key  === "s"){
player1.src = "images/iori_act_down.gif"; //Keydown  change img
setTimeout(change, 300);
}

else if(event.key === "d") {

  player1.style.paddingLeft= 

  console.log(moveLef)
}











})















// // Create a new image element
// // var img = document.createElement('img');

// // // Set the source, alt, and width attributes
// // img.src = 'images/iori_act_up.gif';
// // img.alt = 'Alternative text';
// // img.width = 300;
// // img.height = 200;

// // // Append the image element to the body of the HTML document
// // document.body.appendChild(img);


// }
//  Get a reference to the image element



