const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(evet) {
  evet.preventDefault(); //ㄱㅣ본 이베트 차단
  const cuttentValue = input.value;
  paingGreeting(cuttentValue);
  saveName(cuttentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paingGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadname() {
  const currentser = localStorage.getItem(USER_LS);
  if (currentser === null) {
    askForName();
  } else {
    paingGreeting(currentser);
  }
}

function init() {
  loadname();
}

init();
