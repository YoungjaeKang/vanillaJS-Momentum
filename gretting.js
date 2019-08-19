const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
  // console.log(currentValue); -> 이걸로 TDD
  /* input에 뭔가를 입력했을 때 입력되면서 document까지 날아가고 새로고침되는 것을 막고
  엔터 입력해도 텍스트가 그대로 남아있도록 한다 */
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    // She is not
    askForName();
  } else {
    // She is
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}
init();

// Local Storage : 작은 정보를 사용자의 컴퓨터에 저장하는 것!
// 개발자 모드에서 Application > Local Storage에서 확인 가능
