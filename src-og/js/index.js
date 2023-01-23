function redirect() {
  setTimeout(send(), 5000);
}

function send() {
  document.location.href = "/tasks.html";
}

redirect();
