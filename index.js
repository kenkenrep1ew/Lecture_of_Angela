// alert("Hello Dicee");
function dice(){
  var dice1 = Math.random() * 6;
  dice1 = Math.floor(dice1) + 1;
  return dice1;
}

document.querySelector("#player1 .dice").textContent = dice();
