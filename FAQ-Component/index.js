const arrow = document.querySelectorAll("#arrow");

//since queryselectorAll returns a nodelist we loop through with forEach
//target each paragraph(<p>) by using the DOM node manipulation and toggle the classList

arrow.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    arrow.parentNode.nextElementSibling.classList.toggle("inactive");
  });
});

/*Alternative Ways Of Doing It*/

/* const arrows = document.querySelectorAll("#arrow");

//Alt 2
arrows.forEach((arrow) => {
  arrow.addEventListener("click", (event) => {
    const parentContainer = event.target.parentNode;
    const answer = parentContainer.nextElementSibling;

    answer.classList.toggle("inactive");
  });
}); */

/*Alt 2*/

/* const arrows = document.querySelectorAll("#arrow");
const paragraphs = document.querySelectorAll("#answer");

arrows.forEach((arrow, index) => {
  arrow.addEventListener("click", () => {
    paragraphs[index].classList.toggle("inactive");
  });
});
 */
