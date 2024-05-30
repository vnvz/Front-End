function clearForm() {
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('email').focus();
  }
  
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === '' || !validateEmail(email)) {
      alert('Por favor, insira um e-mail válido.');
      return false;
    }

    if (password === '') {
      alert('Por favor, insira sua senha.');
      return false;
    }

    alert('Validação realizada com sucesso!');
    localStorage.setItem('userEmail', email);
    window.location.href = 'solicitacao_servicos.html';
    
    return true;
  }

  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
  });
  