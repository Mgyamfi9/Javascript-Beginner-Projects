//Grab your selectors
const container = document.querySelector(".container");
const button = document.getElementById("button");
const header = document.getElementById("header");
//add eventlistener to button to gnerate colors and update the DOM
button.addEventListener("click", function handleClick() {
  //create an array that accepts size as parameter.
  //hexcolors are 6 in length excluding the # symbol
  const letters = (size) =>
    [...Array(size)]
      //generate random numbers and alphabets as strings in the array and join them with the join method
      .map(() => Math.floor(Math.random() * 16).toString(16))
      .join("");
  //we add the # symbol to the generated hex code to turn it into a color
  const color = "#" + letters(6);
  console.log(color);
  //we set the container background color to the hexcolor code and update the DOM each time the button is clicked
  container.style.backgroundColor = color;
  header.innerHTML = `Background Colour: ${container.style.backgroundColor}`;
});
