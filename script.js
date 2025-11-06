const form = document.getElementById('form');
const result = document.getElementById('result');

const reUser = /^[a-z\d_]{4,15}$/i;
const reEmail = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i;
const rePass  = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const pass = document.getElementById('password').value;

  const okUser = reUser.test(user);
  const okEmail = reEmail.test(email);
  const okPass = rePass.test(pass);

  if (okUser && okEmail && okPass) {
    result.textContent = '✅ Tudo válido! Pronto para enviar.';
    result.className = 'success';
  } else {
    result.textContent = `❌ Revê os campos: ${
      [!okUser && 'nome', !okEmail && 'e-mail', !okPass && 'senha'].filter(Boolean).join(', ')
    }.`;
    result.className = 'error';
  }
});
