function redirect() {
  setTimeout(send, 3500);
}

function send() {
  document.location.href = "/tasks.html";
}

redirect();
