function login() {
  const user = document.getElementById('login-user').value;
  const pass = document.getElementById('login-pass').value;
  const err  = document.getElementById('login-error');

  // === AKUN OPERATOR (STATIS) ===
  const USERNAME = "operator";
  const PASSWORD = "12345";

  if (user === USERNAME && pass === PASSWORD) {
    localStorage.setItem("loginOK", "true");
    window.location.href = "singlefile_webapp.html"; // halaman dashboard
  } else {
    err.innerText = "Username atau Password salah";
  }
}


