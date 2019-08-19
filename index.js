const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
  // 아래 6줄의 코드는 toggle 1줄과 같다
  //   const hasClass = title.classList.contains(CLICKED_CLASS);
  //   if (hasClass) {
  //     title.classList.remove(CLICKED_CLASS);
  //   } else {
  //     title.classList.add(CLICKED_CLASS);
  //   }
}

function init() {
  title.addEventListener("click", handleClick);
}
init();

// const BASE_COLOR = "rgb(52, 73, 94)";
// const OTHER_COLOR = "#7f8c8d";

// function handleClick() {
//   const currentColor = title.style.color;
//   if (currentColor === BASE_COLOR) {
//     title.style.color = OTHER_COLOR;
//   } else {
//     title.style.color = BASE_COLOR;
//   }
// }

// function init() {
//   title.style.color = BASE_COLOR;
//   title.addEventListener("click", handleClick);
//   // click or mouseenter or etc...
// }
// init();

// if (10 > 5) {
//   console.log("hi");
// } else {
//   console.log("ho");
// }

// const age = prompt("How old are you?");

// // 매우 오래된 자바스크립트의 원형.

// if (age >= 18 && age <= 21) {
//   console.log("you can drink");
// } else if (age > 21) {
//   console.log("go ahead");
// } else {
//   console.log("too young");
// }
