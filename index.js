const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const color = document.querySelector("span");
     console.log(color);
const btn = document.getElementById("btn");
    console.log(btn);

btn.addEventListener("click", function(){
  let hexColor = "#";
  for(let i=0; i< 6; i++){
     hexColor += hex[getRandomNumber()];
     console.log(getRandomNumber());
        //hexColor +=hex[4];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;

});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}