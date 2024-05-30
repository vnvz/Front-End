function clearForm() {
    document.getElementById('email').value = '';
    document.getElementById('newPassword').value = '';
    document.getElementById('confirmPassword').value = '';
    document.getElementById('email').focus();
  }
  
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function validatePassword(password) {
    const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[@#$%&*!\/\\|\-_+.=]).{6,}$/;
    return passwordRegex.test(password);
  }
  
  function validateForm() {
    const email = document.getElementById('email').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    if (email === '' || !validateEmail(email)) {
      alert('Por favor, insira um e-mail válido.');
      return false;
    }
  
    if (newPassword === '') {
      alert('Por favor, insira sua nova senha.');
      return false;
    }
  
    if (confirmPassword === '') {
      alert('Por favor, confirme sua nova senha.');
      return false;
    }
  
    if (!validatePassword(newPassword)) {
      alert('A nova senha deve ter pelo menos 6 caracteres, contendo pelo menos um caractere numérico, uma letra maiúscula e um dos seguintes caracteres especiais: @ # $ % & * ! ? / \\ | - _ + . =');
      return false;
    }
  
    if (newPassword !== confirmPassword) {
      alert('A confirmação de senha não coincide com a nova senha.');
      return false;
    }
  
    alert('Validação realizada com sucesso! Sua senha foi alterada.');
    return true;
  }
  
  document.getElementById('changePasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
  });
  